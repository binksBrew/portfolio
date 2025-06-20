'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const blogs = {
  cybersecurity: [
    {
      title: 'CSRF in Profile Update Endpoint- H1',
      description:
        'The https://target.com website is vulnerable to a CSRF attack that allows an attacker to modify a victim profile information.',
      image: '/cyberblog.jpg',
      href: 'https://medium.com/@sangpalisha/csrf-in-profile-update-endpoint-ddaf0295c217',
    },
    {
      title: 'Cross-Site Request Forgery',
      description:
        'We will see how CSRF can be found, exploited, bypassed and the methodology for it in this article.',
      image: '/cyberblog.jpg',
      href: 'https://medium.com/@sangpalisha/cross-site-request-forgery-820e0b2f20d6',
    },
    {
      title: 'One Click Account takeover- H1',
      description:
        'Another CSRF bounty — by removing the CSRF token and current password from the request, an attacker could change any user’s password without their knowledge. This led to a full account takeover with just one click.',
      image: '/cyberblog.jpg',
      href: 'https://medium.com/@sangpalisha/one-click-account-takeover-38db9005533c',
    },
    {
      title: 'Over The Wire — bandit level 0–10',
      description:
        'Here’s how I solved levels 0 to 10, with simple explanations anyone can follow.',
      image: '/cyberblog.jpg',
      href: 'https://medium.com/@sangpalisha/over-the-wire-bandit-level-0-10-f86bc733cf9d',
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
