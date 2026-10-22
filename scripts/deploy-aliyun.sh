#!/usr/bin/env bash
#
# Build the site on Linux (WSL) and publish it to the Aliyun box.
#
# Run through `pnpm deploy` on Windows (scripts/deploy.ps1 hands it to WSL), or
# directly inside WSL:
#
#   cd /mnt/d/anx-portfolio && ./scripts/deploy-aliyun.sh
#
# Why Linux: pnpm's isolated node_modules are symlinks, and Next's standalone
# output keeps them. Built on Windows they point at D:\... and ship win32
# binaries (sharp/SWC), which cannot run on the server.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REMOTE="${DEPLOY_HOST:-stylekit-prod}"
REMOTE_DIR="/var/www/anx-portfolio"
APP_PORT=3100
SITE_URL="https://anxforever.cn"
BUILD_DIR="${XDG_CACHE_HOME:-$HOME/.cache}/anx-portfolio-build"
ARCHIVE="/tmp/anx-portfolio-deploy.tar.gz"

log() { printf '\033[1;34m›\033[0m %s\n' "$*"; }
fail() { printf '\033[1;31m✗\033[0m %s\n' "$*" >&2; exit 1; }

command -v pnpm >/dev/null || fail "pnpm not found (run this inside WSL)"
command -v rsync >/dev/null || fail "rsync not found"
command -v ssh >/dev/null || fail "ssh not found"

log "同步源码 → $BUILD_DIR"
mkdir -p "$BUILD_DIR"
rsync -a --delete \
  --exclude node_modules --exclude .next --exclude .git \
  --exclude .deploy --exclude .artifacts --exclude .vercel --exclude .wrangler \
  "$REPO_ROOT/" "$BUILD_DIR/"

cd "$BUILD_DIR"

log "安装依赖"
pnpm install --frozen-lockfile

log "构建（NEXT_PUBLIC_APP_URL=$SITE_URL）"
NEXT_PUBLIC_APP_URL="$SITE_URL" pnpm build

log "打包 standalone 产物"
rm -rf /tmp/anx-pkg && mkdir -p /tmp/anx-pkg
cp -a .next/standalone/. /tmp/anx-pkg/
mkdir -p /tmp/anx-pkg/.next
cp -a .next/static /tmp/anx-pkg/.next/static
cp -a public /tmp/anx-pkg/public
tar -czf "$ARCHIVE" -C /tmp/anx-pkg .

log "上传到 $REMOTE"
scp -q "$ARCHIVE" "$REMOTE:/tmp/anx-portfolio-deploy.tar.gz"

log "切换版本并重启"
ssh "$REMOTE" "bash -s" <<EOF
set -euo pipefail
NEW="${REMOTE_DIR}.new"
OLD="${REMOTE_DIR}.old"
rm -rf "\$NEW"
mkdir -p "\$NEW"
tar -xzf /tmp/anx-portfolio-deploy.tar.gz -C "\$NEW"
chown -R root:root "\$NEW"
rm -rf "\$OLD"
mv "${REMOTE_DIR}" "\$OLD"
mv "\$NEW" "${REMOTE_DIR}"
systemctl restart anx-portfolio
for _ in \$(seq 1 20); do
  code=\$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:${APP_PORT}/" || true)
  if [ "\$code" = "200" ]; then echo "service healthy"; exit 0; fi
  sleep 1
done
echo "health check failed — rolling back" >&2
rm -rf "${REMOTE_DIR}"
mv "\$OLD" "${REMOTE_DIR}"
systemctl restart anx-portfolio
exit 1
EOF

log "验证线上"
code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$SITE_URL/" || true)
printf '  %s -> %s\n' "$SITE_URL" "$code"
[ "$code" = "200" ] || fail "线上校验失败（$code），服务器已回滚到上一版"

log "完成"
