import './globals.css'
import { IBM_Plex_Mono } from 'next/font/google'
import { Playfair_Display, Inter } from 'next/font/google'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import LayoutWithHeader from './components/LayoutWithHeader'
import AudioWrapper from './components/AudioWrapper'

// Fonts
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibm',
})

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Isha Gaaru',
  description: 'Isha Gaaru',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${ibmPlexMono.variable} ${playfair.variable}`}
      >
        <LayoutWithHeader>
          <AudioWrapper>{children}</AudioWrapper>
        </LayoutWithHeader>
      </body>
    </html>
  )
}
