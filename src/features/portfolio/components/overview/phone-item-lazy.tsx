"use client"

import dynamic from "next/dynamic"

const PhoneItem = dynamic(
  () => import("./phone-item").then((mod) => mod.PhoneItem),
  { ssr: false }
)

export function PhoneItemLazy({ phoneNumberB64 }: { phoneNumberB64: string }) {
  return <PhoneItem phoneNumberB64={phoneNumberB64} />
}
