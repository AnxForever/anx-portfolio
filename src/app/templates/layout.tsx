import "@/styles/templates.css"

import { notFound } from "next/navigation"

import { TEMPLATES_ENABLED } from "@/config/features"

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (!TEMPLATES_ENABLED) notFound()

  return children
}
