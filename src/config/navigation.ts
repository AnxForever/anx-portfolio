import type { Route } from "next"

import type { NavItem } from "@/types/nav"

type SiteNavItem = NavItem<Route> & {
  shortcut: string
}

// Navigation, search and keyboard shortcuts share the same published pages.
export const MAIN_NAV: SiteNavItem[] = [
  { title: "Blog", href: "/blog", shortcut: "GL" },
  { title: "Now", href: "/now", shortcut: "GN" },
  { title: "Bookmarks", href: "/bookmarks", shortcut: "GM" },
]

export const MOBILE_NAV: SiteNavItem[] = [
  { title: "Home", href: "/", shortcut: "GH" },
  ...MAIN_NAV,
]
