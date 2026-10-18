"use client"

import { useTheme } from "next-themes"

import { TestRigFigure } from "./figure"

/**
 * Anatomy expects its tokens on a `.iso` root. The site's theme lives on
 * `<html class="dark">`, so map next-themes to the figure's data-theme.
 */
export function MechanicalFigureFrame() {
  const { resolvedTheme } = useTheme()

  return (
    <div
      className="iso"
      data-theme={resolvedTheme === "dark" ? undefined : "light"}
      suppressHydrationWarning
    >
      <TestRigFigure />
    </div>
  )
}
