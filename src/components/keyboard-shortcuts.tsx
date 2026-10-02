"use client"

import { useRouter } from "@bprogress/next/app"
import { useHotkeys } from "react-hotkeys-hook"

import { MOBILE_NAV } from "@/config/navigation"
import { trackEvent } from "@/lib/events"

const NAVIGATION_SHORTCUTS = MOBILE_NAV.map((link) => ({
  path: link.href,
  keys: link.shortcut.toLowerCase().split("").join(">"),
}))

export function KeyboardShortcuts() {
  return (
    <>
      {NAVIGATION_SHORTCUTS.map((link) => (
        <NavigationShortcut key={link.keys} {...link} />
      ))}
    </>
  )
}

function NavigationShortcut({
  path,
  keys,
}: (typeof NAVIGATION_SHORTCUTS)[number]) {
  const router = useRouter()

  // Each sequence needs its own hook to keep its partial key history separate.
  useHotkeys(keys, () => {
    trackEvent({
      name: "keyboard_shortcut_navigate",
      properties: { path, keys },
    })
    router.push(path)
  }, [router, path, keys])

  return null
}
