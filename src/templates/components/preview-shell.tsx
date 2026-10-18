import Link from "next/link"
import type { TemplateDefinition } from "@/templates/types"
import { ArrowLeftIcon } from "lucide-react"

/**
 * Only provides the template's palette scope and an escape hatch back to the
 * index. Navigation, grid and footer belong to each template.
 */
export function PreviewShell({
  template,
  children,
}: {
  template: TemplateDefinition
  children: React.ReactNode
}) {
  return (
    <div className={`tpl-preview tpl-${template.id}`}>
      {children}

      <Link
        href="/templates"
        className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/80 px-3 py-2 font-mono text-[0.62rem] tracking-[0.12em] text-white/75 uppercase shadow-lg backdrop-blur-md transition-colors hover:bg-black hover:text-white"
      >
        <ArrowLeftIcon className="size-3" />
        模板
      </Link>
    </div>
  )
}
