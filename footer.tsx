"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/zuhamaryam", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/zuhamaryam", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/zuhamaryam", label: "Instagram" },
  { icon: Mail, href: "mailto:zuhamaryam67@gmail.com", label: "Email" },
]

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0033]/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#ff0033]/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#hero" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">ZUHA</span>
                <span className="text-[#ff0033]"> MARYAM</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              AI/ML Engineer & Full Stack Developer passionate about building intelligent systems and futuristic digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-[#ff0033] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-[#111111] border border-white/5 flex items-center justify-center text-white/40 hover:text-[#ff0033] hover:border-[#ff0033]/30 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Zuha Maryam. All rights reserved.
          </p>
          
          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 flex items-center gap-2 text-white/40 hover:text-[#ff0033] transition-colors text-sm"
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
