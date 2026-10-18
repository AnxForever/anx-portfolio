import type { TemplateDefinition, TemplateId } from "./types"

export const TEMPLATES: TemplateDefinition[] = [
  {
    id: "cs",
    label: "计算机科学",
    major: "AI / 前端 / 开源 · Computer Science",
    description: "默认模板：GitHub 热力图、技术栈、项目、文章和收藏。",
    accent: "zinc",
    href: "/",
    status: "live",
  },
  {
    id: "mechanical",
    label: "机械工程",
    major: "机械 / 机电 / 制造 · Mechanical",
    description: "等距机械测试台、CAD/FEA 项目字段和制作日志。",
    accent: "oxide",
    href: "/templates/mechanical",
    status: "preview",
  },
  {
    id: "electrical",
    label: "电气工程",
    major: "电路 / 嵌入式 / 信号 · Electrical",
    description: "暗色实验室界面、示波器波形、PCB 与固件项目。",
    accent: "phosphor",
    href: "/templates/electrical",
    status: "preview",
  },
  {
    id: "civil",
    label: "土木与建筑",
    major: "结构 / 建筑 / 场地 · Civil",
    description: "图纸式版面、结构荷载图、建筑项目与场地笔记。",
    accent: "blueprint",
    href: "/templates/civil",
    status: "preview",
  },
  {
    id: "medicine",
    label: "医学与健康",
    major: "临床 / 科研 / 公共卫生 · Medicine",
    description: "临床病例文件、ECG 波形、科研与病房记录。",
    accent: "clinical",
    href: "/templates/medicine",
    status: "preview",
  },
  {
    id: "business",
    label: "商科与金融",
    major: "金融 / 经济 / 咨询 · Business",
    description: "年报式编辑设计、市场图表、投资备忘录与案例。",
    accent: "brass",
    href: "/templates/business",
    status: "preview",
  },
  {
    id: "design",
    label: "设计与艺术",
    major: "视觉 / 交互 / 影像 · Design",
    description: "Riso 色彩、大字排版、作品集与实验性视觉。",
    accent: "riso",
    href: "/templates/design",
    status: "preview",
  },
]

export function getTemplate(id: TemplateId) {
  return TEMPLATES.find((template) => template.id === id)
}
