import type { PortfolioSection } from "../types/sections"
import { EDUCATION } from "./education"
import { EXPERIENCES } from "./experiences"
import { PROJECTS } from "./projects"
import { RECOGNITION } from "./recognition"
import { TECH_STACK } from "./tech-stack"

export function getPortfolioSections(): PortfolioSection[] {
  // Mirror the sections' empty-list guards before serializing search targets.
  const sections: (PortfolioSection & { visible: boolean })[] = [
    { id: "hello", title: "About", visible: true },
    { id: "stack", title: "Stack", visible: TECH_STACK.length > 0 },
    { id: "experience", title: "Experience", visible: EXPERIENCES.length > 0 },
    { id: "education", title: "Education", visible: EDUCATION.length > 0 },
    { id: "projects", title: "Projects", visible: PROJECTS.length > 0 },
    {
      id: "recognition",
      title: "Recognition",
      visible: RECOGNITION.length > 0,
    },
  ]

  return sections
    .filter((section) => section.visible)
    .map(({ id, title }) => ({
      id,
      title,
    }))
}
