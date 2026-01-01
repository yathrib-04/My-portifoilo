"use client"

import { ArrowUpRight } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Full-Stack Development",
      description:
        "Designing and developing scalable web applications with modern frameworks like React, Next.js, and Node.js. Ensuring seamless integration of frontend and backend technologies for optimal performance.",
      borderColor: "border-gray-700",
    },
    {
      number: "02",
      title: "Backend Development & API Design",
      description:
        "Building secure, scalable, and efficient backend systems with a strong focus on clean architecture, database design, and high-performance APIs using Node.js, Express, and modern backend best practices.",
      borderColor: "border-[var(--accent-color)]",
    },
    {
      number: "03",
      title: "UI/UX Design & Frontend Optimization",
      description:
        "Designing responsive and visually appealing user interfaces with careful attention to usability, accessibility, and smooth performance, powered by Tailwind CSS and subtle UI animations..",
      borderColor: "border-gray-700",
    },
    {
      number: "04",
      title: "Software Engineering & Problem-Solving",
      description:
        "Proficient in problem-solving with a strong foundation in Data Structures and Algorithms, and hands-on experience with Agile development and version control for building reliable software.",
      borderColor: "border-gray-700",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <FadeInSection>
          <h1 className="text-2xl font-bold text-[var(--accent-color)] font-mono mb-8">Services I Provide</h1>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeInSection key={service.number} delay={index * 0.1}>
              <motion.div
                className={`border-2 ${service.borderColor} rounded-lg p-6 space-y-3 hover:border-[var(--accent-color)] transition-colors group`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-4xl font-bold text-transparent font-mono"
                    style={{
                      WebkitTextStroke: "2px white",
                      textStroke: "2px white",
                      color: "transparent",
                    }}
                  >
                    {service.number}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[var(--accent-color)] transition-colors" />
                </div>

                <h2 className="text-xl font-bold text-[var(--accent-color)] font-mono">{service.title}</h2>

                <p className="text-gray-300 font-mono leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  )
}
