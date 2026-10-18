type EventProperties = Record<string, string | number | boolean | null>

/**
 * Client analytics is intentionally disabled until an OpenPanel client ID is
 * configured. Keeping the call sites behind this no-op avoids shipping the
 * replay-capable browser SDK (and its 401s) on a site that does not collect
 * events. The server-side /insights page uses the OpenPanel REST API instead.
 */
type Track = (name: string, properties?: EventProperties) => Promise<void>

export const track: Track = () => Promise.resolve()
