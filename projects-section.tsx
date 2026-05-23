"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Prashikshan Internship Platform",
    description: "AI-powered internship and student tracking platform with role-based dashboard and smart workflow automation.",
    tech: ["React", "Node.js", "PostgreSQL", "AI/ML"],
    github: "https://github.com/zuhamaryam",
    live: "#",
    image: "/images/hero-bg.jpg",
    featured: true,
  },
  {
    title: "Fraud Detection System",
    description: "ML-based banking fraud detection system with improved prediction accuracy by 20% and optimized preprocessing pipeline.",
    tech: ["Python", "Scikit-learn", "TensorFlow", "SQL"],
    github: "https://github.com/zuhamaryam",
    live: "#",
    image: "/images/project-fraud.jpg",
    featured: true,
  },
  {
    title: "AI Content Verifier",
    description: "Detect AI-generated images, videos, and PDFs using multi-modal neural network with 92% classification accuracy.",
    tech: ["PyTorch", "Computer Vision", "NLP", "FastAPI"],
    github: "https://github.com/zuhamaryam",
    live: "#",
    image: "/images/project-verifier.jpg",
    featured: true,
  },
  {
    title: "MedVerify",
    description: "AI medicine genuineness detector with computer vision and NLP integration for real-time verification pipeline.",
    tech: ["TensorFlow", "OpenCV", "Flask", "MongoDB"],
    github: "https://github.com/zuhamaryam",
    live: "#",
    image: "/images/project-medical.jpg",
    featured: false,
  },
  {
    title: "Real-Time Notification System",
    description: "Instant event-driven notifications with secure backend integration and scalable architecture.",
    tech: ["Node.js", "Socket.io", "Redis", "PostgreSQL"],
    github: "https://github.com/zuhamaryam",
    live: "#",
    image: "/images/hero-bg.jpg",
    featured: false,
  },
  {
    title: "Digital Logbook System",
    description: "AI-powered digital workflow management with smart analytics dashboard and automated reporting.",
    tech: ["React Native", "Node.js", "ML", "PostgreSQL"],
    github: "https://github.com/zuhamaryam",
    live: "#",
    image: "/images/project-verifier.jpg",
    featured: false,
  },
  {
    title: "AviaProtector",
    description: "AI-based emergency inflight response system - Final year major project with real-time monitoring.",
    tech: ["Python", "Deep Learning", "IoT", "Cloud"],
    github: "https://github.com/zuhamaryam",
    live: "#",
    image: "/images/project-aviation.jpg",
    featured: true,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0033]/50 to-transparent" />
        <motion.div
          animate={{ y: [-50, 50, -50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#ff0033]/10 blur-[150px]"
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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Featured</span>{" "}
            <span className="text-[#ff0033]">Projects</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            A showcase of AI/ML projects and full-stack applications that demonstrate 
            innovative solutions to real-world problems.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-[#111111] border border-white/5 hover:border-[#ff0033]/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-[#ff0033]/20 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-[#050505] flex items-center justify-center text-white hover:text-[#ff0033] transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-[#050505] flex items-center justify-center text-white hover:text-[#ff0033] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </motion.div>

                  {/* Neon border glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border-2 border-[#ff0033]/50 rounded-t-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff0033] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-[#ff0033]/10 text-[#ff0033] border border-[#ff0033]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0033]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">More Projects</h3>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-full bg-[#111111] border border-white/10 hover:border-[#ff0033]/30 text-white hover:text-[#ff0033] transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-full bg-[#111111] border border-white/10 hover:border-[#ff0033]/30 text-white hover:text-[#ff0033] transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          >
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-[320px] p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#ff0033]/30 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2 hover:text-[#ff0033] transition-colors">
                  {project.title}
                </h4>
                <p className="text-white/50 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-white/60 hover:text-[#ff0033] transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-white/60 hover:text-[#ff0033] transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
