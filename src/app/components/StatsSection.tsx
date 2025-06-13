'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface StatItem {
  icon: string
  value: number
  suffix: string
  label: string
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0])

  const stats: StatItem[] = [
    {
      icon: 'https://ext.same-assets.com/1668787291/669412612.svg',
      value: 220,
      suffix: '+',
      label: 'Dogs Saved'
    },
    {
      icon: 'https://ext.same-assets.com/1668787291/2474510520.svg',
      value: 14,
      suffix: '+',
      label: 'Cats saved'
    },
    {
      icon: 'https://ext.same-assets.com/1668787291/934592503.svg',
      value: 194,
      suffix: '+',
      label: 'Number Donors'
    },
    {
      icon: 'https://ext.same-assets.com/1668787291/191807998.svg',
      value: 100,
      suffix: 'k+',
      label: 'Funds Raised'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          setAnimatedValues(prev => {
            const newValues = [...prev]
            newValues[index] = Math.floor(start)
            return newValues
          })
        }, 16)
      })
    }
  }, [isVisible])

  return (
    <section id="stats-section" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Image
                    src={stat.icon}
                    alt={`${stat.label} icon`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain filter"
                    style={{ filter: 'hue-rotate(15deg) saturate(1.2)' }}
                  />
                </div>
              </div>

              <div className="mb-2">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-shelter-brown">
                  {stat.label === 'Funds Raised' ? '$' : ''}
                  {animatedValues[index]}
                  {stat.suffix}
                </span>
              </div>

              <h3 className="text-sm md:text-base font-medium text-shelter-gray-dark uppercase tracking-wide">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-shelter-brown text-lg font-medium mb-4">
            Erfahren Sie mehr über...
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-shelter-gray-dark mb-8">
            Was wir erreicht haben
          </h2>
          <p className="text-shelter-gray-dark text-lg leading-relaxed">
            In nur fünf Betriebsjahren dieses Tierheims konnten wir dank einer Reihe großzügiger, gutherziger Spender, die das Tierheim großzügig mit ihren Mitteln unterstützen, über 220 Hunde und 15 Katzen retten.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            className="w-10 h-10 bg-shelter-brown hover:bg-shelter-brown/80 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com/TVRescueShelter"
            className="w-10 h-10 bg-shelter-brown hover:bg-shelter-brown/80 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCa9rIc0ZTQMrEHF2t2u8tHQ"
            className="w-10 h-10 bg-shelter-brown hover:bg-shelter-brown/80 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href="https://tumblr.com"
            className="w-10 h-10 bg-shelter-brown hover:bg-shelter-brown/80 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Tumblr"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
