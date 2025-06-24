// 'use client'
// import { useEffect, useRef } from 'react'
// import { useRouter } from 'next/navigation'
// import { gsap } from 'gsap'

// export default function Preloader() {
//   const barRef = useRef()
//   const router = useRouter()

//  useEffect(() => {
//   if (!barRef.current) return

//   const barTween = gsap.fromTo(
//     barRef.current,
//     { width: '0%' },
//     {
//       width: '100%',
//       duration: 3.2,
//       ease: 'power2.inOut',
//     }
//   )

//   const timeout = setTimeout(() => {
//     router.push('/home') // ✅ Route after preloader completes
//   }, 3400)

//   return () => {
//     barTween.kill()
//     clearTimeout(timeout)
//   }
// }, [router])


//   return (
//     <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#37493C]">
//       {/* === Radial Layers === */}
//       <div className="absolute w-[1000px] h-[1000px] bg-[#08503E] blur-[800px] rounded-full left-[-500px] bottom-[-400px] z-0 opacity-[0.7]"></div>
//       <div className="absolute w-[1000px] h-[1000px] bg-[#52816D] blur-[800px] rounded-full left-[-400px] top-[-350px] z-0 opacity-[0.7]"></div>
//       <div className="absolute w-[1000px] h-[1000px] bg-[#091F17] blur-[800px] rounded-full right-[-450px] bottom-[-300px] z-0 opacity-[0.65]"></div>
//       <div className="absolute w-[1000px] h-[1000px] bg-[#307039] blur-[800px] rounded-full right-[-500px] top-[-400px] z-0 opacity-[0.65]"></div>

//       {/* Center highlight - softer, warmer tone, slightly off-center */}
//       <div className="absolute w-[900px] h-[900px] bg-[#f7ede3] blur-[700px] rounded-full left-[320px] top-[220px] z-0 opacity-[0.25]"></div>

//       {/* === Text + Loader === */}
//       <div className="relative z-10 flex flex-col items-center text-center">
//         <p className="text-white font-inter font-black text-[18px] uppercase tracking-wide">
//           ISHA <span className="font-normal italic">Gaaru</span>
//         </p>
//         <p className="text-white font-ibm text-[18px] uppercase mt-1">Process in queue</p>

//         <div className="w-[250px] h-[8px] bg-[#D9D9D9] mt-2 overflow-hidden rounded-full">
//           <div ref={barRef} className="h-full bg-[#9DFFB3] w-[0%]"></div>
//         </div>
//       </div>
//     </div>
//   )
// }









'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { useGLTF } from '@react-three/drei'

export default function Preloader() {
  const barRef = useRef(null)
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const loadAssets = async () => {
      const loadImage = (src) =>
        new Promise((res) => {
          const img = new Image()
          img.src = src
          img.onload = () => res(true)
          img.onerror = () => res(true)
        })

      const preloadModel = () => {
        return new Promise((res) => {
          useGLTF.preload('/model.glb')
          res(true)
        })
      }

      const assets = [
        loadImage('/cover.jpg'),
        preloadModel(),
      ]

      let completed = 0
      for (const asset of assets) {
        await asset
        completed++
        const percent = (completed / assets.length) * 100
        setProgress(percent)
      }

      gsap.to(barRef.current, {
        width: '100%',
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          setTimeout(() => router.push('/home'), 400)
        },
      })
    }

    loadAssets()
  }, [router])

  useEffect(() => {
    if (barRef.current) {
      gsap.to(barRef.current, {
        width: `${progress}%`,
        duration: 0.4,
        ease: 'power2.out',
      })
    }
  }, [progress])

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#37493C]">
      <div className="absolute w-[1000px] h-[1000px] bg-[#08503E] blur-[800px] rounded-full left-[-500px] bottom-[-400px] opacity-[0.7] z-0" />
      <div className="absolute w-[1000px] h-[1000px] bg-[#52816D] blur-[800px] rounded-full left-[-400px] top-[-350px] opacity-[0.7] z-0" />
      <div className="absolute w-[1000px] h-[1000px] bg-[#091F17] blur-[800px] rounded-full right-[-450px] bottom-[-300px] opacity-[0.65] z-0" />
      <div className="absolute w-[1000px] h-[1000px] bg-[#307039] blur-[800px] rounded-full right-[-500px] top-[-400px] opacity-[0.65] z-0" />
      <div className="absolute w-[900px] h-[900px] bg-[#f7ede3] blur-[700px] rounded-full left-[320px] top-[220px] opacity-[0.25] z-0" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-white font-inter font-black text-[18px] uppercase tracking-wide">
          ISHA <span className="font-normal italic">Gaaru</span>
        </p>
        <p className="text-white font-ibm text-[18px] uppercase mt-1">Loading branches...</p>

        <div className="w-[250px] h-[8px] bg-[#D9D9D9] mt-2 overflow-hidden rounded-full">
          <div ref={barRef} className="h-full bg-[#9DFFB3] w-[0%]" />
        </div>
      </div>
    </div>
  )
}
