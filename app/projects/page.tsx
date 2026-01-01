"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { FadeInSection } from "@/components/fade-in-section"

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState(0)
  const [direction, setDirection] = useState(0)

  const projects = [
    {
      number: "01",
      title: "Habesha Restaurant",
      type: "Full Stack Web Application",
      description:
        "A full-stack restaurant web application that allows customers to browse menus and place food orders online, with an admin dashboard for efficient order management",
      technologies: ["TypScirpt", "Nest.js", "SCSS", "MySQL"],
      image: "/images/restaurant.png",
      githubUrl: "https://github.com/yathrib-04/Habesha-Restaurant",
      liveUrl: "https://habesha-restaurant.com",
    },
    {
      number: "02",
      title: "SaveHeaven",
      type: "Full-stack web application",
      description:
        "Say no more to silence and suffering in the shadows.  Save Heaven provides a safe and confidential space to report abuse and connect with emotional and medical support. We are here to listen, to protect, and to help you heal— because you are not alone.",
      technologies: ["React", "Express.js", "MongoDB"],
      image: "/images/saveheaven.png",
      githubUrl: "https://github.com/yathrib-04/SaveHeaven",
      liveUrl: "https://saveheaven.com",
    },
    {
      number: "03",
      title: "Evangadi Forum",
      type: "Q&A Community Platform",
      description:
        "Built a comprehensive Q&A forum platform enabling users to ask questions, share knowledge, and engage in community discussions 🚀. Implemented user authentication, reputation system, and real-time notifications for enhanced community interaction.",
      technologies: ["React", "Node.js", "MySQL"],
      image: "/images/evangadi-forum.png",
      githubUrl: "https://github.com/yathrib-04/Evangadi-Forum",
      liveUrl: "https://evangadi-forum.com",
    },
    {
      number: "04",
      title: "Guardian App",
      type: "Mobile health & emergency app",
      description:
        "A Flutter app that helps users manage their medical info and emergency contacts easily. You can securely store your health details, keep important contacts handy, and access them quickly when needed.",
      technologies: ["Flutter", "Swift", "Dart"],
      image: "/images/guardian-app.png",
      githubUrl: "https://github.com/yathrib-04/Guardian-app",
      liveUrl: "https://guardian-app.com",
    },
    {
      number: "05",
      title: "SafeNet",
      type: "Cyber Shield platform",
      description:
        "A digital safety platform protecting women and girls from online harm. It detects threats in messages, screenshots, and profiles, preserves evidence, and offers real-time protection through a browser extension.",
      technologies: ["React", "Vite", "Express", "MongoDB"],
      image: "/images/safenet.png",
      githubUrl: "https://github.com/yourusername/safenet",
      liveUrl: "https://safenet.com",
    },
  ]

  const project = projects[currentProject]

  const handleNext = () => {
    setDirection(1)
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <FadeInSection>
          <motion.div
            className="border border-gray-700 rounded-2xl p-8"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Content */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span
                        className="text-4xl font-bold text-transparent font-mono"
                        style={{
                          WebkitTextStroke: "2px white",
                          textStroke: "2px white",
                          color: "transparent",
                        }}
                      >
                        {project.number}
                      </span>
                      <h1 className="text-3xl font-bold text-[var(--accent-color)] font-mono">{project.title}</h1>
                      <p className="text-gray-400 font-mono text-sm">{project.type}</p>
                    </div>

                    <p className="text-gray-300 font-mono leading-relaxed text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-[var(--accent-color)] font-mono text-base font-semibold">
                          {tech}
                          {tech !== project.technologies[project.technologies.length - 1] && ","}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-gray-600 w-full"></div>

                    <div className="hidden lg:flex gap-4 pt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-2 border-white text-white hover:bg-white hover:text-[#1a1d2e] rounded-lg w-10 h-10 bg-transparent"
                        onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-2 border-white text-white hover:bg-white hover:text-[#1a1d2e] rounded-lg w-10 h-10 bg-transparent"
                        onClick={() => project.githubUrl && window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Right Content - Project Preview */}
                  <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <div className="relative border-2 border-[var(--accent-color)] rounded-lg overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="w-full h-auto"
                      />
                      <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-red-500 rounded-full blur-sm"></div>
                      <div className="absolute top-1/3 -right-8 w-6 h-6 bg-yellow-400 rounded-full blur-sm"></div>
                      <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-blue-400 rounded-full blur-sm"></div>
                    </div>

                    <div className="flex lg:hidden gap-4 mt-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-2 border-white text-white hover:bg-white hover:text-[#1a1d2e] rounded-lg w-10 h-10 bg-transparent"
                        onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-2 border-white text-white hover:bg-white hover:text-[#1a1d2e] rounded-lg w-10 h-10 bg-transparent"
                        onClick={() => project.githubUrl && window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </FadeInSection>

        <div className="flex justify-end gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            className="border-2 border-white text-white hover:bg-white hover:text-[#1a1d2e] rounded-lg w-10 h-10 bg-transparent transition-all duration-200"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-2 border-white text-white hover:bg-white hover:text-[#1a1d2e] rounded-lg w-10 h-10 bg-transparent transition-all duration-200"
            onClick={handleNext}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
