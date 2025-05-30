'use client'

import { useEffect, useRef, useState } from 'react'
import Preloader from './components/Preloader'
import HomePage from './home/page'
import AboutPage from './about/page'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  // This is no longer used, but if you plan to reuse it later, you can leave it
  // const scrollToAbout = () => {
  //   aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  // }

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="overflow-x-hidden">
      {/* === Homepage === */}
      <HomePage />

      {/* === About Section (Parallax) === */}
      <div ref={aboutRef}>
        <AboutPage />
      </div>
    </div>
  )
}
