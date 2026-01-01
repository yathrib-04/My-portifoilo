"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, GraduationCap, Briefcase, Code } from "lucide-react"

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navItems = [
    { href: "/resume/about", label: "About me", icon: User },
    { href: "/resume/education", label: "Education", icon: GraduationCap },
    { href: "/resume/experience", label: "Experience", icon: Briefcase },
    { href: "/resume/skills", label: "Skills", icon: Code },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="lg:hidden overflow-x-auto scrollbar-hide border-b border-gray-800">
        <div className="flex gap-2 px-4 py-3 min-w-max">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full whitespace-nowrap text-sm font-mono transition-all ${
                  isActive ? "bg-[var(--accent-color)] text-white" : "bg-[#2a2d3e] text-gray-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          <aside className="hidden lg:block space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-150 ${
                    isActive ? "bg-[var(--accent-color)] text-white" : "bg-[#2a2d3e] text-gray-300 hover:bg-[#353849]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-mono">{item.label}</span>
                </Link>
              )
            })}
          </aside>

          {/* Main Content */}
          <main className="overflow-x-hidden">{children}</main>
        </div>
      </div>
    </div>
  )
}
