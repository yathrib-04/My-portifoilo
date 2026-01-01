"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type ThemeColor = string

interface ThemeContextType {
  accentColor: ThemeColor
  setAccentColor: (color: ThemeColor) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [accentColor, setAccentColor] = useState<ThemeColor>("#FFA500")
  const [mounted, setMounted] = useState(false)

  // Load saved color on mount
  useEffect(() => {
    setMounted(true)
    const savedColor = localStorage.getItem("accent-color")
    if (savedColor) {
      setAccentColor(savedColor)
      document.documentElement.style.setProperty("--accent-color", savedColor)
    }
  }, [])

  // Update CSS variable and save to localStorage whenever color changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.style.setProperty("--accent-color", accentColor)
      localStorage.setItem("accent-color", accentColor)
    }
  }, [accentColor, mounted])

  return <ThemeContext.Provider value={{ accentColor, setAccentColor }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
