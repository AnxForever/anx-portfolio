import type { Metadata } from "next"
import Link from "next/link"
import { TEMPLATES } from "@/templates/registry"
import { ArrowUpRightIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Template library",
  description:
    "按专业延伸的个人网站模板：同一套工程手账语言，不同的字体、配色和装置。",
  alternates: { canonical: "/templates" },
}

const ACCENTS: Record<string, string> = {
  zinc: "#8b8b95",
  oxide: "#b45309",
  phosphor: "#8bffb0",
  blueprint: "#224e74",
  clinical: "#0d4a41",
  brass: "#a57e45",
  riso: "#2b4cff",
}

export default function TemplatesPage() {
  return (
    <main className="min-h-svh bg-[#0b0b0b] text-[#f4f4ef]">
      <header className="mx-auto flex w-[min(100%-2rem,76rem)] flex-wrap items-center justify-between gap-2 border-b border-white/12 py-5">
        <Link
          href="/"
          className="font-mono text-xs tracking-[0.18em] uppercase"
        >
          Anx / Template library
        </Link>
        <span className="hidden font-mono text-[0.68rem] tracking-[0.16em] text-white/45 uppercase sm:inline">
          {TEMPLATES.length} templates · 2026
        </span>
      </header>

      <section className="mx-auto w-[min(100%-2rem,76rem)] py-14 sm:py-20">
        <p className="font-mono text-[0.68rem] tracking-[0.18em] text-white/45 uppercase">
          选择专业 · Choose a major
        </p>
        <h1 className="mt-5 max-w-4xl text-[clamp(3.5rem,12vw,8rem)] leading-[0.82] font-semibold tracking-[-0.065em]">
          一个外壳，
          <br />
          <span className="text-white/38">七种样本。</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base/7 text-white/55">
          七个专业，七套版式。课程、工具、项目证据和记录方式都不一样， 没有把 CS
          的那套东西硬套过去。文章、RSS 和 Markdown
          入口共用，颜色、字体和交互各做各的。
        </p>
      </section>

      <section className="mx-auto w-[min(100%-2rem,76rem)] pb-20">
        <div className="grid gap-3 md:grid-cols-2">
          {TEMPLATES.map((template, index) => (
            <Link
              key={template.id}
              href={template.href}
              className="group relative overflow-hidden border border-white/14 bg-white/2.5 p-5 transition-colors hover:bg-white/6 sm:p-6"
            >
              <div
                className="absolute inset-y-0 left-0 w-1 transition-all group-hover:w-1.5"
                style={{ background: ACCENTS[template.accent] ?? "#fff" }}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.16em] text-white/38 uppercase">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {template.status === "live" ? "Live" : "Preview"}
                  </p>
                  <h2 className="mt-5 max-w-[14ch] text-3xl leading-[0.95] font-medium tracking-[-0.035em] sm:text-4xl">
                    {template.label}
                  </h2>
                  <p className="mt-3 font-mono text-xs text-white/45">
                    {template.major}
                  </p>
                </div>
                <ArrowUpRightIcon className="size-5 shrink-0 text-white/35 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
              </div>
              <p className="mt-8 max-w-md text-sm/6 text-white/48">
                {template.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex w-[min(100%-2rem,76rem)] flex-wrap items-center justify-between gap-4 border-t border-white/12 py-8 font-mono text-[0.66rem] tracking-[0.14em] text-white/38 uppercase">
        <span>Same shell, different specimen.</span>
        <Link href="/" className="text-white/55 hover:text-white">
          Back to the journal
        </Link>
      </footer>
    </main>
  )
}
