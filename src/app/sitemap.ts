import type { MetadataRoute } from "next"

import { MOBILE_NAV } from "@/config/navigation"
import { SITE_INFO } from "@/config/site"
import { getBlogPosts } from "@/features/doc/data/documents"

export const revalidate = false
export const dynamic = "force-static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getBlogPosts().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const routes = MOBILE_NAV.map(({ href }) => ({
    url: `${SITE_INFO.url}${href === "/" ? "" : href}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...posts]
}
