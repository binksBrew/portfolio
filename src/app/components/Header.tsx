'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '../utils/cn' // optional: utility to combine classes

const navItems = [
  { label: 'ABOUT', href: '/about' },
  { label: 'EXPERIENCE', href: '/experience' },
  // { label: 'BLOG', href: '/blog' },
  { label: 'BLOG', href: 'https://medium.com/@sangpalisha' },

]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-12 py-8 flex justify-between items-center text-white">
      {/* Logo */}
      {/* Logo with Home Link */}
<Link href="/home" className="-mt-5 font-inter font-black text-[18px] uppercase tracking-wide">
  ISHA <span className="font-normal italic">Gaaru</span>
</Link>

      {/* Menu */}
      <nav className="flex flex-col gap-1 text-[14px] font-inter text-black items-end">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'w-[100px] h-[29px] px-[2px] py-[4px] flex items-center gap-2 transition-all duration-150',
                isActive ? 'bg-[#E4F2F5] text-black' : 'text-[#162b22]'
              )}
            >
              {isActive && (
                <div
                  className="w-[4.7px] h-[6.5px] rotate-[-47.04deg] border-l border-b border-[#25462B]"
                  style={{
                    transform: 'rotate(-47.04deg)',
                  }}
                />
              )}
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
