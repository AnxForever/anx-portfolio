import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "stylekit",
    repo: "AnxForever/stylekit",
    title: "StyleKit",
    summary: "给 AI 编码助手用的网页风格库，网站和工具包已公开。",
    link: "https://stylekit.top",
    skills: ["TypeScript", "Next.js", "React", "MCP", "Node.js"],
    isExpanded: true,
    titleEffect: "shimmer",
    description: `StyleKit 把网页风格做成可预览的页面，并整理了配色、字体和组件示例。可以先在网站上选风格，再把这些信息交给 AI 编码助手。

我在维护网站和配套的 MCP、命令行工具，让编辑器里的助手也能查风格、取设计参数和组件示例。MCP 还提供了基于类名规则的代码检查。

[打开网站](https://stylekit.top) · [查看源码](https://github.com/AnxForever/stylekit)`,
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
