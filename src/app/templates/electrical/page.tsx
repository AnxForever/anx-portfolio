import type { Metadata } from "next"
import { PreviewShell } from "@/templates/components/preview-shell"
import { getTemplate } from "@/templates/registry"

export const metadata: Metadata = {
  title: "Electrical Engineering Template",
  description: "电气工程模板：示波器、PCB、固件与实验室记录。",
  alternates: { canonical: "/templates/electrical" },
}

const BUILDS = [
  {
    no: "01",
    title: "便携 ECG 前端",
    meta: "Analog / 2025",
    text: "从电极保护、右腿驱动做到 24-bit ADC。第一版 50 Hz 抑制没做好，后来把模拟和数字滤波拆开对比，噪声从 3.2 mVrms 降到 0.8 mVrms。",
    specs: ["0.5 µVrms", "50/60 Hz", "4-layer"],
  },
  {
    no: "02",
    title: "无刷电机驱动板",
    meta: "Power / 2025",
    text: "三相半桥、电流采样和栅极驱动。第一次上电炸了两颗 MOS，重新算了母线电容和栅极电阻，现在能跑到 48 V / 20 A。",
    specs: ["48 V", "20 A", "FOC"],
  },
  {
    no: "03",
    title: "逻辑分析仪",
    meta: "Digital / 2024",
    text: "用 STM32 做的 8 通道逻辑分析仪。触发状态机改了四版，最后把采样缓冲放进 DMA 才稳定。",
    specs: ["100 MS/s", "8 ch", "USB"],
  },
]

const TRACE =
  "M0 144 C18 144 22 96 40 96 S62 192 80 192 S102 72 120 72 S142 216 160 216 S182 120 200 120 S222 168 240 168 S262 48 280 48 S302 208 320 208 S342 144 360 144 S382 96 400 96 S422 168 440 168"

export default function ElectricalTemplatePage() {
  return (
    <PreviewShell template={getTemplate("electrical")!}>
      <header className="flex items-center justify-between border-b border-[color-mix(in_oklab,var(--el-green)_18%,transparent)] px-5 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center border border-[color-mix(in_oklab,var(--el-green)_42%,transparent)] font-mono text-[0.62rem] text-(--el-green)">
            CY
          </span>
          <span className="tpl-meta">陈屿 / 电气</span>
        </div>
        <div className="tpl-meta hidden gap-6 text-(--el-dim) sm:flex">
          <span className="text-(--el-green)">01 Work</span>
          <span>02 Notes</span>
          <span>03 Lab</span>
        </div>
        <span className="tpl-meta text-(--el-green)">● OPEN</span>
      </header>

      <div className="grid min-h-[calc(100svh-57px)] lg:grid-cols-[230px_1fr]">
        <aside className="flex flex-col justify-between border-b border-[color-mix(in_oklab,var(--el-green)_18%,transparent)] px-5 py-8 sm:px-8 lg:sticky lg:top-0 lg:h-[calc(100svh-57px)] lg:border-r lg:border-b-0">
          <div>
            <p className="tpl-meta text-(--el-dim)">Electrical Engineering</p>
            <h1 className="mt-6 text-[clamp(4.5rem,10vw,8rem)] leading-[0.78] font-medium tracking-[-0.08em] lg:text-[5.5rem]">
              EE<span className="text-(--el-green)">.</span>
            </h1>
            <p className="mt-6 max-w-xs text-sm/6 text-(--el-dim)">
              大三开始做模拟前端，第一块 ECG
              板焊坏了两次。现在在做便携心电采集和 BLDC
              驱动板，示波器截图和翻车记录都留着。
            </p>
            <nav className="tpl-meta mt-10 space-y-3 text-(--el-dim)">
              <p className="text-(--el-fg)">项目</p>
              <p>课程</p>
              <p>实验室笔记</p>
              <p>联系</p>
            </nav>
          </div>
          <div className="tpl-meta mt-10 text-(--el-dim)">
            Shanghai / UTC+8
            <br />
            Open to hardware roles
          </div>
        </aside>

        <main>
          <section className="border-b border-[color-mix(in_oklab,var(--el-green)_18%,transparent)] p-5 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between">
              <p className="tpl-meta text-(--el-dim)">CH1 / front-end</p>
              <p className="tpl-meta flex items-center gap-2 text-(--el-green)">
                <span className="tpl-blink size-1.5 rounded-full bg-current" />
                LIVE
              </p>
            </div>
            <svg
              viewBox="0 0 440 240"
              className="mt-5 w-full overflow-visible"
              role="img"
              aria-label="Animated oscilloscope trace"
            >
              <defs>
                <filter
                  id="ee-glow"
                  x="-20%"
                  y="-40%"
                  width="140%"
                  height="180%"
                >
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g stroke="var(--el-green)" strokeOpacity="0.1">
                {[30, 60, 90, 120, 150, 180, 210].map((y) => (
                  <line key={y} x1="0" y1={y} x2="440" y2={y} />
                ))}
                {[55, 110, 165, 220, 275, 330, 385].map((x) => (
                  <line key={x} x1={x} y1="0" x2={x} y2="240" />
                ))}
              </g>
              <path
                d={TRACE}
                fill="none"
                stroke="var(--el-green)"
                strokeOpacity="0.16"
                strokeWidth="12"
                strokeLinejoin="round"
                filter="url(#ee-glow)"
              />
              <path
                d={TRACE}
                fill="none"
                stroke="var(--el-green)"
                strokeOpacity="0.32"
                strokeWidth="5"
                filter="url(#ee-glow)"
              />
              <path
                className="tpl-wave"
                d={TRACE}
                fill="none"
                stroke="var(--el-green)"
                strokeWidth="2"
              />
              <line
                className="tpl-scan-line"
                x1="0"
                y1="0"
                x2="0"
                y2="240"
                stroke="var(--el-cyan)"
                strokeOpacity="0.55"
                strokeWidth="1.5"
              />
              <line
                x1="0"
                y1="144"
                x2="440"
                y2="144"
                stroke="var(--el-cyan)"
                strokeOpacity="0.3"
                strokeDasharray="2 6"
              />
            </svg>
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[color-mix(in_oklab,var(--el-green)_18%,transparent)] pt-4 sm:grid-cols-4">
              {[
                ["FREQ", "1.2 kHz"],
                ["VPP", "3.3 V"],
                ["NOISE", "0.8 mVrms"],
                ["JITTER", "0.4%"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="tpl-meta text-(--el-dim)">{label}</p>
                  <p className="mt-1 font-mono text-lg text-(--el-green)">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid border-b border-[color-mix(in_oklab,var(--el-green)_18%,transparent)] sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["ANALOG", "Feedback / noise / stability"],
              ["DIGITAL", "Timing / state machines"],
              ["PCB", "Stackup / impedance / EMC"],
              ["FIRMWARE", "C / RTOS / debug"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-[color-mix(in_oklab,var(--el-green)_14%,transparent)] p-5 sm:border-r sm:last:border-r-0 sm:nth-[2n]:border-r-0 xl:border-b-0 xl:nth-[2n]:border-r"
              >
                <p className="tpl-meta text-(--el-green)">{title}</p>
                <p className="mt-3 text-sm text-(--el-dim)">{text}</p>
              </div>
            ))}
          </section>

          <section className="p-5 sm:p-8 lg:p-10">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                项目
              </h2>
              <span className="tpl-meta text-(--el-dim)">2024—2026</span>
            </div>
            <div className="mt-8 divide-y divide-[color-mix(in_oklab,var(--el-green)_18%,transparent)] border-y border-[color-mix(in_oklab,var(--el-green)_18%,transparent)]">
              {BUILDS.map((build) => (
                <article
                  key={build.no}
                  className="grid gap-4 py-6 md:grid-cols-[4rem_1fr_10rem] md:items-baseline"
                >
                  <span className="font-mono text-sm text-(--el-green)">
                    {build.no}
                  </span>
                  <div>
                    <p className="tpl-meta text-(--el-dim)">{build.meta}</p>
                    <h3 className="mt-2 text-2xl font-medium tracking-tight">
                      {build.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm/6 text-(--el-dim)">
                      {build.text}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2 md:justify-end">
                    {build.specs.map((spec) => (
                      <li
                        key={spec}
                        className="border border-[color-mix(in_oklab,var(--el-green)_24%,transparent)] px-2 py-1 font-mono text-[0.62rem] text-(--el-green)"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 border-t border-[color-mix(in_oklab,var(--el-green)_18%,transparent)] p-5 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:p-10">
            <div>
              <p className="tpl-meta text-(--el-green)">课程</p>
              <h2 className="mt-3 text-2xl tracking-tight">
                信号、芯片与代码。
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <ul className="space-y-2 text-sm text-(--el-dim)">
                {[
                  "Signals & Systems — Fourier, filters, sampling",
                  "Analog Circuits — feedback, noise, stability",
                  "Digital Logic — timing, state machines",
                  "Embedded Systems — C, RTOS, interrupts",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-(--el-green)">↳</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <p className="tpl-meta text-(--el-dim)">工具</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {[
                    "KiCad",
                    "Altium",
                    "LTspice",
                    "STM32",
                    "Verilog",
                    "Scope",
                  ].map((tool) => (
                    <li
                      key={tool}
                      className="border border-[color-mix(in_oklab,var(--el-green)_28%,transparent)] px-2 py-1 font-mono text-[0.65rem] text-(--el-green)"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PreviewShell>
  )
}
