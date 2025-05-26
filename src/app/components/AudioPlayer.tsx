
// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// export default function AudioPlayer() {
//   const [isPlaying, setIsPlaying] = useState(true)
//   const [hasInteracted, setHasInteracted] = useState(false)
//   const audioRef = useRef<HTMLAudioElement | null>(null)

//   // Auto-play after first user interaction
//   useEffect(() => {
//   const handleUserInteraction = () => {
//     if (!hasInteracted && audioRef.current) {
//       audioRef.current
//         .play()
//         .then(() => setIsPlaying(true))
//         .catch((e) => console.warn('Autoplay failed after interaction:', e))
//       setHasInteracted(true)
//     }
//   }

//   window.addEventListener('click', handleUserInteraction, { once: true })

//   return () => {
//     window.removeEventListener('click', handleUserInteraction) // ✅ FIXED
//   }
// }, [hasInteracted])


//   const togglePlay = () => {
//     const audio = audioRef.current
//     if (!audio) return

//     if (isPlaying) {
//       audio.pause()
//     } else {
//       audio
//         .play()
//         .then(() => setIsPlaying(true))
//         .catch((e) => console.warn('Manual play failed:', e))
//     }

//     setIsPlaying(!isPlaying)
//   }

//   return (
//     <>
//       <audio ref={audioRef} src="/audio.mp3" loop />
//       <div
//         className="fixed bottom-[32px] left-[32px] z-50 bg-transparent backdrop-blur-md p-1 rounded cursor-pointer"
//         onClick={togglePlay}
//       >
//         <Image
//           src={isPlaying ? '/resume.svg' : '/pause.svg'}
//           alt="Toggle Audio"
//           width={60}
//           height={60}
//           className="transition-all duration-500"
//         />
//       </div>
//     </>
//   )
// }












'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false) // default false until play succeeds
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const tryPlay = () => {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Autoplay blocked. Waiting for user interaction.', err)
        })
    }

    // Try playing on mount (will fail silently if not allowed)
    tryPlay()

    // Fallback: wait for first user interaction
    const handleClick = () => {
      tryPlay()
      window.removeEventListener('click', handleClick)
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.warn('Manual play failed:', e))
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio.mp3" loop />
      <div
        className="fixed bottom-[32px] left-[32px] z-50 p-1 cursor-pointer rounded bg-transparent"
        onClick={togglePlay}
      >
        <Image
          src={isPlaying ? '/resume.svg' : '/pause.svg'}
          alt="Toggle Audio"
          width={48}
          height={48}
          className="transition-all duration-300"
        />
      </div>
    </>
  )
}
