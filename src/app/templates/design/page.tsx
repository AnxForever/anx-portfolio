import type { Metadata } from "next"
import { PreviewShell } from "@/templates/components/preview-shell"
import { getTemplate } from "@/templates/registry"

export const metadata: Metadata = {
  title: "Design & Art Template",
  description: "设计与艺术模板：Riso 色彩、大字排版和实验性作品集。",
  alternates: { canonical: "/templates/design" },
}

const WORKS = [
  {
    no: "01",
    title: "Afterimage",
    kind: "Identity / 2026",
    text: "独立影展的视觉系统。主海报用三色叠印，印刷时套不准，反而成了版本的一部分。",
    color: "var(--ds-blue)",
  },
  {
    no: "02",
    title: "Soft Machine",
    kind: "Editorial / 2025",
    text: "一本关于身体与机械的小册子。网格很硬，字体故意选得软一点。",
    color: "var(--ds-coral)",
  },
  {
    no: "03",
    title: "Field Recording",
    kind: "Web / 2025",
    text: "把城市声音采样做成可浏览的档案。点开一个点，先听到声音，再看到照片。",
    color: "var(--ds-lime)",
  },
]

export default function DesignTemplatePage() {
  return (
    <PreviewShell template={getTemplate("design")!}>
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-(--ds-ink) px-4 py-3 sm:px-6">
        <span className="tpl-display text-xl">MOMO*</span>
        <nav className="tpl-meta flex gap-4 sm:gap-8">
          <span>作品</span>
          <span>实验</span>
          <span>关于</span>
        </nav>
        <span className="tpl-meta">上海 / 2026</span>
      </header>

      <section className="relative overflow-hidden border-b border-(--ds-ink) px-4 pt-8 pb-6 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <p className="tpl-meta max-w-32 leading-4">
            Visual design / art direction / a little code
          </p>
          <div className="tpl-spin-slow grid size-24 place-items-center rounded-full border border-(--ds-ink) sm:size-32">
            <span className="tpl-meta max-w-16 text-center leading-4">
              Open for commissions · 2026
            </span>
          </div>
        </div>

        <h1 className="tpl-display mt-4 text-[clamp(5rem,23vw,18rem)] leading-[0.72]">
          MOMO
          <span className="text-(--ds-coral)">.</span>
        </h1>

        <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr] sm:items-end">
          <p className="max-w-xl text-lg/8 text-[color-mix(in_oklab,var(--ds-ink)_72%,transparent)]">
            做平面和网页，偶尔做一点动效。最近在给一个独立影展做视觉，
            也在整理过去两年的海报。
          </p>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {["Identity", "Editorial", "Web", "Motion"].map((tag) => (
              <span
                key={tag}
                className="tpl-sticker border border-(--ds-ink) bg-(--ds-bg) px-3 py-1 font-mono text-[0.65rem]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden border-y border-(--ds-ink) py-3">
          <div className="tpl-marquee flex w-max gap-8 font-mono text-sm tracking-tight whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, index) => (
              <span key={index} className="flex gap-8">
                <span>IDENTITY</span>
                <span className="text-(--ds-coral)">✳</span>
                <span>EDITORIAL</span>
                <span className="text-(--ds-blue)">✳</span>
                <span>WEB</span>
                <span className="text-(--ds-coral)">✳</span>
                <span>MOTION</span>
                <span className="text-(--ds-blue)">✳</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-(--ds-ink) py-8">
        <div className="flex items-end justify-between gap-6 px-4 sm:px-6">
          <h2 className="tpl-display text-4xl sm:text-7xl">作品</h2>
          <span className="tpl-meta">2024—2026</span>
        </div>

        <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:px-6">
          {WORKS.map((work) => (
            <article
              key={work.no}
              className="w-[82vw] shrink-0 snap-start sm:w-104"
            >
              <div
                className="tpl-sticker relative aspect-4/5 overflow-hidden border border-(--ds-ink) p-5"
                style={{ background: work.color }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--ds-ink)_1px,transparent_1px)] bg-size-[8px_8px] opacity-20" />
                <div className="relative flex h-full flex-col justify-between text-(--ds-ink)">
                  <span className="tpl-meta">{work.no}</span>
                  <span className="tpl-display max-w-[8ch] text-6xl">
                    {work.title}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h3 className="font-mono text-sm">{work.kind}</h3>
                <span className="tpl-meta">↗</span>
              </div>
              <p className="mt-2 text-sm/6 text-[color-mix(in_oklab,var(--ds-ink)_68%,transparent)]">
                {work.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid border-b border-(--ds-ink) lg:grid-cols-[0.7fr_1.3fr]">
        <div className="border-b border-(--ds-ink) px-4 py-8 sm:px-6 lg:border-r lg:border-b-0">
          <p className="tpl-meta">课程</p>
          <h2 className="tpl-display mt-3 text-4xl">先打基础。</h2>
          <ul className="mt-6 space-y-2 text-sm/6">
            {[
              "Typography — hierarchy, rhythm, detail",
              "Color & Composition — contrast and tension",
              "Branding — identity systems that move",
              "UX Research — ask, observe, prototype",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-(--ds-coral)">✳</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {[
            "Figma",
            "Illustrator",
            "InDesign",
            "After Effects",
            "Blender",
            "Riso",
          ].map((tool, index) => (
            <div
              key={tool}
              className="flex min-h-32 items-end border-r border-b border-(--ds-ink) p-3 last:border-r-0"
              style={{
                background:
                  index % 3 === 0
                    ? "var(--ds-lime)"
                    : index % 3 === 1
                      ? "var(--ds-bg)"
                      : "var(--ds-coral)",
              }}
            >
              <span className="tpl-meta">{tool}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="tpl-display text-4xl sm:text-6xl">实验场</h2>
          <p className="tpl-meta">小实验</p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Type / 2026", "可变字体样本，调到 700 的时候字怀会挤在一起。"],
            ["Code / 2025", "给朋友生日做的小 WebGL 玩具，只能转，不能玩。"],
            ["Print / 2024", "地下演出用的 Riso 海报，印了三版才套准。"],
            ["Archive / 2023", "一个夏天做的所有演出传单，按时间排在一起。"],
          ].map(([label, text], index) => (
            <div
              key={label}
              className="tpl-sticker border border-(--ds-ink) p-4"
              style={{
                background: index % 2 === 0 ? "var(--ds-bg)" : "var(--ds-lime)",
              }}
            >
              <p className="tpl-meta">{label}</p>
              <p className="mt-8 text-sm/6">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-(--ds-ink) px-4 py-12 sm:px-6">
        <h2 className="tpl-display text-[clamp(3.5rem,15vw,12rem)] leading-[0.75]">
          先做出来，
          <br />
          再解释。
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-md text-base/7 text-[color-mix(in_oklab,var(--ds-ink)_70%,transparent)]">
            接视觉系统、出版物、网页和小型动效项目。也欢迎只是想聊聊
            一个还不成熟的想法。
          </p>
          <a
            href="mailto:hello@example.com"
            className="tpl-sticker border border-(--ds-ink) bg-(--ds-coral) px-4 py-2 font-mono text-sm"
          >
            hello@example.com ↗
          </a>
        </div>
      </section>
    </PreviewShell>
  )
}
