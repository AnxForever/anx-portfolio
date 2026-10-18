"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { useHotkeys } from "react-hotkeys-hook"

import type { CommandMenuProps } from "./command-menu"
import { CommandMenuTrigger } from "./command-menu-trigger"

const CommandMenu = dynamic(() => import("./command-menu"))

/**
 * Keep the trigger identical to the real one, but only download cmdk and the
 * command data after the first click or keyboard shortcut.
 */
export function CommandMenuLazy(props: CommandMenuProps) {
  const [mounted, setMounted] = useState(false)
  const [defaultOpen, setDefaultOpen] = useState(false)

  const openMenu = () => {
    setDefaultOpen(true)
    setMounted(true)
  }

  useHotkeys(
    "mod+k, slash",
    (event) => {
      event.preventDefault()
      openMenu()
    },
    { enabled: Boolean(props.enabledHotkeys) && !mounted }
  )

  if (!mounted) {
    return <CommandMenuTrigger onClick={openMenu} />
  }

  return <CommandMenu {...props} defaultOpen={defaultOpen} />
}
