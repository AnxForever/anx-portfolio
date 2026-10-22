import type { Route } from "next"

export type TemplateId =
  | "cs"
  | "mechanical"
  | "electrical"
  | "civil"
  | "medicine"
  | "business"
  | "design"

export type TemplateDefinition = {
  id: TemplateId
  label: string
  major: string
  description: string
  accent: string
  href: Route
  status: "live" | "preview"
}
