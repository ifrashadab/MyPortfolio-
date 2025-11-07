import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ifra Shadab - Portfolio",
  description:
    "Electrical Engineer | AI & Cybersecurity Enthusiast | Innovator. B.Tech Electrical Engineering student at NSUT, passionate about AI/ML, Cybersecurity, and Innovation.",
  generator: "v0.app",
  openGraph: {
    title: "Ifra Shadab - Portfolio",
    description: "Electrical Engineer | AI & Cybersecurity Enthusiast | Innovator",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased ${geistSans.className} ${geistMono.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
