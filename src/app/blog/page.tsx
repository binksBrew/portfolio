'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const blogs = {
  cybersecurity: [
    {
      title: 'Cybersecurity Blog 1',
      description:
        'I uncover hidden flaws and secure systems across digital landscapes. Cybersecurity isn’t a choice—it’s a necessity.',
      image: '/cyberblog.jpg',
      href: '/blog/cyber-1',
    },
    {
      title: 'Cybersecurity Blog 2',
      description:
        'Bug bounty adventures: From recon to exploit. Securing the web, one report at a time.',
      image: '/cyberblog.jpg',
      href: '/blog/cyber-2',
    },
    {
      title: 'Cybersecurity Blog 3',
      description:
        'How breaking things ethically helped me build stronger systems.',
      image: '/cyberblog.jpg',
      href: '/blog/cyber-3',
    },
  ],
  nature: [
    {
      title: 'Nature Blog 1',
      description:
        'Exploring the connection between nature and mindful engineering. Mountains inspire resilience.',
      image: '/natureblog.jpg',
      href: '/blog/nature-1',
    },
    {
      title: 'Nature Blog 2',
      description:
        'I reflect on how natural landscapes fuel my creativity in code and beyond.',
      image: '/natureblog.jpg',
      href: '/blog/nature-2',
    },
    {
      title: 'Nature Blog 3',
      description:
        'The harmony of nature guides my approach to system design and simplicity.',
      image: '/natureblog.jpg',
      href: '/blog/nature-3',
    },
  ],
}

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'cybersecurity' | 'nature'>('cybersecurity')

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* === Blurred Background Gradient === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[1000px] h-[1000px] bg-[#08503E] blur-[800px] rounded-full left-[-500px] bottom-[-400px] opacity-[0.7]" />
        <div className="absolute w-[1000px] h-[1000px] bg-[#52816d] blur-[800px] rounded-full left-[-400px] top-[-350px] opacity-[0.7]" />
        <div className="absolute w-[1000px] h-[1000px] bg-[#091F17] blur-[800px] rounded-full right-[-450px] bottom-[-300px] opacity-[0.65]" />
        <div className="absolute w-[1000px] h-[1000px] bg-[#307039] blur-[800px] rounded-full right-[-500px] top-[-400px] opacity-[0.65]" />
        <div className="absolute w-[900px] h-[900px] bg-[#f7ede3] blur-[700px] rounded-full left-[420px] top-[100px] opacity-[0.65]" />
      </div>

      {/* === Foreground Blog UI === */}
      <div className="relative z-10 px-12 py-28 text-white font-ibm">
        {/* Heading */}
        <h1 className="text-[48px] italic font-playfair mb-10">Blogs</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setActiveTab('cybersecurity')}
            className={`px-6 py-[10px] h-[64px] text-[16px] font-medium font-ibm tracking-tight bg-[#e4f2f5] ${
              activeTab === 'cybersecurity'
                ? 'text-[#162b22] opacity-100'
                : 'text-[#162b22] opacity-50'
            }`}
          >
            CYBERSECURITY
          </button>
          <button
            onClick={() => setActiveTab('nature')}
            className={`px-6 py-[10px] h-[64px] text-[16px] font-medium font-ibm tracking-tight bg-[#e4f2f5] ${
              activeTab === 'nature'
                ? 'text-[#162b22] opacity-100'
                : 'text-[#162b22] opacity-50'
            }`}
          >
            NATURE
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="flex flex-wrap justify-between gap-y-12">
          {blogs[activeTab].map((blog, idx) => (
            <Link
              key={`${activeTab}-${idx}`}
              href={blog.href}
              className="w-[30%] min-w-[320px] max-w-[590px] h-[450px] p-12 bg-[#E4F2F580] backdrop-blur-[24px] opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="mb-6 w-full h-[250px] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={494}
                  height={250}
                  className="w-full h-full object-cover mix-blend-luminosity"
                />
              </div>
              <div className="space-y-[11px] text-[#E4F2F5]">
                <h2 className="text-[24px] font-normal leading-[1] tracking-tighter">
                  {blog.title}
                </h2>
                <p className="text-[14px] leading-[1.2]">{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
