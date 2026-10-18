import type { Metadata } from "next"
import { PreviewShell } from "@/templates/components/preview-shell"
import { getTemplate } from "@/templates/registry"

export const metadata: Metadata = {
  title: "Civil & Architecture Template",
  description: "土木与建筑模板：结构荷载图、图纸式版面和场地笔记。",
  alternates: { canonical: "/templates/civil" },
}

const WORKS = [
  {
    no: "01",
    title: "滨河社区厅",
    meta: "Structure / 2026",
    text: "12 m 跨胶合木结构。节点一开始按刚接算，足尺试验发现螺栓群滑移比模型早，后来改成半刚接。",
    specs: ["Glulam", "12 m span", "CLT"],
  },
  {
    no: "02",
    title: "山坡住宅",
    meta: "Architecture / 2025",
    text: "坡地住宅的场地剖面和挡土墙。最麻烦的是墙后的排水，返工过一次。",
    specs: ["Section", "Retaining", "Drainage"],
  },
  {
    no: "03",
    title: "人行桥巡检笔记",
    meta: "Field / 2025",
    text: "跟导师做的人行桥巡检。拍裂缝、支座和振动数据，回来后把照片和测点对到同一张时间轴上。",
    specs: ["Survey", "Load path", "Repair"],
  },
]

function StructuralFrame() {
  return (
    <svg
      viewBox="0 0 560 360"
      className="w-full"
      role="img"
      aria-label="Structural frame with load arrows and dimension lines"
    >
      <g stroke="var(--cv-blue)" strokeOpacity="0.18">
        {Array.from({ length: 8 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={40 + i * 68}
            y1="20"
            x2={40 + i * 68}
            y2="340"
          />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="20"
            y1={40 + i * 68}
            x2="540"
            y2={40 + i * 68}
          />
        ))}
      </g>
      <g stroke="var(--cv-ink)" strokeWidth="3" fill="none">
        <path d="M90 300V100h380v200" />
        <path d="M90 100h380" />
        <path d="M90 100 280 300 470 100" strokeWidth="1.5" />
        <path d="M90 200h380M90 240h380" strokeWidth="1" strokeOpacity="0.35" />
      </g>
      <g stroke="var(--cv-clay)" strokeWidth="2">
        <path className="tpl-load-line" d="M280 38v52" />
        <path d="m268 78 12 14 12-14" fill="none" />
        <path className="tpl-load-line" d="M170 30v58" />
        <path d="m158 76 12 14 12-14" fill="none" />
        <path className="tpl-load-line" d="M390 30v58" />
        <path d="m378 76 12 14 12-14" fill="none" />
      </g>
      <g fill="var(--cv-ink)" fontSize="11" fontFamily="var(--font-mono)">
        <text x="286" y="34">
          12 kN
        </text>
        <text x="176" y="26">
          8 kN
        </text>
        <text x="396" y="26">
          8 kN
        </text>
        <text x="236" y="335">
          SPAN 8.4 m
        </text>
        <text x="490" y="206">
          +0.00
        </text>
      </g>
      <g stroke="var(--cv-blue)" strokeWidth="1">
        <path d="M90 318h380" />
        <path d="M90 312v12M470 312v12" />
      </g>
    </svg>
  )
}

export default function CivilTemplatePage() {
  return (
    <PreviewShell template={getTemplate("civil")!}>
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[color-mix(in_oklab,var(--cv-ink)_22%,transparent)] px-5 py-4 sm:px-8">
        <p className="tpl-meta text-(--cv-blue)">徐安 / 结构</p>
        <p className="tpl-serif text-2xl tracking-tight">现场笔记</p>
        <p className="tpl-meta text-(--cv-blue)">Issue 01 / 2026</p>
      </header>

      <div className="grid lg:grid-cols-[5rem_1fr_18rem]">
        <aside className="hidden border-r border-[color-mix(in_oklab,var(--cv-ink)_18%,transparent)] px-3 py-8 lg:flex lg:flex-col lg:items-center lg:justify-between">
          <span className="tpl-meta text-(--cv-blue) [writing-mode:vertical-rl]">
            Structure / Site / Material
          </span>
          <span className="tpl-meta text-(--cv-clay)">01—03</span>
        </aside>

        <main>
          <section className="grid gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-16">
            <div>
              <p className="tpl-meta text-(--cv-blue)">专题</p>
              <h1 className="tpl-serif mt-5 max-w-[11ch] text-[clamp(4rem,11vw,8.2rem)] leading-[0.82] tracking-[-0.055em]">
                先看现场，再画结构。
              </h1>
              <p className="mt-8 max-w-md text-base/7 text-[color-mix(in_oklab,var(--cv-ink)_66%,transparent)]">
                结构方向，毕业设计做木结构社区厅，也在做坡地住宅的场地和挡土墙。
                画图慢，习惯先去现场看排水和边界，再回来看模型。
              </p>
              <p className="tpl-meta mt-8 text-(--cv-blue)">杭州 / 2026</p>
            </div>

            <figure className="border border-[color-mix(in_oklab,var(--cv-ink)_22%,transparent)] bg-[color-mix(in_oklab,var(--cv-bg)_88%,#fff_12%)] p-4">
              <div className="tpl-meta flex items-center justify-between text-(--cv-blue)">
                <span>Fig. 01 / load path</span>
                <span>1:100</span>
              </div>
              <StructuralFrame />
              <figcaption className="tpl-meta mt-2 text-[color-mix(in_oklab,var(--cv-ink)_52%,transparent)]">
                Glulam frame / 8.4 m span / 12 kN point load
              </figcaption>
            </figure>
          </section>

          <section className="border-y border-[color-mix(in_oklab,var(--cv-ink)_22%,transparent)] px-5 py-8 sm:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "材料力学", "stress / strain / failure"],
                ["02", "结构分析", "frames / trusses / load paths"],
                ["03", "混凝土与钢结构", "codes / detailing"],
                ["04", "岩土与测量", "ground / water / boundaries"],
              ].map(([no, title, text]) => (
                <div key={no}>
                  <p className="tpl-meta text-(--cv-clay)">{no}</p>
                  <h2 className="tpl-serif mt-2 text-xl/tight">{title}</h2>
                  <p className="mt-1 font-mono text-[0.62rem] text-(--cv-blue)">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-[color-mix(in_oklab,var(--cv-ink)_14%,transparent)] pt-4">
              {["AutoCAD", "Revit", "SAP2000", "ETABS", "MATLAB"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="border border-[color-mix(in_oklab,var(--cv-blue)_28%,transparent)] px-2 py-1 font-mono text-[0.62rem] text-(--cv-blue)"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </section>

          <section className="px-5 py-12 sm:px-8">
            <div className="flex items-end justify-between gap-6 border-b border-[color-mix(in_oklab,var(--cv-ink)_22%,transparent)] pb-4">
              <h2 className="tpl-serif text-4xl tracking-tight sm:text-6xl">
                作品
              </h2>
              <span className="tpl-meta text-(--cv-blue)">2024—2026</span>
            </div>
            <div>
              {WORKS.map((work) => (
                <article
                  key={work.no}
                  className="grid gap-4 border-b border-[color-mix(in_oklab,var(--cv-ink)_18%,transparent)] py-8 sm:grid-cols-[4rem_1fr_10rem]"
                >
                  <span className="tpl-meta text-(--cv-clay)">{work.no}</span>
                  <div>
                    <p className="tpl-meta text-[color-mix(in_oklab,var(--cv-ink)_52%,transparent)]">
                      {work.meta}
                    </p>
                    <h3 className="tpl-serif mt-2 text-3xl leading-[0.95] tracking-[-0.03em] sm:text-4xl">
                      {work.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm/6 text-[color-mix(in_oklab,var(--cv-ink)_64%,transparent)]">
                      {work.text}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2 sm:justify-end">
                    {work.specs.map((spec) => (
                      <li
                        key={spec}
                        className="border border-[color-mix(in_oklab,var(--cv-blue)_28%,transparent)] px-2 py-1 font-mono text-[0.62rem] text-(--cv-blue)"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </main>

        <aside className="border-t border-[color-mix(in_oklab,var(--cv-ink)_18%,transparent)] px-5 py-8 sm:px-8 lg:border-t-0 lg:border-l">
          <p className="tpl-meta text-(--cv-blue)">现场笔记</p>
          <div className="mt-5 space-y-5">
            {[
              ["12.04", "社区厅节点足尺试验：螺栓群滑移比模型预测更早出现。"],
              [
                "09.18",
                "坡地住宅排水复盘，挡土墙后的排水层比墙本身更容易被忽略。",
              ],
              [
                "05.02",
                "人行桥巡检：把振动感知数据和现场照片放在同一张时间轴上。",
              ],
            ].map(([date, note]) => (
              <div
                key={date}
                className="border-b border-[color-mix(in_oklab,var(--cv-ink)_14%,transparent)] pb-4"
              >
                <p className="tpl-meta text-(--cv-clay)">{date}</p>
                <p className="mt-2 text-sm/6 text-[color-mix(in_oklab,var(--cv-ink)_64%,transparent)]">
                  {note}
                </p>
              </div>
            ))}
          </div>
          <p className="tpl-meta mt-8 text-[color-mix(in_oklab,var(--cv-ink)_45%,transparent)]">
            徐安 / 2026
            <br />
            杭州，中国
          </p>
        </aside>
      </div>
    </PreviewShell>
  )
}
