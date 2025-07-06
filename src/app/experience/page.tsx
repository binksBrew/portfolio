'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import * as THREE from 'three'

// Lazy load model
const TreeModel = dynamic(() => import('./TreeModel'), { ssr: false })

const skillsData = [
  {
    id: 1,
    title: '01',
    description:
      'Started with full stack dev—React, Django, PostgreSQL. Built end-to-end systems, wrote APIs, and got comfortable shipping fast.',
  },
  {
    id: 2,
    title: '02',
    description:
      'Proficient in reconnaissance tools like Subfinder, Amass, and Assetfinder for deep asset discovery and mapping.',
  },
  {
    id: 3,
    title: '03',
    description:
      'Experienced in network scanning and analysis with tools like Nmap and Wireshark, uncovering hidden attack surfaces.',
  },
  {
    id: 4,
    title: '04',
    description:
      'Took on web security hands-on — using Burp Suite to manually test for OWASP Top 10 flaws and break authentication logic in labs and real-world apps.',
  },
  {
    id: 5,
    title: '05',
    description:
      'Skilled in secure web application testing using Burp Suite, OWASP Top 10, and custom testing workflows.',
  },
  {
    id: 6,
    title: '06',
    description:
      'Active bug bounty hunter with real-world disclosures. Passionate about threat modeling, reporting, and responsible disclosure.',
  },
]

function ScrollDrivenTree() {
  const ref = useRef<THREE.Group>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => setScrollY(window.scrollY)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useFrame(() => {
    if (typeof window !== 'undefined' && ref.current) {
      const maxScroll = window.innerHeight * 2
      const scrollProgress = Math.min(scrollY / maxScroll, 1)
      ref.current.position.y = -2.1 + scrollProgress * 3.4
      ref.current.position.x = 0 - scrollProgress * 1.8
    }
  })

  return (
    <group ref={ref} scale={[1.9, 1.9, 2]} rotation={[0, 2, 0]}>
      <TreeModel />
    </group>
  )
}

export default function ExperiencePage() {
  const [scrollY, setScrollY] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => setScrollY(window.scrollY)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const maxFadeScroll = typeof window !== 'undefined' ? window.innerHeight * 0.6 : 1
  const fadeOutOpacity = Math.max(0, 1 - scrollY / maxFadeScroll)

  return (
    <div className="relative w-full bg-black">
      {/* === Background Gradient Layers === */}
      <div className="fixed w-full h-screen top-0 left-0 z-0">
        {/* <div className="absolute w-[1000px] h-[1000px] bg-[#08503E] blur-[800px] rounded-full left-[-500px] bottom-[-400px] opacity-[0.95]" />
        <div className="absolute w-[1000px] h-[1000px] bg-[#52816D] blur-[800px] rounded-full left-[-400px] top-[-350px] opacity-[0.6]" />
        <div className="absolute w-[1000px] h-[1000px] bg-[#091F17] blur-[800px] rounded-full right-[-450px] bottom-[-300px] opacity-[0.65]" />
        <div className="absolute w-[1000px] h-[1000px] bg-[#307039] blur-[800px] rounded-full right-[-500px] top-[-400px] opacity-[1]" />
        <div className="absolute w-[900px] h-[900px] bg-[#f7ede3] blur-[700px] rounded-full left-[320px] top-[220px] opacity-[0.75]" /> */}
        <div className="absolute w-[1500px] h-[1000px] bg-[#08503E] blur-[800px] rounded-full left-[-500px] bottom-[-400px] opacity-[0.9]" />
        <div className="absolute w-[1600px] h-[1000px] bg-[#52816d] blur-[800px] rounded-full left-[-400px] top-[-350px] opacity-[0]" />
        <div className="absolute w-[1500px] h-[1000px] bg-[#091F17] blur-[800px] rounded-full right-[-450px] bottom-[-300px] opacity-[0.75]" />
        <div className="absolute w-[1100px] h-[900px] bg-[#307039] blur-[800px] rounded-full right-[-500px] top-[-400px] opacity-[0.65]" />
        <div className="absolute w-[800px] h-[900px] bg-[#f7ede3] blur-[700px] rounded-full left-[420px] top-[100px] opacity-[0.3]" />
      </div>

      {/* === Top Text Blocks === */}
      <div className="fixed top-[20%] left-[50px] z-20" style={{ opacity: fadeOutOpacity }}>
        <p className="text-[48px] font-playfair italic text-[#E4F2F5] leading-[100%] w-[324px] h-[128px]">
          Experience says<br />everything.
        </p>
      </div>

      <div className="fixed top-[45%] right-[50px] z-20 w-[383px] text-[#FFFFFF] font-ibm text-[20px] leading-[100%]" style={{ opacity: fadeOutOpacity }}>
        I explore security through code and curiosity,<br />
        a bug bounty hunter & penetration tester <br />
        crafting exploits, finding flaws, and learning fast.<br />
      </div>

      {/* === 3D Canvas === */}
      <div className="fixed w-full h-screen z-10">
        <Canvas camera={{ position: [0, 1.4, 4], fov: 30 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} />
          <Suspense fallback={null}>
            <ScrollDrivenTree />
            <Environment preset="sunset" />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* === Scroll Space to push Root Skills into view === */}
      <div className="h-[300vh]" />

      {/* === Root Skills Section === */}
      <div className="relative w-full h-screen flex justify-end items-center pr-[80px]">
        <div className="max-w-[620px] w-full text-right">
          <h2 className="font-playfair italic text-[24px] text-[#0A2C20] mb-8">
            Root Skills
          </h2>
          <div className="grid grid-cols-2 gap-[20px]">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className={`p-[18.43px] w-[294px] h-[186px] transition duration-200 ease-in-out cursor-pointer ${
                  hovered === skill.id
                    ? 'bg-white text-black shadow-xl'
                    : 'bg-[rgba(255,255,255,0.12)] text-white'
                }`}
                onMouseEnter={() => setHovered(skill.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <p className="text-[36.86px] font-playfair italic leading-[100%] mb-2">
                  {skill.title}
                </p>
                <p className="text-[15px] font-ibm leading-snug">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}