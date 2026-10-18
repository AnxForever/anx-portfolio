export const VIEW_WIDTH = 800
export const VIEW_HEIGHT = 256

/** Extrusion direction and depth, in viewBox units. */
export const DEPTH_X = 26
export const DEPTH_Y = 26
export const STEPS = 14

/** How far the face retreats when pressed, as a fraction of the depth. */
export const PRESS_FRACTION = 0.62

export const GLYPH_PATH =
  "M64 0h96v32h-96zM32 32h160v32h-160zM0 64h64v32h-64zM160 64h64v32h-64zM0 96h64v32h-64zM160 96h64v32h-64zM0 128h224v32h-224zM0 160h224v32h-224zM0 192h64v32h-64zM160 192h64v32h-64zM0 224h64v32h-64zM160 224h64v32h-64zM288 0h96v32h-96zM448 0h64v32h-64zM288 32h96v32h-96zM448 32h64v32h-64zM288 64h128v32h-128zM448 64h64v32h-64zM288 96h64v32h-64zM384 96h32v32h-32zM448 96h64v32h-64zM288 128h64v32h-64zM384 128h32v32h-32zM448 128h64v32h-64zM288 160h64v32h-64zM384 160h128v32h-128zM288 192h64v32h-64zM416 192h96v32h-96zM288 224h64v32h-64zM416 224h96v32h-96zM576 0h64v32h-64zM736 0h64v32h-64zM576 32h96v32h-96zM704 32h96v32h-96zM608 64h160v32h-160zM640 96h96v32h-96zM640 128h96v32h-96zM608 160h160v32h-160zM576 192h96v32h-96zM704 192h96v32h-96zM576 224h64v32h-64zM736 224h64v32h-64z"

/** Offset fractions from the face (0) back to the full depth (1). */
export function getLayers() {
  return Array.from({ length: STEPS + 1 }, (_, i) => 1 - i / STEPS)
}
