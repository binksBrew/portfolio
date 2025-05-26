'use client'

import { useState, useEffect } from 'react'
import AboutPage from '../about/page'
import { useRouter } from 'next/navigation'

interface HomePageProps {
  onScrollMoreClick: () => void;
}

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showAbout, setShowAbout] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMouse)
    return () => window.removeEventListener('mousemove', updateMouse)
  }, [])

  const handleScrollMore = () => {
    setShowAbout(true)
    router.push('/about') // updates the URL
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* === Home Page Layer === */}
      <main
        className={`fixed top-0 left-0 w-full h-screen z-10 text-white bg-gradient-to-br from-[#3B5F50] via-[#2F4B3E] to-[#1B3028] transition-transform duration-1000 ease-in-out ${
          showAbout ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Background Blurs */}
        <div className="absolute w-[1000px] h-[1000px] bg-[#08503E] blur-[800px] rounded-full left-[-500px] bottom-[-400px] z-0 opacity-[0.7]" />
        <div className="absolute w-[1000px] h-[1000px] bg-[#324A3C] blur-[800px] rounded-full left-[-400px] top-[-350px] z-0 opacity-[0.95]" />
        <div className="absolute w-[1000px] h-[1000px] bg-[#091F17] blur-[800px] rounded-full right-[-450px] bottom-[-300px] z-0 opacity-[0.95]" />
        <div className="absolute w-[1000px] h-[1000px] bg-[#307039] blur-[800px] rounded-full right-[-500px] top-[-400px] z-0 opacity-[0.65]" />
        <div className="absolute w-[900px] h-[900px] bg-[#f7ede3] blur-[700px] rounded-full left-[420px] top-[100px] z-0 opacity-[0.35]" />

        {/* ISHA Text */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          style={{
            WebkitMaskImage: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, white, transparent 80%)`,
            maskImage: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, white, transparent 80%)`,
          }}
        >
          <h1
            className="text-[350px] font-black font-inter uppercase tracking-tight text-transparent 
              bg-clip-text bg-gradient-to-br from-[#CDE5D0] via-[#A5C3B3] to-[#7FAF9A]
              drop-shadow-[0_0_8px_rgba(205,229,208,0.15)] 
              hover:drop-shadow-[0_0_16px_rgba(205,229,208,0.25)]
              transition-all duration-900 ease-in-out delay-300"
          >
            ISHA
          </h1>
        </div>

        {/* Scroll More Button */}
        <div
          className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 z-20 cursor-pointer group"
          onClick={handleScrollMore}
        >
          <div
            className="w-[38px] h-[45px] px-[19px] py-[12px] flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
            style={{
              borderImageSource: 'linear-gradient(360deg, #CFDBC3 0%, #465D4A 100%)',
              borderImageSlice: 1,
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              className="transform -rotate-90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5l8 7-8 7" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <p className="text-white font-ibm text-[12px]">Begin the journey</p>
        </div>

        {/* Bottom Right Text */}
        <div className="absolute bottom-[80px] right-[32px] max-w-[441px] text-[#778476] font-ibm text-[20px] leading-[1.4] z-20">
          I break systems to make them stronger—digitally and beyond. <br />
          With every exploit uncovered and every trail discovered, <br />
          I chase depth, clarity, and impact.
        </div>
      </main>

      {/* === About Section === */}
      <div className="relative top-0 z-0">
        {showAbout && <AboutPage />}
      </div>
    </div>
  )
}
