"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Facebook, Instagram } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { FadeInSection } from "@/components/fade-in-section"
import { motion } from "framer-motion"

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, duration, hasAnimated])

  return (
    <span ref={ref} className="text-4xl lg:text-6xl font-bold text-white font-mono">
      {count}
    </span>
  )
}

function TypingText({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed])

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center py-8 lg:py-0">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col items-center lg:items-start order-2 lg:order-none">
              <FadeInSection>
                <div className="space-y-2 text-center lg:text-left">
                  <h2 className="text-2xl lg:text-3xl font-mono text-white">{"Hello I'm"}</h2>
                  <h1 className="text-4xl lg:text-5xl font-mono font-bold text-[var(--accent-color)]">{"Teyiba A."}</h1>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <p className="text-sm lg:text-base text-gray-300 leading-relaxed font-mono max-w-2xl min-h-[6rem] mt-6 text-center lg:text-left">
                  <TypingText text="As a Software Engineer, I design and build innovative software solutions, solve complex problems, and ensure systems are scalable and user-friendly. From creating web apps to optimizing backend systems, I bridge the gap between technology and user needs." />
                </p>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-12 mt-6">
                  <div className="flex items-center justify-center gap-2">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href="https://github.com/yathrib-04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-600 hover:border-[var(--accent-color)] flex items-center justify-center transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href="https://linkedin.com/in/teyiba-aman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-600 hover:border-[var(--accent-color)] flex items-center justify-center transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href="https://x.com/Yathrib_A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-600 hover:border-[var(--accent-color)] flex items-center justify-center transition-colors"
                      >
                        <FaXTwitter className="w-4 h-4" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href="#"
                        className="w-10 h-10 rounded-full border border-gray-600 hover:border-[var(--accent-color)] flex items-center justify-center transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href="https://www.instagram.com/yathrib_aman/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-600 hover:border-[var(--accent-color)] flex items-center justify-center transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a href="/cv.pdf" download>
                      <Button className="bg-transparent border-2 border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white px-8 py-6 rounded-full text-base font-mono transition-all duration-200">
                        {"Download CV "}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.6}>
                <div className="grid grid-cols-4 gap-4 lg:flex lg:flex-row lg:gap-8 mt-10 w-full">
                  <div className="flex flex-col items-center lg:flex-row lg:items-baseline gap-1 lg:gap-2">
                    <CountUp end={2} />
                    <span className="text-xs lg:text-sm text-gray-400 font-mono text-center lg:text-left">
                      <span className="lg:hidden">
                        {"Years of"}
                        <br />
                        {"experience"}
                      </span>
                      <span className="hidden lg:inline">{"Years of experience"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-center lg:flex-row lg:items-baseline gap-1 lg:gap-2">
                    <CountUp end={14} />
                    <span className="text-xs lg:text-sm text-gray-400 font-mono text-center lg:text-left">
                      <span className="lg:hidden">
                        {"Projects"}
                        <br />
                        {"completed"}
                      </span>
                      <span className="hidden lg:inline">{"Projects completed"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-center lg:flex-row lg:items-baseline gap-1 lg:gap-2">
                    <CountUp end={5} />
                    <span className="text-xs lg:text-sm text-gray-400 font-mono text-center lg:text-left">
                      <span className="lg:hidden">
                        {"Technologies"}
                        <br />
                        {"mastered"}
                      </span>
                      <span className="hidden lg:inline">{"Technologies mastered"}</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-center lg:flex-row lg:items-baseline gap-1 lg:gap-2">
                    <CountUp end={700} />
                    <span className="text-xs lg:text-sm text-gray-400 font-mono text-center lg:text-left">
                      <span className="lg:hidden">
                        {"Code"}
                        <br />
                        {"commits"}
                      </span>
                      <span className="hidden lg:inline">{"Code commits"}</span>
                    </span>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Fixed desktop layout - Image container is now second in grid (right side) */}
            <FadeInSection delay={0.3}>
              <div className="relative flex justify-center items-center lg:ml-12 order-1 lg:order-none">
                <div className="absolute w-[270px] h-[270px] lg:w-[420px] lg:h-[420px]">
                  <svg className="w-full h-full animate-orbit-slow" viewBox="0 0 420 420">
                    <circle
                      cx="210"
                      cy="210"
                      r="205"
                      fill="none"
                      stroke="var(--accent-color)"
                      strokeWidth="3"
                      strokeDasharray="40 20"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="relative w-[230px] h-[230px] lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden border-4 border-[var(--accent-color)]">
                  <Image src="/images/profile.png" alt="Teyiba A" fill className="object-cover" priority />
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
    </div>
  )
}
