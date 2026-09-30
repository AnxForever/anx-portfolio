import "server-only"

import { unstable_cache } from "next/cache"

/**
 * Hugging Face download counts (rolling 30 days) for the given model ids,
 * cached for a day. Public data, no auth. A model that cannot be fetched
 * resolves to null and its badge is simply not rendered.
 */
export const getHuggingFaceDownloads = unstable_cache(
  async (models: string[]): Promise<Record<string, number | null>> => {
    const entries = await Promise.all(
      models.map(async (model) => {
        try {
          const response = await fetch(
            `https://huggingface.co/api/models/${model}`
          )

          if (!response.ok) {
            return [model, null] as const
          }

          const json = (await response.json()) as { downloads?: number }
          const count = Number(json?.downloads)
          return [model, Number.isFinite(count) ? count : null] as const
        } catch {
          return [model, null] as const
        }
      })
    )

    return Object.fromEntries(entries)
  },
  ["project-hf-downloads"],
  { revalidate: 86400 } // 1 day
)
