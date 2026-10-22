import type { Metadata } from "next"
import { PreviewShell } from "@/templates/components/preview-shell"
import { getTemplate } from "@/templates/registry"

export const metadata: Metadata = {
  title: "Medicine & Health Template",
  description: "医学与健康模板：临床病例、ECG、科研和病房记录。",
  alternates: { canonical: "/templates/medicine" },
}

const CASES = [
  {
    no: "Case 01",
    title: "不明原因晕厥",
    meta: "Cardiology rotation / 2026",
    text: "急诊收的晕厥病人。Holter 抓到一次 4.2 秒停搏，最后装了起搏器。这个病例让我开始认真看晕厥前的活动记录。",
    tags: ["ECG", "Holter", "History"],
  },
  {
    no: "Case 02",
    title: "反复喘息",
    meta: "Pediatrics / 2025",
    text: "儿科门诊跟的反复喘息孩子。肺功能、过敏原和家里的潮湿情况对不上，最后从环境入手。",
    tags: ["Spirometry", "Allergy", "Follow-up"],
  },
]

export default function MedicineTemplatePage() {
  return (
    <PreviewShell template={getTemplate("medicine")!}>
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[color-mix(in_oklab,var(--md-green)_18%,transparent)] px-5 py-4 sm:px-8">
        <p className="tpl-serif text-xl tracking-tight">宋然</p>
        <p className="tpl-meta hidden text-(--md-green) sm:block">
          临床档案 / 2026
        </p>
        <p className="tpl-meta text-(--md-red)">已去标识化</p>
      </header>

      <div className="grid lg:grid-cols-[18rem_1fr]">
        <aside className="border-b border-[color-mix(in_oklab,var(--md-green)_18%,transparent)] px-5 py-8 sm:px-8 lg:border-r lg:border-b-0">
          <p className="tpl-meta text-(--md-green)">个人档案</p>
          <h1 className="tpl-serif mt-4 text-4xl leading-[0.95] tracking-[-0.04em]">
            宋
            <br />然<span className="text-(--md-red)">.</span>
          </h1>
          <p className="mt-4 text-sm/6 text-[color-mix(in_oklab,var(--md-ink)_64%,transparent)]">
            临床医学大五，轮转过心内科和急诊。写病例时会把时间线、用药和检查结果放在一页里，方便第二天交班。
          </p>

          <div className="mt-6 rounded-2xl bg-(--md-mint) p-4">
            <div className="flex items-center justify-between">
              <span className="tpl-meta text-(--md-green)">II 导联</span>
              <span className="tpl-meta flex items-center gap-2 text-(--md-red)">
                <span className="tpl-pulse size-1.5 rounded-full bg-current" />
                68 bpm
              </span>
            </div>
            <svg
              viewBox="0 0 320 110"
              className="mt-3 w-full"
              role="img"
              aria-label="心电图波形"
            >
              <path
                d="M0 70h28l6-22 8 44 8-22h24l6-8 8 16 8-32 8 64 8-32 8 8h28l6-22 8 44 8-22h24l6-8 8 16 8-32 8 64 8-32 8 8h26"
                fill="none"
                stroke="var(--md-green)"
                strokeOpacity="0.22"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                className="tpl-ecg"
                d="M0 70h28l6-22 8 44 8-22h24l6-8 8 16 8-32 8 64 8-32 8 8h28l6-22 8 44 8-22h24l6-8 8 16 8-32 8 64 8-32 8 8h26"
                fill="none"
                stroke="var(--md-green)"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <line
                className="tpl-ecg-scan"
                x1="0"
                y1="0"
                x2="0"
                y2="110"
                stroke="var(--md-green)"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
            </svg>
            <div className="tpl-meta mt-2 grid grid-cols-3 gap-2 text-(--md-green)">
              <span>HR 68</span>
              <span>QTc 412</span>
              <span className="text-right">电轴 正常</span>
            </div>
          </div>

          <nav className="tpl-meta mt-8 space-y-3 text-[color-mix(in_oklab,var(--md-ink)_55%,transparent)]">
            <p className="text-(--md-green)">01 病例</p>
            <p>02 科研</p>
            <p>03 病房笔记</p>
          </nav>

          <p className="tpl-meta mt-8 text-[color-mix(in_oklab,var(--md-ink)_42%,transparent)]">
            上海 / 2026
            <br />
            隐私优先
          </p>
        </aside>

        <main>
          <section className="border-b border-[color-mix(in_oklab,var(--md-green)_18%,transparent)] px-5 py-10 sm:px-8 lg:px-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="tpl-meta text-(--md-red)">临床档案 / 开放</p>
                <h2 className="tpl-serif mt-3 max-w-2xl text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.045em] text-balance">
                  先写清楚，再下判断。
                </h2>
              </div>
              <p className="max-w-xs text-sm/6 text-[color-mix(in_oklab,var(--md-ink)_58%,transparent)]">
                所有病例已去标识化；只保留决策路径、时间线和反思。
              </p>
            </div>
          </section>

          <section className="px-5 py-8 sm:px-8 lg:px-12">
            <div className="grid gap-4">
              {CASES.map((item) => (
                <article
                  key={item.no}
                  className="tpl-card grid gap-4 p-5 sm:grid-cols-[7rem_1fr]"
                >
                  <div>
                    <p className="tpl-meta text-(--md-red)">{item.no}</p>
                    <p className="tpl-meta mt-2 text-[color-mix(in_oklab,var(--md-ink)_46%,transparent)]">
                      {item.meta}
                    </p>
                  </div>
                  <div>
                    <h3 className="tpl-serif text-2xl tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm/6 text-[color-mix(in_oklab,var(--md-ink)_64%,transparent)]">
                      {item.text}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-(--md-mint) px-2.5 py-1 font-mono text-[0.62rem] text-(--md-green)"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 border-y border-[color-mix(in_oklab,var(--md-green)_18%,transparent)] px-5 py-10 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
            <div>
              <p className="tpl-meta text-(--md-green)">课程</p>
              <h2 className="tpl-serif mt-3 text-3xl tracking-tight">
                基础仍然重要。
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <ul className="space-y-2 text-sm text-[color-mix(in_oklab,var(--md-ink)_64%,transparent)]">
                {[
                  "Anatomy & Physiology — structure and function",
                  "Pathology — mechanisms of disease",
                  "Pharmacology — dose, interaction, evidence",
                  "Clinical Skills — history, exam, communication",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-(--md-red)">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <p className="tpl-meta text-(--md-green)">Tools</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {["PubMed", "R", "SPSS", "ECG", "OSCE"].map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-[color-mix(in_oklab,var(--md-green)_22%,transparent)] px-2.5 py-1 font-mono text-[0.62rem] text-(--md-green)"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="grid gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
            <div>
              <p className="tpl-meta text-(--md-green)">科研</p>
              <h2 className="tpl-serif mt-3 text-3xl tracking-tight">
                214 例，先把缺失值说清楚。
              </h2>
              <p className="mt-4 text-sm/6 text-[color-mix(in_oklab,var(--md-ink)_64%,transparent)]">
                从急诊分诊数据里看“看起来稳定、但 6 小时内升级”的病人。样本 214
                例，缺失值很多，正在做敏感性分析。
              </p>
            </div>
            <div className="tpl-card p-6">
              <p className="tpl-meta text-(--md-red)">Abstract</p>
              <p className="tpl-serif mt-4 text-xl/8 text-[color-mix(in_oklab,var(--md-ink)_82%,transparent)]">
                “Can triage vitals identify patients who later escalate within
                the first six hours?”
              </p>
              <div className="mt-6 grid gap-3 border-t border-[color-mix(in_oklab,var(--md-green)_18%,transparent)] pt-4 text-sm sm:grid-cols-3">
                <span>
                  <span className="tpl-meta block text-(--md-green)">
                    Design
                  </span>
                  Retrospective
                </span>
                <span>
                  <span className="tpl-meta block text-(--md-green)">
                    Sample
                  </span>
                  n = 214
                </span>
                <span>
                  <span className="tpl-meta block text-(--md-green)">
                    Status
                  </span>
                  Analysis
                </span>
              </div>
            </div>
          </section>

          <section className="border-t border-[color-mix(in_oklab,var(--md-green)_18%,transparent)] px-5 py-10 sm:px-8 lg:px-12">
            <p className="tpl-meta text-(--md-green)">病房笔记</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                [
                  "2026.04",
                  "夜班复盘：把‘生命体征稳定’拆成趋势、阈值和背景三个问题。",
                ],
                [
                  "2025.12",
                  "第一次独立完成病史采集，发现沉默比回答更需要被记录。",
                ],
                ["2025.08", "心电图课之后，养成了先看节律再看形态的顺序。"],
              ].map(([date, note]) => (
                <div
                  key={date}
                  className="border-t border-[color-mix(in_oklab,var(--md-green)_18%,transparent)] pt-3"
                >
                  <p className="tpl-meta text-(--md-red)">{date}</p>
                  <p className="mt-2 text-sm/6 text-[color-mix(in_oklab,var(--md-ink)_62%,transparent)]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </PreviewShell>
  )
}
