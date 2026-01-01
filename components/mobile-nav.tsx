"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Github, Linkedin, Instagram, Facebook } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/lib/theme-context"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { setAccentColor } = useTheme()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  const handleColorChange = (color: string) => {
    setAccentColor(color)
  }

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/resume", label: "RESUME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/services", label: "SERVICES" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <>
      {/* Hamburger Menu Button - Mobile Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white hover:text-[var(--accent-color)] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-screen w-64 bg-black border-l border-gray-800 z-40 flex flex-col overflow-y-auto md:hidden"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-gray-800">
                <svg width="40" height="40" viewBox="0 0 200 200" className="text-[var(--accent-color)]">
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
                </svg>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-mono uppercase transition-colors py-2 ${
                      isActive(link.href)
                        ? "text-[var(--accent-color)] border-l-2 border-[var(--accent-color)] pl-3"
                        : "text-gray-300 hover:text-white pl-3"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Hire Me Button */}
              <div className="px-6 py-4 border-t border-gray-800">
                <a href="/cv.pdf" download onClick={() => setIsOpen(false)}>
                  <button className="w-full border-2 border-white text-white hover:bg-white hover:text-black rounded-lg px-4 py-2 font-mono uppercase text-sm bg-transparent transition-all duration-200">
                    HIRE ME
                  </button>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="px-6 py-4 border-t border-gray-800 flex gap-3 justify-center">
                <a
                  href="https://github.com/yathrib-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-600 hover:border-[var(--accent-color)] flex items-center justify-center transition-colors text-white hover:text-[var(--accent-color)]"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/teyiba-aman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-600 hover:border-[var(--accent-color)] flex items-center justify-center transition-colors text-white hover:text-[var(--accent-color)]"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/Yathrib_A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-600 hover:border-[var(--accent-color)] flex items-center justify-center transition-colors text-white hover:text-[var(--accent-color)]"
                >
                  <FaXTwitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-600 hover:border-[var(--accent-color)] flex items-center justify-center transition-colors text-white hover:text-[var(--accent-color)]"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/yathrib_aman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-600 hover:border-[var(--accent-color)] flex items-center justify-center transition-colors text-white hover:text-[var(--accent-color)]"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              {/* Color Picker */}
              <div className="px-6 py-4 border-t border-gray-800 flex justify-center gap-2">
                <button
                  onClick={() => handleColorChange("#3B82F6")}
                  className="w-6 h-6 rounded-full bg-blue-500 hover:ring-2 ring-white"
                />
                <button
                  onClick={() => handleColorChange("#EF4444")}
                  className="w-6 h-6 rounded-full bg-red-500 hover:ring-2 ring-white"
                />
                <button
                  onClick={() => handleColorChange("#10B981")}
                  className="w-6 h-6 rounded-full bg-green-500 hover:ring-2 ring-white"
                />
                <button
                  onClick={() => handleColorChange("#A855F7")}
                  className="w-6 h-6 rounded-full bg-purple-500 hover:ring-2 ring-white"
                />
                <button
                  onClick={() => handleColorChange("#FFA500")}
                  className="w-6 h-6 rounded-full bg-[var(--accent-color)] hover:ring-2 ring-white"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
