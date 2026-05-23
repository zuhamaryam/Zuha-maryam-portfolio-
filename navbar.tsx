"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#hero" className="relative group">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold tracking-tight"
              >
                <span className="text-white">ZM</span>
                <span className="text-[#ff0033]">.</span>
              </motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff0033] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group"
                >
                  <span
                    className={`text-sm tracking-wide transition-colors duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[#ff0033]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#ff0033] transition-all duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 text-white hover:text-[#ff0033] transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-[#0a0a0a] border-l border-white/10"
            >
              <div className="flex flex-col pt-24 px-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-2xl font-light tracking-wide border-b border-white/5 transition-colors ${
                        activeSection === link.href.replace("#", "")
                          ? "text-[#ff0033]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-10 left-8 right-8">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ff0033] to-transparent" />
                <p className="text-center text-white/30 text-xs mt-4 tracking-widest uppercase">
                  Zuha Maryam
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress */}
      <ScrollProgress />
    </>
  )
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      setProgress((scrollPosition / totalHeight) * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[60]"
      initial={{ scaleX: 0 }}
      style={{ transformOrigin: "0%" }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#ff0033] to-[#ff3366]"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 10px rgba(255, 0, 51, 0.8)",
        }}
      />
    </motion.div>
  )
}
