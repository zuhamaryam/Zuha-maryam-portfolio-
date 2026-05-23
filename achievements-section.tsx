"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const achievements = [
  {
    year: "2025",
    title: "Google Agentathon 2025",
    description: "Participated in Google's premier AI agent development competition.",
    type: "Competition",
  },
  {
    year: "2025",
    title: "Smart India Hackathon 2025",
    description: "National level hackathon participation with innovative AI solutions.",
    type: "Hackathon",
  },
  {
    year: "2024",
    title: "Smart India Hackathon 2024",
    description: "Developed AI-powered solutions for real-world problems.",
    type: "Hackathon",
  },
  {
    year: "2024",
    title: "IEEE Conference Presentation",
    description: "Presented research paper on AI-based fraud detection systems.",
    type: "Research",
  },
  {
    year: "2024",
    title: "ML Research Assistant",
    description: "Contributed to cutting-edge machine learning research projects.",
    type: "Experience",
  },
  {
    year: "2024",
    title: "Published Research Papers",
    description: "3 research papers published in peer-reviewed journals.",
    type: "Research",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0033]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff0033] text-sm tracking-[0.3em] uppercase mb-4 block">
            Milestones
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Research &</span>{" "}
            <span className="text-[#ff0033]">Achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff0033] via-[#ff0033]/50 to-transparent" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-4 h-4 rounded-full bg-[#ff0033] shadow-[0_0_20px_rgba(255,0,51,0.8)]"
                  />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 pl-12 md:pl-0" : "md:pl-12 pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group p-6 rounded-2xl bg-[#111111]/80 border border-white/5 hover:border-[#ff0033]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-[#ff0033]/10 text-[#ff0033] border border-[#ff0033]/20">
                        {achievement.type}
                      </span>
                      <span className="text-white/40 text-sm font-mono">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#ff0033] transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {achievement.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
