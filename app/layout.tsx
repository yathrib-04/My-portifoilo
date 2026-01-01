import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { NotificationBanner } from "@/components/notification-banner"
import { ThemeProvider } from "@/lib/theme-context"
import { PageTransition } from "@/components/page-transition"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Teyiba A - Software Engineer",
  description:
    "Portfolio of Teyiba A, Software Engineer specializing in full-stack development, AI/ML, and problem-solving",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-mono antialiased`}>
        <ThemeProvider>
          <NotificationBanner />
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
