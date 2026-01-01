"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <FadeInSection>
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-[var(--accent-color)] font-mono">{"Let's work together"}</h1>
                <p className="text-gray-400 text-sm font-mono">
                  {
                    "Engineering precision with a twist of creativity—turning wild ideas into rock-solid solutions. Let's make awesome things happen together!"
                  }
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 placeholder:text-gray-600 focus:border-[var(--accent-color)] focus:outline-none font-mono text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 placeholder:text-gray-600 focus:border-[var(--accent-color)] focus:outline-none font-mono text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 placeholder:text-gray-600 focus:border-[var(--accent-color)] focus:outline-none font-mono text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 placeholder:text-gray-600 focus:border-[var(--accent-color)] focus:outline-none font-mono text-sm"
                  />
                </div>

                <textarea
                  placeholder="Text here"
                  rows={6}
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-gray-300 placeholder:text-gray-600 focus:border-[var(--accent-color)] focus:outline-none font-mono resize-none text-sm"
                />

                <select className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2.5 text-gray-600 focus:border-[var(--accent-color)] focus:outline-none font-mono appearance-none cursor-pointer text-sm">
                  <option value="">Select a service</option>
                  <option value="full-stack">Full-Stack Development</option>
                  <option value="backend">Backend</option>
                  <option value="frontend">Frontend</option>
                  <option value="ui-ux">UI/UX Design</option>
                </select>

                <Button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a1d2e] rounded-lg py-4 text-sm font-mono uppercase">
                  {"Send Message"}
                </Button>
              </form>
            </div>
          </FadeInSection>

          {/* Right Side - Contact Info */}
          <FadeInSection delay={0.2}>
            <div className="pt-16 flex flex-col items-center">
              <div className="space-y-6 w-full max-w-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-color)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[var(--accent-color)]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-mono">Phone</p>
                    <p className="text-base text-white font-mono">+251952048152</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-color)]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[var(--accent-color)]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-mono">Email</p>
                    <p className="text-base text-white font-mono">teyibaaman68@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-color)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--accent-color)]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 font-mono">Address</p>
                    <p className="text-base text-white font-mono">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}
