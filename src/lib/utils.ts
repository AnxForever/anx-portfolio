import { SITE_INFO } from "@/config/site"

export { cn } from "cn"

/**
 * Absolute URL for canonical/JSON-LD output. Falls back to the published
 * origin so a build without `NEXT_PUBLIC_APP_URL` never emits "undefined".
 */
export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL || SITE_INFO.url}${path}`
}
