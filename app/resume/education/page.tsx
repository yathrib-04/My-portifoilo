import { Calendar } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[var(--accent-color)] font-mono">Educational Background</h1>

      <div className="space-y-6">
        {/* BSc in Software Engineering */}
        <div className="border border-gray-700 rounded-lg p-6 space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[var(--accent-color)] font-mono">
                BSc in Software Engineering (Software Stream)
              </h2>
              <p className="text-gray-400 italic font-mono text-sm">Addis Ababa University</p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
              <Calendar className="w-4 h-4" />
              <span></span>
            </div>
          </div>

          <p className="text-gray-300 font-mono leading-relaxed text-sm">
            Studied core computer science subjects including Data Structures & Algorithms, Object Oriented Programming,
            Operating Systems, Computer Architecture and Organization, Database system, Web and Mobile Development,
            Networking and AI & Machine Learning.
          </p>
        </div>
      </div>
    </div>
  )
}
