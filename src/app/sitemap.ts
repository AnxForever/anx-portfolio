import type { MetadataRoute } from "next"
import { TEMPLATES } from "@/templates/registry"

import { TEMPLATES_ENABLED } from "@/config/features"
import { SITE_INFO } from "@/config/site"
import { getBlogPosts } from "@/features/doc/data/documents"

export const revalidate = false
export const dynamic = "force-static"

// Stamped once per build, matching the value inlined by next.config.ts.
const BUILD_DATE = new Date(
  process.env.BUILD_TIMESTAMP ?? Date.now()
).toISOString()

const PAGES: {
  href: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}[] = [
  { href: "/", changeFrequency: "daily", priority: 1 },
  { href: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { href: "/now", changeFrequency: "weekly", priority: 0.7 },
  { href: "/bookmarks", changeFrequency: "weekly", priority: 0.6 },
  { href: "/craft", changeFrequency: "monthly", priority: 0.6 },
  { href: "/insights", changeFrequency: "weekly", priority: 0.6 },
  { href: "/timeline", changeFrequency: "monthly", priority: 0.5 },
  { href: "/testimonials", changeFrequency: "monthly", priority: 0.5 },
  { href: "/sponsors", changeFrequency: "monthly", priority: 0.4 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = PAGES.map(({ href, changeFrequency, priority }) => ({
    url: `${SITE_INFO.url}${href === "/" ? "" : href}`,
    lastModified: BUILD_DATE,
    changeFrequency,
    priority,
  }))

  // Template previews are repo-only unless the flag is on, so they stay out of
  // the sitemap in production. The default template is the home page.
  const templates: MetadataRoute.Sitemap = TEMPLATES_ENABLED
    ? [
        {
          url: `${SITE_INFO.url}/templates`,
          lastModified: BUILD_DATE,
          changeFrequency: "monthly",
          priority: 0.8,
        },
        ...TEMPLATES.filter((template) => template.href !== "/").map(
          (template) => ({
            url: `${SITE_INFO.url}${template.href}`,
            lastModified: BUILD_DATE,
            changeFrequency: "monthly" as const,
            priority: 0.7,
          })
        ),
      ]
    : []

  const posts = getBlogPosts().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [...pages, ...templates, ...posts]
}
