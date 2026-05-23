"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const skills = [
  { name: "Python", level: 95, category: "Languages" },
  { name: "Machine Learning", level: 92, category: "AI/ML" },
  { name: "Deep Learning", level: 88, category: "AI/ML" },
  { name: "TensorFlow", level: 85, category: "AI/ML" },
  { name: "PyTorch", level: 82, category: "AI/ML" },
  { name: "NLP", level: 85, category: "AI/ML" },
  { name: "Computer Vision", level: 80, category: "AI/ML" },
  { name: "Data Science", level: 90, category: "AI/ML" },
  { name: "React Native", level: 85, category: "Frontend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "PostgreSQL", level: 85, category: "Database" },
  { name: "SQL", level: 90, category: "Database" },
  { name: "AI Chatbots", level: 88, category: "AI/ML" },
  { name: "Git & GitHub", level: 92, category: "Tools" },
]

const categories = ["All", "AI/ML", "Languages", "Frontend", "Backend", "Database", "Tools"]

function AnimatedCounter({ value, isInView }: { value: number; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const duration = 1500
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
  }, [value, isInView])

  return <span>{count}%</span>
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0033]/50 to-transparent" />
        <motion.div
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#ff0033]/5 blur-[150px]"
        />
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
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Technical</span>{" "}
            <span className="text-[#ff0033]">Skills</span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#ff0033] text-white shadow-[0_0_20px_rgba(255,0,51,0.5)]"
                  : "bg-[#111111] text-white/60 border border-white/10 hover:border-[#ff0033]/30 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-[#111111]/80 border border-white/5 hover:border-[#ff0033]/30 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#ff0033]/0 group-hover:bg-[#ff0033]/5 transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#ff0033] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[#ff0033] font-mono text-lg font-bold">
                    <AnimatedCounter value={skill.level} isInView={isInView} />
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[#ff0033] to-[#ff3366] relative"
                    style={{
                      boxShadow: "0 0 20px rgba(255, 0, 51, 0.5)",
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>

                <span className="text-xs text-white/40 mt-2 block uppercase tracking-wider">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
