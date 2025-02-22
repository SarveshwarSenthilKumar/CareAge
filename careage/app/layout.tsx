import type React from "react"
import type { Metadata } from "next"
import { Inter, Nanum_Myeongjo as Jeju_Myeongjo } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jejuMyeongjo = Jeju_Myeongjo({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CareAge - Carrying Support Across Generations",
  description: "Connecting youth volunteers with elderly community members for support and assistance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'