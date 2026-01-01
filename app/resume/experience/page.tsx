import { Calendar } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[var(--accent-color)] font-mono">Professional Experience</h1>

      <div className="space-y-6">
        {/* CodeAlpha */}
        <div className="border border-gray-700 rounded-lg p-6 space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[var(--accent-color)] font-mono">CodeAlpha</h2>
              <p className="text-gray-400 italic font-mono text-sm">Frontend Developer Intern</p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
              <Calendar className="w-4 h-4" />
              <span>Mar 2025 - Jun 2025</span>
            </div>
          </div>

          <p className="text-gray-300 font-mono leading-relaxed text-sm">
            {
              "Enhanced frontend development skills by building Dashboard Web App, an interactive data visualization platform. Applied powerful front end technologies like React  and Tailwind CSS, achieving over 95% positive feedback from users. "
            }
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
              React
            </span>
            <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
              Tailwind CSS
            </span>
            <span className="px-3 py-1.5 bg-[var(--accent-color)]/20 text-white rounded-full font-mono text-xs border border-[var(--accent-color)]">
              Clean Architecture
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
