'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="relative w-full h-screen text-white overflow-hidden font-inter">
      {/* === Blended Background Image === */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cover.jpg"
          alt="Cover"
          fill
          className="object-cover mix-blend-luminosity"
          style={{
            filter: 'brightness(1) contrast(1.1) grayscale(0.7)',
          }}
        />
        <div className="absolute inset-0" style={{
          background:
            'radial-gradient(25.07% 25.07% at 50% 34.31%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 80.67%)'
        }} />
      </div>

      {/* === Quote Text === */}
      <h1 className="absolute top-[185px] left-[48px] text-[48px] italic font-playfair leading-[1] text-[#E4F2F5] z-20">
        Travelling is
        <br />
        the key.
        <br />
        So is Curiosity.
      </h1>

      {/* === Bio Paragraph Bottom Left ===
      <div className="absolute bottom-[118px] left-[48px] w-[441px] text-[20px] font-ibm leading-[1] text-white z-20">
        I’m a penetration tester and bug bounty hunter.
        <br />
        I uncover hidden flaws, simulate real-world attacks,
        <br />
        and help make systems safer, one exploit at a time.
        <br />
        Whether navigating attack surfaces or new terrains,
        <br />
        applications.
      </div> */}
      {/* === Bio Paragraph Bottom Left === */}
<div className="absolute bottom-[118px] left-[48px] w-[441px] font-ibm font-normal text-[20px] leading-[1.25] tracking-normal text-white whitespace-pre-line z-20">
  {`I’m a penetration tester and bug bounty hunter.
I uncover hidden flaws, simulate real-world attacks, and help make systems safer, one exploit at a time.
Whether navigating attack surfaces or new terrains, applications.`}
</div>


      {/* === Social Buttons & Credit === */}
      <div className="absolute bottom-[40px] right-[48px] flex flex-col items-end z-20">
        <div className="flex gap-[24px]">
          <a
            href="https://www.linkedin.com/in/isha-sangpal-133593225"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[87px] h-[39px] bg-[#CFDBC3] text-[#294225] text-[16px] font-medium font-inter px-[10px] flex items-center justify-center hover:scale-105 transition"
          >
            LINKEDIN
          </a>
          <a
            href="https://discord.com/users/isha__0_7_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[87px] h-[39px] bg-[#CFDBC3] text-[#294225] text-[16px] font-medium font-inter px-[10px] flex items-center justify-center hover:scale-105 transition"
          >
            DISCORD
          </a>
          <a
            href="mailto:sangpalisha@gmail.com"
            className="w-[116px] h-[39px] bg-[#CFDBC3] text-[#294225] text-[14px] font-medium font-inter px-[10px] flex items-center justify-center hover:scale-105 transition"
          >
            CONTACT US
          </a>
        </div>
        <p className="text-[12px] font-light tracking-tight text-[#CFDBC3] mt-1 font-inter">
          DESIGN | Gaurav Mali
        </p>
      </div>
    </section>
  )
}