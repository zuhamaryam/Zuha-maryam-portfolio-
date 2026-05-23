"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    id: 1,
    title: "Software Engineering Job Simulation",
    issuer: "Goldman Sachs / Forage",
    date: "February 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260523-WA0027-AQQycSwYwCiVLB7liL584N14WP3gb3.jpg",
  },
  {
    id: 2,
    title: "Google Agentathon 2025",
    issuer: "GDG Hyderabad / Google for Developers",
    date: "December 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260313-WA0018-A7q9jcqipdUSKyOyXuTGg8QJBprmQN.jpg",
  },
  {
    id: 3,
    title: "SAP Emerging Technologies",
    issuer: "Edunet Foundation / SAP / Code Unnati",
    date: "2025-2026",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260523-WA0026-0XtfQw3tn1Z9HilLrU43ROujnB0S3D.jpg",
  },
  {
    id: 4,
    title: "Prompt Engineering for Everyone",
    issuer: "IBM / Cognitive Class",
    date: "March 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260523-WA0028-oeco9JaD2ROVBb2bEoUs3h69SbmLPE.jpg",
  },
  {
    id: 5,
    title: "India AI Impact Buildathon",
    issuer: "HCL GUVI / AI Impact Summit 2026",
    date: "February 2026",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260304-WA0032-sv1htgykkrGtjRqNRgfe2xcLAJfVdd.jpg",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (cert: typeof certificates[0], index: number) => {
    setSelectedCert(cert)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedCert(null)
  }

  const navigateCert = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" 
      ? (currentIndex - 1 + certificates.length) % certificates.length
      : (currentIndex + 1) % certificates.length
    setCurrentIndex(newIndex)
    setSelectedCert(certificates[newIndex])
  }

  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0033]/50 to-transparent" />
        <motion.div
          animate={{ x: [100, -100, 100] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-[#ff0033]/10 blur-[150px]"
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
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Professional</span>{" "}
            <span className="text-[#ff0033]">Certifications</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => openModal(cert, index)}
              className="group relative cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-white/5 hover:border-[#ff0033]/30 transition-all duration-500">
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/40 transition-all duration-300 flex items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-[#ff0033] px-4 py-2 rounded-lg"
                    >
                      Click to View
                    </motion.span>
                  </div>

                  {/* Neon border glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 border-2 border-[#ff0033]/50 rounded-t-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#ff0033] transition-colors line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-2 line-clamp-1">
                    {cert.issuer}
                  </p>
                  <span className="text-[#ff0033] text-xs font-medium">
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#111111] rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#050505]/80 text-white hover:text-[#ff0033] transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateCert("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#050505]/80 text-white hover:text-[#ff0033] transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigateCert("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#050505]/80 text-white hover:text-[#ff0033] transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Certificate display */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="p-6 border-t border-white/5">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-white/60 mb-1">{selectedCert.issuer}</p>
                <span className="text-[#ff0033] text-sm font-medium">{selectedCert.date}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
