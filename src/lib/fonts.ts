import {
  Archivo_Black,
  IBM_Plex_Serif,
  Instrument_Serif,
  Space_Grotesk,
} from "next/font/google"
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

const fontEditorial = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-editorial",
})

const fontDisplay = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
})

const fontTech = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tech",
})

// Keep Caveat local to avoid the cloud build's Google-font resolution failure.
// Source: googlefonts/caveat@59745e818ef7973e11e70cb1358d0e902b56c5fc; see Caveat-OFL.txt.
const fontHandwritten = localFont({
  src: "../assets/fonts/Caveat-Variable.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  // Same glyphs and weight axis as the original TTF, but 64 KB instead of
  // 403 KB. Keep the preload so the handwritten greeting never flashes.
  variable: "--font-handwritten",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
  fontHandwritten.variable,
  fontEditorial.variable,
  fontDisplay.variable,
  fontTech.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-geist-mono)]"
)
