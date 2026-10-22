/**
 * Feature flags that change what the deployed site exposes.
 *
 * Template previews (`/templates/*`) are design studies that live in this repo
 * but are not part of the public site. They are opt-in locally:
 *
 *   NEXT_PUBLIC_SHOW_TEMPLATES=1 pnpm dev
 *
 * Production leaves the variable unset, so every template route resolves to a
 * 404 and nothing links to them.
 */
export const TEMPLATES_ENABLED = process.env.NEXT_PUBLIC_SHOW_TEMPLATES === "1"
