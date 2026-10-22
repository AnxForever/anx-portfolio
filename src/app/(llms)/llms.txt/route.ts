import { TEMPLATES } from "@/templates/registry"
import { format } from "date-fns"

import { TEMPLATES_ENABLED } from "@/config/features"
import { SITE_INFO } from "@/config/site"
import { markdownResponse } from "@/lib/markdown-response"
import { getBlogPosts } from "@/features/doc/data/documents"
import { EDUCATION } from "@/features/portfolio/data/education"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

const allPosts = getBlogPosts()
const education = EDUCATION[0]
const social = SOCIAL_LINKS.filter((link) => link.sameAs)

// Same stamp as the sitemap: tells an agent how fresh the index is without
// pretending the content changed on every request.
const BUILD_DATE = new Date(
  process.env.BUILD_TIMESTAMP ?? Date.now()
).toISOString()

const keyFacts = [
  `- Name: ${USER.displayName} (${USER.username}), ${USER.jobTitle}.`,
  USER.address && `- Based in ${USER.address}.`,
  education &&
    `- Studying ${education.fieldOfStudy} at ${education.school}${
      education.period
        ? ` (${education.period.start}–${education.period.end ?? "Present"})`
        : ""
    }.`,
  ...PROJECTS.map(
    (project) =>
      `- Project — ${project.title}: ${project.summary}${project.link ? ` (${project.link})` : ""}`
  ),
].filter(Boolean)

const templatesSection = TEMPLATES_ENABLED
  ? `## Templates

Seven portfolio templates share one layout system, each adapted to a major.
The library index is ${SITE_INFO.url}/templates; individual templates are HTML
pages:

${TEMPLATES.filter((template) => template.href !== "/")
  .map(
    (template) =>
      `- [${template.label}](${SITE_INFO.url}${template.href}): ${template.description}`
  )
  .join("\n")}

`
  : ""

const content = `# ${SITE_INFO.name}

> ${SITE_INFO.description}

- Canonical site: ${SITE_INFO.url}
- Language: zh-CN
- Last updated: ${BUILD_DATE.slice(0, 10)}
- Contact: ${SITE_INFO.url}/about.md

## Key facts

${keyFacts.join("\n")}

## Markdown access

Every section below is a Markdown document. The matching HTML page also returns
Markdown when the request sends \`Accept: text/markdown\`; blog posts are served at
\`/blog/<slug>.md\`. Use the HTML URLs for citations and the Markdown mirrors for
retrieval.

## Pages

- [About](${SITE_INFO.url}/about.md): Profile, location, contact, and tech stack.
- [Experience](${SITE_INFO.url}/experience.md): Roles and career highlights.
- [Education](${SITE_INFO.url}/education.md): Schools, fields of study, and coursework.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects with links and stacks.
- [Recognition](${SITE_INFO.url}/recognition.md): Awards, certifications, trademarks, and copyrights.
- [Craft](${SITE_INFO.url}/craft.md): Interface and interaction demos, newest first.
- [Blog](${SITE_INFO.url}/blog.md): Every blog post, newest first, with publish dates.
- [Bookmarks](${SITE_INFO.url}/bookmarks.md): Recommended articles, courses, books, references, and tools.

${templatesSection}
## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md): ${item.metadata.description} (published ${format(new Date(item.metadata.createdAt), "yyyy-MM-dd")}, updated ${format(new Date(item.metadata.updatedAt), "yyyy-MM-dd")})`).join("\n")}

## Elsewhere

${social.map((link) => `- [${link.title}](${link.href})`).join("\n")}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return markdownResponse(content)
}
