import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "stylekit",
    repo: "AnxForever/stylekit",
    title: "StyleKit",
    summary:
      "整理网页风格、设计参数、组件示例和模板，并提供 MCP、CLI 与 Skill。",
    link: "https://stylekit.top",
    skills: ["TypeScript", "Next.js", "React", "MCP", "Node.js"],
    isExpanded: true,
    titleEffect: "shimmer",
    description: `StyleKit 整理网页风格，以及配套的设计参数、组件示例、动画和页面模板。可以在网站上浏览，也可以用 MCP、CLI 或 Skill，把公开资料带进开发流程。MCP 能查找风格、生成实现 brief、按许可读取资产，并对代码做静态风格检查。

[工具怎么用和更新](https://me.anxforever.cn/blog/stylekit-mcp-tools) · [打开网站](https://stylekit.top) · [查看源码](https://github.com/AnxForever/stylekit)`,
  },
  {
    id: "research-first",
    repo: "AnxForever/research-first",
    title: "Research First",
    summary: "给 AI 编码助手用的调研 Skill，先查资料、比较方案，再动手。",
    link: "https://github.com/AnxForever/research-first",
    skills: ["Agent Skill", "Markdown"],
    description: `我给 AI 编码助手写的一套「先调研，再动手」的工作步骤。做功能前，要求它先看项目已有的代码，再查相关产品、开源方案和官方资料，把能复用什么、为什么这样选说清楚。

仓库里有 Skill、调研模板和使用示例，还记录了一次在 shadcn-admin 独立副本上补 CSV 导出的过程：查了哪些方案、怎么选、改了什么，以及最后怎么检查。

安装：\`npx skills add AnxForever/research-first\`

[安装与用法](https://github.com/AnxForever/research-first#快速开始) · [查看案例](https://github.com/AnxForever/research-first/blob/main/evals/README.md)`,
  },
  {
    id: "chinese-ai-detector",
    hfModel: "AnxForever/chinese-ai-detector-bert",
    title: "中文 AI 文本检测",
    summary: "本科毕设，用 BERT 做中文文本分类，模型和数据集已公开。",
    link: "https://huggingface.co/AnxForever/chinese-ai-detector-bert",
    skills: ["Python", "BERT", "PyTorch", "Hugging Face"],
    description: `我的本科毕业设计。围绕中文文本，做了数据整理、BERT 微调、误判分析和推理接口，模型与数据集已经公开。

主模型对整篇文本做分类，给出更接近人写还是 AI 生成的参考。它会受文本来源和写法影响，结果不能用来证明作者身份；具体实验和使用方法放在模型卡里。

[模型与用法](https://huggingface.co/AnxForever/chinese-ai-detector-bert) · [源码](https://github.com/AnxForever/ai-text-detector-mix) · [数据集](https://huggingface.co/datasets/AnxForever/chinese-ai-detection-dataset)`,
  },
  {
    id: "career-agent",
    repo: "AnxForever/yamlresume",
    title: "Career Agent",
    summary: "按岗位和个人材料整理简历，目前是开发版。",
    link: "https://github.com/AnxForever/yamlresume",
    skills: ["TypeScript", "LLM Agent", "SQLite", "Zod"],
    description: `把岗位描述和个人材料放进去，先分析岗位需要什么，再根据材料整理简历。经历要能查回原始材料，信息不够时先提问，生成后还能查看改动和检查结果。

我基于 [YAMLResume](https://github.com/yamlresume/yamlresume) 加了这套生成流程、接口和工作台，简历排版沿用上游的引擎与模板。

主流程、接口和工作台已有开发版，真实使用效果还需要继续试。[查看源码](https://github.com/AnxForever/yamlresume)`,
  },
]
