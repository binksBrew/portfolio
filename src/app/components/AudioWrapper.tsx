// app/components/AudioWrapper.tsx
'use client'

import { usePathname } from 'next/navigation'
import AudioPlayer from './AudioPlayer'
import { ReactNode } from 'react'

export default function AudioWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const showAudio = pathname !== '/'

  return (
    <>
      {showAudio && <AudioPlayer />}
      {children}
    </>
  )
}
