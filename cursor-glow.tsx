"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      >
        <div
          className={`w-[400px] h-[400px] rounded-full transition-all duration-300 ${
            isHovering
              ? "bg-[#ff0033]/10 blur-[80px]"
              : "bg-[#ff0033]/5 blur-[100px]"
          }`}
        />
      </motion.div>

      {/* Small cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            isHovering ? "bg-[#ff0033]" : "bg-white/50"
          }`}
          style={{
            boxShadow: isHovering
              ? "0 0 20px rgba(255, 0, 51, 0.8)"
              : "0 0 10px rgba(255, 255, 255, 0.3)",
          }}
        />
      </motion.div>
    </>
  )
}
