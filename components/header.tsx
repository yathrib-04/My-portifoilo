"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/lib/theme-context"
import { motion } from "framer-motion"
import { MobileNav } from "./mobile-nav"

export function Header() {
  const pathname = usePathname()
  const { setAccentColor } = useTheme()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  const handleColorChange = (color: string) => {
    setAccentColor(color)
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 group">
            <motion.svg
              width="40"
              height="40"
              viewBox="0 0 200 200"
              className="text-[var(--accent-color)]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="8" />
              <text
                x="85"
                y="130"
                fontSize="90"
                fontWeight="bold"
                fontFamily="Georgia, serif"
                fill="currentColor"
                textAnchor="middle"
              >
                T
              </text>
              <text
                x="115"
                y="130"
                fontSize="90"
                fontWeight="bold"
                fontFamily="Georgia, serif"
                fill="currentColor"
                textAnchor="middle"
              >
                Y
              </text>
            </motion.svg>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/"
                  className={`text-sm font-mono uppercase transition-colors ${
                    isActive("/") &&
                    !pathname.includes("resume") &&
                    !pathname.includes("projects") &&
                    !pathname.includes("services") &&
                    !pathname.includes("contact")
                      ? "text-[var(--accent-color)] border-b-2 border-[var(--accent-color)] pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {"HOME"}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/resume"
                  className={`text-sm font-mono uppercase transition-colors ${
                    isActive("/resume")
                      ? "text-[var(--accent-color)] border-b-2 border-[var(--accent-color)] pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {"RESUME"}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/projects"
                  className={`text-sm font-mono uppercase transition-colors ${
                    isActive("/projects")
                      ? "text-[var(--accent-color)] border-b-2 border-[var(--accent-color)] pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {"PROJECTS"}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/services"
                  className={`text-sm font-mono uppercase transition-colors ${
                    isActive("/services")
                      ? "text-[var(--accent-color)] border-b-2 border-[var(--accent-color)] pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {"SERVICES"}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  className={`text-sm font-mono uppercase transition-colors ${
                    isActive("/contact")
                      ? "text-[var(--accent-color)] border-b-2 border-[var(--accent-color)] pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {"CONTACT"}
                </Link>
              </motion.div>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="/cv.pdf" download>
                  <Button className="border-2 border-white text-white hover:bg-white hover:text-[#1a1d2e] rounded-lg px-6 py-2 font-mono uppercase text-sm bg-transparent transition-all duration-200">
                    {"HIRE ME"}
                  </Button>
                </a>
              </motion.div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                    <Button variant="ghost" size="icon" className="text-[var(--accent-color)] hover:bg-transparent">
                      <Palette className="w-6 h-6" />
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-[#2a2d3e] border-gray-700 text-white">
                  <DropdownMenuItem className="gap-2 cursor-pointer" onClick={() => handleColorChange("#3B82F6")}>
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span>{"Blue Color"}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 cursor-pointer" onClick={() => handleColorChange("#EF4444")}>
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <span>{"Red Color"}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 cursor-pointer" onClick={() => handleColorChange("#10B981")}>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span>{"Green Color"}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 cursor-pointer" onClick={() => handleColorChange("#A855F7")}>
                    <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                    <span>{"Purple Color"}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 cursor-pointer" onClick={() => handleColorChange("#FFA500")}>
                    <div className="w-4 h-4 rounded-full bg-[var(--accent-color)]"></div>
                    <span>{"Gold Color"}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}
