import { SITE_INFO } from "@/config/site"

export const revalidate = false
export const dynamic = "force-static"

/**
 * Answer engines are explicitly allowed: the site publishes Markdown mirrors
 * and an `llms.txt` index, so being crawled is the point. Keep this list to
 * crawlers whose operators publish a user agent token, and leave `*` allowed
 * so anything unlisted still gets indexed normally.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
]

export function GET() {
  const lines = [
    `# ${SITE_INFO.name} – ${SITE_INFO.url}`,
    `# Agent index: ${SITE_INFO.url}/llms.txt`,
    `# Markdown mirrors: ${SITE_INFO.url}/blog/<slug>.md, /about.md, /projects.md, /experience.md, /education.md, /recognition.md, /craft.md, /bookmarks.md`,
    "",
    "User-agent: *",
    "Allow: /",
    "",
    ...AI_CRAWLERS.flatMap((bot) => [`User-agent: ${bot}`, "Allow: /", ""]),
    `Sitemap: ${SITE_INFO.url}/sitemap.xml`,
    "",
  ]

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
