"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Award, FileText, Target } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Brain, value: "10+", label: "AI Projects", color: "#ff0033" },
  { icon: Award, value: "15+", label: "Certifications", color: "#ff0033" },
  { icon: FileText, value: "3", label: "Research Papers", color: "#ff0033" },
  { icon: Target, value: "92%", label: "Model Accuracy", color: "#ff0033" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0033]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0033]/50 to-transparent" />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#ff0033]/10 blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#ff0033] text-sm tracking-[0.3em] uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Passionate</span>{" "}
            <span className="text-[#ff0033]">AI/ML Engineer</span>
          </h2>
        </motion.div>

        {/* Main content - Full width image with overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* About Image */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000684c720891e35ac1511c37dd-EFpz68cKajqvP4dr08XCjf1WE3RMjj.png"
              alt="Zuha Maryam - AI/ML Engineer"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay for text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/40 to-transparent md:from-[#050505]/60 md:via-[#050505]/20" />
          </div>

          {/* Neon border */}
          <div className="absolute inset-0 rounded-3xl border border-[#ff0033]/20" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 rounded-2xl bg-[#111111]/80 backdrop-blur-xl border border-white/5 hover:border-[#ff0033]/30 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#ff0033]/0 group-hover:bg-[#ff0033]/5 transition-all duration-300" />
              
              <div className="relative z-10">
                <stat.icon className="w-8 h-8 text-[#ff0033] mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {/* Innovative Thinker */}
          <div className="p-6 rounded-2xl bg-[#111111]/60 backdrop-blur-xl border border-white/5 hover:border-[#ff0033]/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#ff0033]/10 border border-[#ff0033]/20 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-[#ff0033]" />
            </div>
            <h3 className="text-lg font-semibold text-[#ff0033] mb-2">Innovative Thinker</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              I enjoy solving real world problems using AI and innovative technologies.
            </p>
          </div>

          {/* Full Stack Developer */}
          <div className="p-6 rounded-2xl bg-[#111111]/60 backdrop-blur-xl border border-white/5 hover:border-[#ff0033]/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#ff0033]/10 border border-[#ff0033]/20 flex items-center justify-center mb-4">
              <span className="text-[#ff0033] font-mono text-lg">&lt;/&gt;</span>
            </div>
            <h3 className="text-lg font-semibold text-[#ff0033] mb-2">Full Stack Developer</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Skilled in building end-to-end web and mobile applications.
            </p>
          </div>

          {/* Lifelong Learner */}
          <div className="p-6 rounded-2xl bg-[#111111]/60 backdrop-blur-xl border border-white/5 hover:border-[#ff0033]/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#ff0033]/10 border border-[#ff0033]/20 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#ff0033]" />
            </div>
            <h3 className="text-lg font-semibold text-[#ff0033] mb-2">Lifelong Learner</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Always exploring new technologies and improving my skills.
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 p-8 rounded-2xl bg-[#111111]/40 backdrop-blur-xl border border-[#ff0033]/10"
        >
          <div className="flex items-start gap-4">
            <span className="text-[#ff0033] text-5xl font-serif leading-none">&ldquo;</span>
            <p className="text-white/70 text-lg italic leading-relaxed">
              I believe in the power of technology to transform lives and shape a better tomorrow.
            </p>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center justify-center gap-2 text-white/50 mt-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Hyderabad, India</span>
        </motion.div>
      </div>
    </section>
  )
}
