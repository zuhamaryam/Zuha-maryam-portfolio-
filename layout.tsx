import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: 'Zuha Maryam | AI/ML Engineer & Full Stack Developer',
  description: 'Premium portfolio of Zuha Maryam - AI/ML Engineer & Full Stack Developer specializing in intelligent systems, machine learning, and modern web technologies.',
  keywords: ['AI Engineer', 'ML Engineer', 'Full Stack Developer', 'Machine Learning', 'Deep Learning', 'Portfolio'],
  authors: [{ name: 'Zuha Maryam' }],
  openGraph: {
    title: 'Zuha Maryam | AI/ML Engineer',
    description: 'Building Intelligent Systems - AI/ML Engineer & Full Stack Developer',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#050505]">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#050505] text-white overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
