import type { User } from "@/features/portfolio/types/user"

const BIO = "做 AI 应用，也折腾前端。这里放项目、开发记录和一些平时的发现。"

export const USER: User = {
  firstName: "Anx",
  lastName: "",
  displayName: "Anx",
  username: "AnxForever",
  bio: BIO,
  // Rendered as plain text, not markdown — keep these free of link syntax.
  flipSentences: [
    "做 AI 应用，也折腾前端。",
    "维护 StyleKit，在做 Career Agent。",
    "项目、笔记和收藏都放在这里。",
  ],
  jobTitle: "AI 应用与前端开发",
  // 来自 GitHub 公开资料；不想公开的话删掉这一行即可。
  address: "西安，中国",
  // 邮箱是 base64 编码的，避免被爬虫直接抓走。
  emailB64: "YW54Zm9yZXZlckBxcS5jb20=",
  // phoneNumberB64 暂未公开 —— 留空即可，对应的 overview 条目会自动跳过。
  jobs: [],
  about: `我是 Anx，2026 届，学的是数据科学与大数据技术，目前在西安。

平时做 AI 应用，也写前端。主要在维护 [StyleKit](https://stylekit.top)，把网页风格和组件示例整理给 AI 编码助手用；另一个在做的项目是 Career Agent，想让根据岗位整理简历这件事少一点反复，也少一点凭空补写。

这里放做过的项目、开发中的记录，还有平时收藏的网页。写代码时我也会用 AI 工具，遇到的问题和后续修改会一起记下来。
`,
  avatar: "/images/anx-avatar.webp",
  avatarSketch: "/images/anx-avatar.webp",
  ogImage: `/og/simple?title=Anx&description=${encodeURIComponent(BIO)}`,
  keywords: [
    "anx",
    "anxforever",
    "stylekit",
    "ai agent",
    "ai 应用",
    "前端设计",
    "个人网站",
  ],
  timeZone: "Asia/Shanghai",
  dateCreated: "2026-09-26",
}
