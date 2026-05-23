"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Github, Linkedin, Instagram, Send, MapPin, ArrowUpRight } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/zuhamaryam",
    color: "#ffffff",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/zuhamaryam",
    color: "#0077b5",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/zuhamaryam",
    color: "#e4405f",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:zuhamaryam67@gmail.com",
    color: "#ff0033",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff0033]/50 to-transparent" />
        <motion.div
          animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff0033]/10 blur-[150px]"
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Let&apos;s Work</span>{" "}
            <span className="text-[#ff0033]">Together</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-white/50 leading-relaxed">
                Feel free to reach out through any of these channels. 
                I typically respond within 24 hours.
              </p>
            </div>

            {/* Email */}
            <motion.a
              href="mailto:zuhamaryam67@gmail.com"
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#ff0033]/10 flex items-center justify-center group-hover:bg-[#ff0033]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#ff0033]" />
              </div>
              <div>
                <p className="text-white/40 text-sm">Email</p>
                <p className="text-white group-hover:text-[#ff0033] transition-colors">
                  zuhamaryam67@gmail.com
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-[#ff0033] ml-auto transition-colors" />
            </motion.a>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#ff0033]" />
              </div>
              <div>
                <p className="text-white/40 text-sm">Location</p>
                <p className="text-white">Hyderabad, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-white/40 text-sm mb-4 uppercase tracking-wider">
                Connect With Me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-[#111111] border border-white/5 flex items-center justify-center text-white/60 hover:text-[#ff0033] hover:border-[#ff0033]/30 transition-all duration-300"
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-[#111111] border border-white/5 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#ff0033]/50 transition-all duration-300 peer"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-6 top-4 text-white/40 transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#ff0033] peer-focus:bg-[#050505] peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#050505] peer-[:not(:placeholder-shown)]:px-2"
                >
                  Your Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-[#111111] border border-white/5 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#ff0033]/50 transition-all duration-300 peer"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-6 top-4 text-white/40 transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#ff0033] peer-focus:bg-[#050505] peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#050505] peer-[:not(:placeholder-shown)]:px-2"
                >
                  Your Email
                </label>
              </div>

              {/* Message Input */}
              <div className="relative group">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-6 py-4 bg-[#111111] border border-white/5 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#ff0033]/50 transition-all duration-300 peer resize-none"
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-6 top-4 text-white/40 transition-all duration-300 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#ff0033] peer-focus:bg-[#050505] peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#050505] peer-[:not(:placeholder-shown)]:px-2"
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-[#ff0033] text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(255,0,51,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : submitted ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
