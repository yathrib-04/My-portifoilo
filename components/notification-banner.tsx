"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  // Get current date
  const date = new Date()
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-[#7d6d50] text-white px-3 py-1 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xl">☀️</span>
        <span className="font-mono text-xs">{"May you have a day full of progress and positivity!"}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs">{formattedDate}</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
