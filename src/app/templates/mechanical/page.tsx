import type { Metadata } from "next"
import { PreviewShell } from "@/templates/components/preview-shell"
import {
  MECHANICAL_PROFILE,
  MECHANICAL_PROJECTS,
} from "@/templates/mechanical/data"
import { MechanicalFigureFrame } from "@/templates/mechanical/figure/mechanical-figure-frame"
import { getTemplate } from "@/templates/registry"

export const metadata: Metadata = {
  title: "Mechanical Engineering Template",
  description: "机械工程模板：等距机构图、CAD/FEA 项目字段和制作日志。",
  alternates: { canonical: "/templates/mechanical" },
}

export default function MechanicalTemplatePage() {
  return (
    <PreviewShell template={getTemplate("mechanical")!}>
      <div className="min-h-svh p-3 sm:p-6">
        <div className="tpl-sheet tpl-sheet-fill mx-auto max-w-312 border">
          <header className="flex flex-wrap items-center justify-between gap-2 border-b border-[color-mix(in_oklab,var(--mech-ink)_24%,transparent)] px-4 py-3 font-mono text-[0.66rem] tracking-[0.16em] uppercase">
            <span>林维 / 机械工程</span>
            <span className="text-(--mech-line)">图纸 01 / 2026</span>
            <span>第 1 页 / 共 1 页</span>
          </header>

          <section className="grid border-b border-[color-mix(in_oklab,var(--mech-ink)_24%,transparent)] lg:grid-cols-[0.78fr_1.22fr]">
            <div className="border-b border-[color-mix(in_oklab,var(--mech-ink)_24%,transparent)] p-5 sm:p-7 lg:border-r lg:border-b-0">
              <p className="font-mono text-[0.66rem] tracking-[0.18em] text-(--mech-line) uppercase">
                机械工程 / 2026
              </p>
              <h1 className="mt-5 font-heading text-[clamp(3.8rem,11vw,7rem)] leading-[0.82] font-medium tracking-[-0.065em]">
                林
                <br />维<span className="text-(--mech-red)">.</span>
              </h1>
              <p className="mt-6 max-w-sm text-sm/6 text-[color-mix(in_oklab,var(--mech-ink)_68%,transparent)]">
                {MECHANICAL_PROFILE.bio}
              </p>
              <p className="mt-5 font-mono text-[0.66rem] tracking-wider text-[color-mix(in_oklab,var(--mech-ink)_52%,transparent)] uppercase">
                {MECHANICAL_PROFILE.location} / 寻找设计岗位
              </p>

              <div className="mt-8 border-t border-[color-mix(in_oklab,var(--mech-ink)_24%,transparent)] pt-4">
                <p className="font-mono text-[0.64rem] tracking-[0.16em] text-(--mech-line) uppercase">
                  课程
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[color-mix(in_oklab,var(--mech-ink)_66%,transparent)]">
                  {[
                    "Thermodynamics — cycles, energy, irreversibility",
                    "Solid Mechanics — stress, fatigue, failure",
                    "Dynamics & Mechanisms — motion and loads",
                    "Manufacturing — tolerances, DFM, assembly",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-(--mech-red)">↳</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["SolidWorks", "Fusion 360", "ANSYS", "MATLAB", "CNC"].map(
                    (tool) => (
                      <li
                        key={tool}
                        className="border border-[color-mix(in_oklab,var(--mech-line)_30%,transparent)] px-2 py-1 font-mono text-[0.62rem] text-(--mech-line)"
                      >
                        {tool}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <MechanicalFigureFrame />
            </div>
          </section>

          <section className="grid border-b border-[color-mix(in_oklab,var(--mech-ink)_24%,transparent)] sm:grid-cols-4">
            {[
              ["Material", "PA12 / SPCC"],
              ["Method", "CAD → FEA → rig"],
              ["Tolerance", "±0.05 mm"],
              ["Status", "Prototype"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-[color-mix(in_oklab,var(--mech-ink)_18%,transparent)] p-4 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
              >
                <p className="font-mono text-[0.62rem] tracking-[0.14em] text-(--mech-line) uppercase">
                  {label}
                </p>
                <p className="mt-2 text-sm">{value}</p>
              </div>
            ))}
          </section>

          <section className="p-5 sm:p-7">
            <div className="flex items-end justify-between gap-4 border-b border-[color-mix(in_oklab,var(--mech-ink)_24%,transparent)] pb-3">
              <h2 className="font-heading text-2xl font-medium tracking-tight">
                零件与项目
              </h2>
              <span className="font-mono text-[0.62rem] tracking-wider text-(--mech-line) uppercase">
                2024—2026
              </span>
            </div>
            <div>
              {MECHANICAL_PROJECTS.map((project, index) => (
                <article
                  key={project.title}
                  className="grid gap-3 border-b border-[color-mix(in_oklab,var(--mech-ink)_18%,transparent)] py-5 last:border-b-0 sm:grid-cols-[2.5rem_1fr_9rem]"
                >
                  <span className="font-mono text-xs text-(--mech-red)">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-mono text-[0.62rem] tracking-wider text-(--mech-line) uppercase">
                      {project.kind}
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-medium tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm/6 text-[color-mix(in_oklab,var(--mech-ink)_64%,transparent)]">
                      {project.summary}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-1.5 sm:justify-end">
                    {project.specs.map((spec) => (
                      <li
                        key={spec}
                        className="border border-[color-mix(in_oklab,var(--mech-ink)_20%,transparent)] px-1.5 py-0.5 font-mono text-[0.6rem] text-[color-mix(in_oklab,var(--mech-ink)_62%,transparent)]"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <footer className="grid border-t border-[color-mix(in_oklab,var(--mech-ink)_24%,transparent)] sm:grid-cols-3">
            {[
              ["项目", "机械工程作品集模板"],
              ["适配", "响应式 / 明暗主题"],
              ["联系", "hello@example.com"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border-b border-[color-mix(in_oklab,var(--mech-ink)_18%,transparent)] p-4 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
              >
                <p className="font-mono text-[0.6rem] tracking-[0.14em] text-(--mech-line) uppercase">
                  {label}
                </p>
                <p className="mt-1 text-xs text-[color-mix(in_oklab,var(--mech-ink)_62%,transparent)]">
                  {value}
                </p>
              </div>
            ))}
          </footer>
        </div>
      </div>
    </PreviewShell>
  )
}
