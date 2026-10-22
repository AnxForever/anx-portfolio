# Windows entry point for scripts/deploy-aliyun.sh.
#
# The build has to happen on Linux, so this translates the repository path to
# its WSL form (/mnt/d/...) and runs the bash script there.
$ErrorActionPreference = "Stop"

$repo = Split-Path -Parent $PSScriptRoot
$drive = $repo.Substring(0, 1).ToLower()
$rest = ($repo.Substring(2) -replace '\\', '/')
$wslPath = "/mnt/$drive$rest"

wsl.exe -e bash -lc "cd '$wslPath' && ./scripts/deploy-aliyun.sh"
exit $LASTEXITCODE
