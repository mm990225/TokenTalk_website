import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TokenTalk - Redefining Web3 Social",
  description: "Social + Wallet, Endless Possibilities",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">{children}</body>
    </html>
  )
}
