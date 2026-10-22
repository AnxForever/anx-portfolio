import { absoluteUrl } from "@/lib/utils"

type MarkdownResponseOptions = {
  /**
   * HTML page this Markdown document is the machine-readable mirror of.
   * Omit for standalone documents (e.g. `llms.txt`) that have no HTML twin.
   */
  canonical?: string
}

/**
 * Serve a Markdown mirror with the headers answer engines need: an explicit
 * content type, a canonical pointer back to the HTML page, and `Vary: Accept`
 * because the same URL serves HTML or Markdown depending on the request.
 */
export function markdownResponse(
  content: string,
  { canonical }: MarkdownResponseOptions = {}
) {
  const headers = new Headers({
    "Content-Type": "text/markdown; charset=utf-8",
    Vary: "Accept",
    "X-Content-Type-Options": "nosniff",
  })

  if (canonical) {
    headers.set("Link", `<${absoluteUrl(canonical)}>; rel="canonical"`)
  }

  return new Response(content, { headers })
}
