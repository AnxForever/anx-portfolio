import { IBM_Plex_Serif } from "next/font/google"
import localFont from "next/font/local"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"

const fontSans = GeistSans
const fontMono = GeistMono

const fontSerif = IBM_Plex_Serif({
  weight: ["400"],
  display: "swap",
  variable: "--font-serif",
})

// Keep Caveat local to avoid the cloud build's Google-font resolution failure.
// Source: googlefonts/caveat@59745e818ef7973e11e70cb1358d0e902b56c5fc; see Caveat-OFL.txt.
const fontHandwritten = localFont({
  src: "../assets/fonts/Caveat-Variable.ttf",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-handwritten",
})

// const fontPixel = localFont({
//   src: "../assets/fonts/DepartureMono-Regular.woff2",
//   weight: "400",
//   fallback: ["monospace"],
//   variable: "--font-pixel",
// })

// const pixelatedMSSansSerif = localFont({
//   src: [
//     {
//       path: "../assets/fonts/ms_sans_serif.woff2",
//       weight: "400",
//     },
//     {
//       path: "../assets/fonts/ms_sans_serif_bold.woff2",
//       weight: "700",
//     },
//   ],
//   fallback: ["Arial"],
//   variable: "--font-98cn",
// })

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
  fontHandwritten.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-geist-mono)]"
)
