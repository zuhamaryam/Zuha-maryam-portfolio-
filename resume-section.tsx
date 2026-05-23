"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Download, Eye, FileText, X } from "lucide-react"

const RESUME_URL = "https://blobs.vusercontent.net/blob/DOC-20260521-WA0014..pdf_20260523_135612_0000-zI8YgsApjgPU9IatJ211lr8D39GpjZ.pdf"
const CV_URL = "https://blobs.vusercontent.net/blob/Zuha_Maryam_Cv_v2-pWKR04RIAjt3ClCIpVmjbo1el7nq0z.pdf"

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showPdfModal, setShowPdfModal] = useState<"resume" | "cv" | null>(null)

  const getPdfUrl = () => {
    return showPdfModal === "resume" ? RESUME_URL : CV_URL
  }

  return (
    <section id="resume" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0033]/50 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff0033]/10 blur-[150px]"
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
            Documents
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Resume &</span>{" "}
            <span className="text-[#ff0033]">CV</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Download my professional documents or view them directly in your browser.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="relative p-8 rounded-2xl bg-[#111111]/80 backdrop-blur-xl border border-white/5 hover:border-[#ff0033]/30 transition-all duration-500">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#ff0033]/0 group-hover:bg-[#ff0033]/5 transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#ff0033]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-[#ff0033]" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  Resume
                </h3>
                <p className="text-white/50 mb-8">
                  One-page summary highlighting key skills, experience, and achievements.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowPdfModal("resume")}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#ff0033] text-white font-medium hover:shadow-[0_0_30px_rgba(255,0,51,0.5)] transition-all duration-300"
                  >
                    <Eye size={18} />
                    View Resume
                  </motion.button>
                  <motion.a
                    href={RESUME_URL}
                    download="Zuha_Maryam_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-white/20 text-white font-medium hover:border-[#ff0033]/50 hover:bg-[#ff0033]/10 transition-all duration-300"
                  >
                    <Download size={18} />
                    Download
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CV Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative"
          >
            <div className="relative p-8 rounded-2xl bg-[#111111]/80 backdrop-blur-xl border border-white/5 hover:border-[#ff0033]/30 transition-all duration-500">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-[#ff0033]/0 group-hover:bg-[#ff0033]/5 transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#ff0033]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-[#ff0033]" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  Curriculum Vitae
                </h3>
                <p className="text-white/50 mb-8">
                  Comprehensive document with detailed academic and professional history.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowPdfModal("cv")}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#ff0033] text-white font-medium hover:shadow-[0_0_30px_rgba(255,0,51,0.5)] transition-all duration-300"
                  >
                    <Eye size={18} />
                    View CV
                  </motion.button>
                  <motion.a
                    href={CV_URL}
                    download="Zuha_Maryam_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-white/20 text-white font-medium hover:border-[#ff0033]/50 hover:bg-[#ff0033]/10 transition-all duration-300"
                  >
                    <Download size={18} />
                    Download
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PDF Modal */}
      {showPdfModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowPdfModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/95 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[85vh] bg-[#111111] rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white">
                {showPdfModal === "resume" ? "Resume" : "Curriculum Vitae"} - Zuha Maryam
              </h3>
              <div className="flex items-center gap-3">
                <motion.a
                  href={getPdfUrl()}
                  download={showPdfModal === "resume" ? "Zuha_Maryam_Resume.pdf" : "Zuha_Maryam_CV.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff0033] text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(255,0,51,0.5)] transition-all"
                >
                  <Download size={16} />
                  Download
                </motion.a>
                <button
                  onClick={() => setShowPdfModal(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF Iframe Preview */}
            <div className="h-[calc(100%-60px)] bg-white">
              <iframe
                src={`${getPdfUrl()}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-full"
                title={showPdfModal === "resume" ? "Resume" : "CV"}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
