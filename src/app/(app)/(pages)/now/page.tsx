import type { Metadata } from "next"

import { X_HANDLE } from "@/config/site"
import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import { Markdown } from "@/components/markdown"
import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"

const title = "Now"
const description = "我现在在做什么。"

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    url: "/now",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

// 更新这个页面时，同步改这里的日子。
const LAST_UPDATED = "2026-10-02"

const content = `## 这段时间

### StyleKit

继续维护[风格网站](https://stylekit.top)和配套工具。网站用来选视觉方向，MCP 和 CLI 让编码助手也能用上同一套配色、字体和组件示例。

### Career Agent

在做一个按岗位和个人材料整理简历的工具。生成的经历要能查回原始材料，信息不够时先问，改完还能查看差异和检查结果。目前有开发版，真实使用效果还在验证。[源码](https://github.com/AnxForever/yamlresume)里也写了和 YAMLResume 上游的分工。

### Paperden

一个把论文原文和讨论放在一起的阅读工具：选中读不懂的段落，可以在旁边追问，讨论和出处一起保存。现在还在调整阅读界面和问答流程，[公开仓库](https://github.com/AnxForever/paperden)是较早的版本，与本机开发版有差异。

### 求职与项目整理

2026 届，这段时间也在准备求职。把做过的东西整理清楚，留下能直接看、能讲明白的项目。

## 小工具和折腾

- [Research First](https://github.com/AnxForever/research-first)：给 AI 助手用的开源技能，要求实现前先看已有代码和可复用方案，再检查改动。仓库里有一次公开项目的改造记录。
- 归舟：本机的 Chrome / Edge 书签整理扩展，可以归类、移动书签，保留操作记录并撤销。目前没有公开仓库或体验地址。
- [黑洞动画](https://github.com/AnxForever/schwarzschild-blackhole)：用 JavaScript 和 WebGL 做的浏览器视觉实验。
- [桌面 UI 资料整理](https://github.com/AnxForever/desktop-ui-design-extract)：整理配色、组件和动效的参考资料。

## 最近

- 2026-09-26，这个网站上线了，第一篇手记也发了。
`

export default function NowPage() {
  return (
    <>
      <JsonLdScript
        data={jsonLdBreadcrumbList([
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Now",
            href: "/now",
          },
        ])}
      />

      <div>
        <PageHeading>
          <PageHeadingTagline>Now</PageHeadingTagline>
          <PageHeadingTitle>现在在做什么。</PageHeadingTitle>
          <PageHeadingDescription>
            更新于 {LAST_UPDATED}。
          </PageHeadingDescription>
        </PageHeading>

        <div className="h-4" />

        <div className="screen-line-bottom h-px" />

        <div className="typeset typeset-description mx-auto max-w-3xl px-4 py-8">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </>
  )
}
