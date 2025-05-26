// 'use client'
// import { useEffect, useRef } from 'react'
// import { useRouter } from 'next/navigation'
// import { gsap } from 'gsap'

// export default function Preloader() {
//   const barRef = useRef()
//   const router = useRouter()

//   useEffect(() => {
//     const barTween = gsap.fromTo(
//       barRef.current,
//       { width: '0%' },
//       {
//         width: '100%',
//         duration: 3.2,
//         ease: 'power2.inOut',
//       }
//     )

//     const timeout = setTimeout(() => {
//       router.push('/home') // Replace with actual route
//     }, 3400)

//     return () => {
//       barTween.kill()
//       clearTimeout(timeout)
//     }
//   }, [])

//   return (
//     <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#1c2f27]">
//       {/* === Accurate Ellipse Layers === */}
//       <div className="absolute w-[1100px] h-[1100px] bg-[#08503E] blur-[800px] rounded-full left-[-500px] bottom-[-300px] z-0"></div>
//       <div className="absolute w-[1100px] h-[1100px] bg-[#52816D] blur-[800px] rounded-full left-[-600px] top-[-400px] z-0"></div>
//       <div className="absolute w-[1100px] h-[1100px] bg-[#091F17] blur-[800px] rounded-full right-[-500px] bottom-[-300px] z-0"></div>
//       <div className="absolute w-[1100px] h-[1100px] bg-[#307039] blur-[800px] rounded-full right-[-600px] top-[-400px] z-0"></div>
//       <div className="absolute w-[1200px] h-[1200px] bg-[#F7EDE3] blur-[800px] rounded-full top-[200px] left-[400px] z-0 opacity-[0.3]"></div>

//       {/* === Loader UI === */}
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
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'

export default function Preloader() {
  const barRef = useRef()
  const router = useRouter()

  useEffect(() => {
    const barTween = gsap.fromTo(
      barRef.current,
      { width: '0%' },
      {
        width: '100%',
        duration: 3.2,
        ease: 'power2.inOut',
      }
    )

    const timeout = setTimeout(() => {
      router.push('/home') // ✅ Replace with real route
    }, 3400)

    return () => {
      barTween.kill()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#37493C]">
      {/* === Radial Layers === */}
      <div className="absolute w-[1000px] h-[1000px] bg-[#08503E] blur-[800px] rounded-full left-[-500px] bottom-[-400px] z-0 opacity-[0.7]"></div>
      <div className="absolute w-[1000px] h-[1000px] bg-[#52816D] blur-[800px] rounded-full left-[-400px] top-[-350px] z-0 opacity-[0.7]"></div>
      <div className="absolute w-[1000px] h-[1000px] bg-[#091F17] blur-[800px] rounded-full right-[-450px] bottom-[-300px] z-0 opacity-[0.65]"></div>
      <div className="absolute w-[1000px] h-[1000px] bg-[#307039] blur-[800px] rounded-full right-[-500px] top-[-400px] z-0 opacity-[0.65]"></div>

      {/* Center highlight - softer, warmer tone, slightly off-center */}
      <div className="absolute w-[900px] h-[900px] bg-[#f7ede3] blur-[700px] rounded-full left-[320px] top-[220px] z-0 opacity-[0.25]"></div>

      {/* === Text + Loader === */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-white font-inter font-black text-[18px] uppercase tracking-wide">
          ISHA <span className="font-normal italic">Gaaru</span>
        </p>
        <p className="text-white font-ibm text-[18px] uppercase mt-1">Process in queue</p>

        <div className="w-[250px] h-[8px] bg-[#D9D9D9] mt-2 overflow-hidden rounded-full">
          <div ref={barRef} className="h-full bg-[#9DFFB3] w-[0%]"></div>
        </div>
      </div>
    </div>
  )
}
