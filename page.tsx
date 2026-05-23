"use client"

import { useEffect, useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { CursorGlow } from "@/components/cursor-glow"
import { FloatingParticles } from "@/components/floating-particles"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen />
      
      {isLoaded && (
        <>
          <CursorGlow />
          <FloatingParticles />
          <Navbar />
          
          <main className="relative">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificationsSection />
            <AchievementsSection />
            <ResumeSection />
            <ContactSection />
          </main>
          
          <Footer />
        </>
      )}
    </>
  )
}
