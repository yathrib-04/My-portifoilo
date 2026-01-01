"use client"

import { FadeInSection } from "@/components/fade-in-section"

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <FadeInSection>
        <h1 className="text-3xl font-bold text-[var(--accent-color)] font-mono">About Me</h1>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="border border-gray-700 rounded-lg p-6 space-y-4">
          <p className="text-base text-gray-300 leading-relaxed font-mono">
            {
              "Passionate software developer with expertise in modern web technologies,and problem-solving. Strong advocate for clean code, maintainability, and scalable software solutions. Enthusiastic about contributing to open-source projects and staying up to date with cutting-edge technologies."
            }
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--accent-color)] font-mono">Interests</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
                Open Source Contributing
              </span>
              <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
                Backend systems
              </span>
              <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
                Machine Learning
              </span>
              <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
                Tech blogging 
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--accent-color)] font-mono">Languages</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
                English (Fluent)
              </span>
              <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
                Amharic (Native)
              </span>
              <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
                Afan Oromo (Native)
              </span>
              <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
                Arabic (intermidiate)
              </span>
              <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
                Turkish (Basics)
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--accent-color)] font-mono">Fun Fact</h2>
            <p className="text-base text-gray-300 leading-relaxed font-mono">
              I light up with joy at every "Aha!" moment after a victorious debugging adventure. Horses captivate my
              heart and soul.🐎
            </p>
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}
