import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { TEMPLATES_ENABLED } from "@/config/features"

type SiteNavItem = NavItem<Route> & {
  shortcut: string
}

const PAGES: SiteNavItem[] = [
  { title: "Blog", href: "/blog", shortcut: "GL" },
  { title: "Now", href: "/now", shortcut: "GN" },
  { title: "Bookmarks", href: "/bookmarks", shortcut: "GM" },
]

// Template previews stay repo-only unless explicitly enabled (see features.ts).
const TEMPLATE_NAV: SiteNavItem = {
  title: "Templates",
  href: "/templates",
  shortcut: "GT",
}

// Navigation, search and keyboard shortcuts share the same published pages.
export const MAIN_NAV: SiteNavItem[] = TEMPLATES_ENABLED
  ? [...PAGES, TEMPLATE_NAV]
  : PAGES

export const MOBILE_NAV: SiteNavItem[] = [
  { title: "Home", href: "/", shortcut: "GH" },
  ...MAIN_NAV,
]
