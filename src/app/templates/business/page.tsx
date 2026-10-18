import type { Metadata } from "next"
import { PreviewShell } from "@/templates/components/preview-shell"
import { getTemplate } from "@/templates/registry"

export const metadata: Metadata = {
  title: "Business & Finance Template",
  description: "商科与金融模板：年报式编辑设计、市场图表和投资备忘录。",
  alternates: { canonical: "/templates/business" },
}

const POSITIONS = [
  {
    ticker: "NVDA",
    name: "半导体周期",
    thesis: "AI 需求从训练往推理走，但供给释放后毛利率会先承压。",
    metric: "+38.4%",
    note: "12 个月",
  },
  {
    ticker: "ASML",
    name: "光刻机护城河",
    thesis: "先进制程资本开支的节奏，比单季订单更能解释长期价值。",
    metric: "+21.7%",
    note: "核心持仓",
  },
  {
    ticker: "CNH",
    name: "中国消费",
    thesis: "线下客流恢复不均衡，先看现金流和库存周转。",
    metric: "-4.2%",
    note: "观察中",
  },
]

function MarketChart() {
  const line =
    "M0 238 C20 234 30 228 40 226 C55 224 65 238 80 240 C95 242 110 208 120 204 C140 206 150 216 160 214 C180 210 190 182 200 180 C220 184 230 192 240 190 C260 178 270 148 280 142 C300 148 310 158 320 156 C340 140 350 120 360 118 C380 122 390 134 400 132 C420 114 430 96 440 94 C460 100 470 110 480 108 C500 96 510 76 520 72"

  return (
    <svg
      viewBox="0 0 520 300"
      className="w-full overflow-visible"
      role="img"
      aria-label="Animated market line chart"
    >
      <defs>
        <linearGradient id="bz-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--bz-green)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--bz-green)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="var(--bz-ink)" strokeOpacity="0.1">
        {[50, 100, 150, 200, 250].map((y) => (
          <line key={y} x1="0" y1={y} x2="520" y2={y} />
        ))}
        {[65, 130, 195, 260, 325, 390, 455].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="300" />
        ))}
      </g>
      <path d={`${line}V300H0Z`} fill="url(#bz-area)" />
      <path
        className="tpl-chart-draw"
        d={line}
        fill="none"
        stroke="var(--bz-green)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [200, 180],
        [360, 118],
        [440, 94],
        [520, 72],
      ].map(([cx, cy]) => (
        <circle
          key={cx}
          cx={cx}
          cy={cy}
          r="3.5"
          fill="var(--bz-bg)"
          stroke="var(--bz-green)"
          strokeWidth="2"
        />
      ))}
      <circle
        className="tpl-chart-dot"
        cx="520"
        cy="72"
        r="4"
        fill="var(--bz-brass)"
      />
      <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <line
          x1="440"
          y1="0"
          x2="440"
          y2="300"
          stroke="var(--bz-brass)"
          strokeDasharray="2 6"
        />
        <circle cx="440" cy="94" r="5" fill="var(--bz-brass)" />
        <text
          x="448"
          y="88"
          fill="var(--bz-ink)"
          fontSize="10"
          fontFamily="var(--font-mono)"
        >
          +24.8%
        </text>
      </g>
      <g fill="var(--bz-ink)" fontSize="10" fontFamily="var(--font-mono)">
        <text x="0" y="292">
          2024
        </text>
        <text x="230" y="292">
          2025
        </text>
        <text x="470" y="292">
          2026
        </text>
      </g>
    </svg>
  )
}

export default function BusinessTemplatePage() {
  return (
    <PreviewShell template={getTemplate("business")!}>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[color-mix(in_oklab,var(--bz-ink)_22%,transparent)] px-5 py-3 sm:px-8">
        <p className="tpl-meta">周奕 / 研究</p>
        <p className="tpl-meta hidden sm:block">独立研究 · 非投资建议</p>
        <p className="tpl-meta">香港 / 2026</p>
      </div>

      <header className="border-b-4 border-(--bz-ink) px-5 pt-8 pb-5 text-center sm:px-8">
        <p className="tpl-meta text-(--bz-brass)">Issue 04 / Q3 2026</p>
        <h1 className="tpl-serif mt-3 text-[clamp(3.8rem,14vw,10rem)] leading-[0.78] tracking-[-0.06em]">
          季度观察
        </h1>
        <div className="tpl-meta mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[color-mix(in_oklab,var(--bz-ink)_22%,transparent)] pt-3">
          <span>股票 / 研究</span>
          <span>数字、叙事与怀疑</span>
          <span>8 分钟阅读</span>
        </div>
      </header>

      <div className="grid lg:grid-cols-[1fr_20rem]">
        <main className="px-5 py-8 sm:px-8 lg:border-r lg:border-[color-mix(in_oklab,var(--bz-ink)_18%,transparent)]">
          <section className="grid gap-8 border-b border-[color-mix(in_oklab,var(--bz-ink)_22%,transparent)] pb-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="tpl-meta text-(--bz-brass)">
                研究备忘录 / 结论先行
              </p>
              <h2 className="tpl-serif mt-3 text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.045em]">
                利润增长，
                <br className="sm:hidden" />
                先看现金流。
              </h2>
              <p className="mt-5 max-w-2xl text-sm/6 text-[color-mix(in_oklab,var(--bz-ink)_68%,transparent)]">
                金融学大四，做过一段二级市场研究实习。这篇只看三件事：
                现金流质量、库存位置和管理层怎么花钱。
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-[color-mix(in_oklab,var(--bz-ink)_22%,transparent)] py-3 text-xs sm:grid-cols-4">
                {[
                  ["致", "投资委员会"],
                  ["自", "周奕"],
                  ["主题", "AI 资本开支 / 消费"],
                  ["日期", "2026.10"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="tpl-meta text-(--bz-brass)">{label}</dt>
                    <dd className="mt-1">{value}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-6 space-y-3 text-sm/6 text-[color-mix(in_oklab,var(--bz-ink)_68%,transparent)]">
                {[
                  "经营现金流连续两个季度低于净利润，先查应收账款和存货。",
                  "库存周转天数回到 2023 年水平，价格战风险还在。",
                  "回购和分红占自由现金流 78%，再投资空间有限。",
                ].map((item, index) => (
                  <li key={item} className="grid grid-cols-[1.5rem_1fr] gap-2">
                    <span className="font-mono text-(--bz-brass)">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="group border border-[color-mix(in_oklab,var(--bz-ink)_22%,transparent)] p-4">
              <div className="tpl-meta flex items-center justify-between text-(--bz-green)">
                <span>市场 / 综合</span>
                <span>12M</span>
              </div>
              <MarketChart />
              <figcaption className="tpl-meta mt-2 text-[color-mix(in_oklab,var(--bz-ink)_52%,transparent)]">
                +24.8% / vol 14.2 / Sharpe 1.36
              </figcaption>
            </figure>
          </section>

          <section className="grid gap-6 border-b border-[color-mix(in_oklab,var(--bz-ink)_22%,transparent)] py-8 sm:grid-cols-3">
            {[
              [
                "01",
                "盈利质量",
                "现金流和资本开支的匹配，比单季利润更能说明问题。",
              ],
              [
                "02",
                "周期位置",
                "库存、价格和产能利用率，决定好公司也会不会买贵。",
              ],
              ["03", "管理层", "资本配置的记录，是最难伪造的一份长期简历。"],
            ].map(([no, title, text]) => (
              <div key={no}>
                <p className="tpl-meta text-(--bz-brass)">{no}</p>
                <h3 className="tpl-serif mt-2 text-2xl/tight">{title}</h3>
                <p className="mt-2 text-sm/6 text-[color-mix(in_oklab,var(--bz-ink)_64%,transparent)]">
                  {text}
                </p>
              </div>
            ))}
          </section>

          <section className="py-8">
            <div className="flex items-end justify-between gap-6">
              <h2 className="tpl-serif text-4xl tracking-tight">持仓观察</h2>
              <span className="tpl-meta text-(--bz-brass)">2026</span>
            </div>
            <div className="mt-5 border-y border-[color-mix(in_oklab,var(--bz-ink)_22%,transparent)]">
              {POSITIONS.map((position) => (
                <article
                  key={position.ticker}
                  className="grid gap-3 border-b border-[color-mix(in_oklab,var(--bz-ink)_18%,transparent)] py-4 last:border-b-0 sm:grid-cols-[5rem_1fr_6rem]"
                >
                  <span className="font-mono text-sm text-(--bz-green)">
                    {position.ticker}
                  </span>
                  <div>
                    <h3 className="tpl-serif text-xl/tight">{position.name}</h3>
                    <p className="mt-1 max-w-xl text-sm/6 text-[color-mix(in_oklab,var(--bz-ink)_64%,transparent)]">
                      {position.thesis}
                    </p>
                    <p className="tpl-meta mt-1 text-(--bz-brass)">
                      {position.note}
                    </p>
                  </div>
                  <span
                    className={`text-right font-mono text-base tabular-nums ${
                      position.metric.startsWith("-")
                        ? "text-(--bz-red)"
                        : "text-(--bz-green)"
                    }`}
                  >
                    {position.metric}
                  </span>
                </article>
              ))}
            </div>
          </section>
        </main>

        <aside className="border-t border-[color-mix(in_oklab,var(--bz-ink)_18%,transparent)] px-5 py-8 sm:px-8 lg:border-t-0">
          <p className="tpl-meta text-(--bz-brass)">课程</p>
          <ul className="mt-3 space-y-2 text-sm/6 text-[color-mix(in_oklab,var(--bz-ink)_66%,transparent)]">
            {[
              "Accounting — quality of earnings",
              "Corporate Finance — capital structure",
              "Econometrics — identification",
              "Investments — risk and positioning",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-(--bz-brass)">§</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="tpl-meta mt-6 text-(--bz-green)">Tools</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {["Excel", "Python", "R", "SQL", "PowerPoint"].map((tool) => (
              <li
                key={tool}
                className="border border-[color-mix(in_oklab,var(--bz-ink)_24%,transparent)] px-2 py-1 font-mono text-[0.62rem]"
              >
                {tool}
              </li>
            ))}
          </ul>
          <p className="tpl-meta mt-8 text-(--bz-brass)">市场笔记</p>
          <div className="mt-3 space-y-4">
            {[
              [
                "2026.09",
                "AI 资本开支的叙事从‘买多少卡’转向‘电力和机房什么时候到位’。",
              ],
              ["2026.05", "消费板块的分化不在收入端，而在库存和现金流。"],
              [
                "2025.12",
                "把一次错误的仓位复盘写成检查表，比写一篇看多报告更有用。",
              ],
            ].map(([date, note]) => (
              <div
                key={date}
                className="border-b border-[color-mix(in_oklab,var(--bz-ink)_14%,transparent)] pb-3"
              >
                <p className="tpl-meta text-(--bz-brass)">{date}</p>
                <p className="mt-1 text-sm/6 text-[color-mix(in_oklab,var(--bz-ink)_64%,transparent)]">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </PreviewShell>
  )
}
