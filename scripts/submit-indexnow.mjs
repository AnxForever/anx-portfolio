#!/usr/bin/env node
/**
 * Push every URL in the production sitemap to IndexNow (Bing, Yandex, Seznam,
 * Naver). Google ignores IndexNow, so the sitemap still goes through Search
 * Console; this covers the engines that accept a push.
 *
 * The key must already be deployed at `/<key>.txt`, otherwise the engines
 * cannot verify ownership and reject the batch.
 *
 * Usage: node scripts/submit-indexnow.mjs [origin]
 */
const KEY = "aaad89134bce95f55549f9d11cb7dc3e"

const origin = (process.argv[2] ?? "https://me.anxforever.cn").replace(/\/$/, "")
const host = new URL(origin).host

const sitemapRes = await fetch(`${origin}/sitemap.xml`)
if (!sitemapRes.ok) {
  throw new Error(`sitemap ${sitemapRes.status} at ${origin}/sitemap.xml`)
}

const urlList = [...(await sitemapRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => match[1].trim())
  .filter(Boolean)

if (urlList.length === 0) {
  throw new Error("sitemap contains no URLs")
}

const keyLocation = `${origin}/${KEY}.txt`
const keyRes = await fetch(keyLocation)

if (!keyRes.ok) {
  throw new Error(`key file not live: ${keyRes.status} ${keyLocation}`)
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation, urlList }),
})

console.log(`IndexNow ${res.status} ${res.statusText} — ${urlList.length} URLs`)

if (!res.ok) {
  console.error(await res.text())
  process.exit(1)
}
