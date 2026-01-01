"use client"
import { FaReact, FaNode, FaGithub, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { VscCode } from "react-icons/vsc"
import { SiFlutter, SiTailwindcss, SiBootstrap, SiExpress, SiJavascript } from "react-icons/si"

export default function SkillsPage() {
  const allSkills = [
    { name: "React", icon: FaReact },
    { name: "Flutter", icon: SiFlutter },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Node.js", icon: FaNode },
    { name: "Express", icon: SiExpress },
    { name: "GitHub", icon: FaGithub },
    { name: "VS Code", icon: VscCode },
    { name: "Figma", icon: FaFigma },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
  ]

  const firstRowSkills = allSkills.slice(0, 6)
  const secondRowSkills = allSkills.slice(6, 12)

  const SkillsRow = ({ skills, direction = "forward" }: { skills: typeof allSkills; direction?: string }) => (
    <div className="w-full overflow-hidden">
      <div
        className={`flex gap-0 ${direction === "forward" ? "animate-marquee" : "animate-marquee-reverse"}`}
        style={{ width: "max-content" }}
      >
        {/* First set of skills */}
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <div key={`skill-1-${index}`} className="flex flex-col items-center gap-1 flex-shrink-0 px-2 sm:px-3">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" style={{ color: "var(--accent-color)" }} />
              <span className="text-white font-mono text-[10px] sm:text-xs text-center whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          )
        })}
        {/* Duplicate set for seamless loop */}
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <div key={`skill-2-${index}`} className="flex flex-col items-center gap-1 flex-shrink-0 px-2 sm:px-3">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" style={{ color: "var(--accent-color)" }} />
              <span className="text-white font-mono text-[10px] sm:text-xs text-center whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="space-y-6 sm:space-y-8 w-full max-w-full overflow-hidden">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--accent-color)] font-mono px-2 sm:px-0">
        Technical Skills
      </h1>

      <div className="space-y-4 sm:space-y-4 overflow-hidden">
        <SkillsRow skills={firstRowSkills} direction="forward" />
        <SkillsRow skills={secondRowSkills} direction="reverse" />
      </div>

      <div className="grid gap-4 sm:gap-6 px-2 sm:px-0">
        {/* Frontend Development */}
        <div className="border border-gray-700 rounded-lg p-3 sm:p-6 space-y-2 sm:space-y-3">
          <h2 className="text-base sm:text-xl font-bold text-[var(--accent-color)] font-mono">Frontend Development</h2>
          <p className="text-gray-300 font-mono leading-relaxed text-xs sm:text-sm">
            Experienced in building interactive and high-performance web applications using modern JavaScript
            frameworks. Passionate about UI/UX and responsive design.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              React
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              TypeScript
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              Tailwind CSS
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              Bootstrap
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              CSS
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              Figma
            </span>
          </div>
        </div>

        {/* Backend Development */}
        <div className="border border-gray-700 rounded-lg p-3 sm:p-6 space-y-2 sm:space-y-3">
          <h2 className="text-base sm:text-xl font-bold text-[var(--accent-color)] font-mono">Backend Development</h2>
          <p className="text-gray-300 font-mono leading-relaxed text-xs sm:text-sm">
            Skilled in building robust server-side applications and RESTful APIs. Strong understanding of database
            design and management.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              Node.js
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              Express
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              NestJS
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              Python
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              MySQL
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              MongoDB
            </span>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="border border-gray-700 rounded-lg p-3 sm:p-6 space-y-2 sm:space-y-3">
          <h2 className="text-base sm:text-xl font-bold text-[var(--accent-color)] font-mono">Tools & Technologies</h2>
          <p className="text-gray-300 font-mono leading-relaxed text-xs sm:text-sm">
            Proficient with modern development tools and version control systems. Experience with mobile and data
            analysis frameworks.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              Git
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              GitHub
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              VS Code
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              Postman
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              Flutter
            </span>
            <span className="px-2 py-1 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-[10px] sm:text-xs border border-[var(--accent-color)]">
              Pandas
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
