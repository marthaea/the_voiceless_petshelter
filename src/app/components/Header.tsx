'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'See All Campaigns', href: '/campaigns' },
    { name: 'Star Contributors', href: '/contributors' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="w-full bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/1668787291/2146950390.png"
              alt="The Voiceless Rescue Shelter Logo"
              width={101}
              height={68}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-shelter-gray-dark hover:text-shelter-brown transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/1668787291/2146950390.png"
              alt="The Voiceless Rescue Shelter Logo"
              width={101}
              height={68}
              className="h-10 w-auto"
            />
          </Link>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-shelter-gray-dark" />
            ) : (
              <Menu className="h-6 w-6 text-shelter-gray-dark" />
            )}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-shelter-gray-dark hover:text-shelter-brown transition-colors duration-200 font-medium py-2 border-b border-gray-100 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
