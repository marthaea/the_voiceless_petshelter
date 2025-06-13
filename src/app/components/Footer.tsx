import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-shelter-gray-dark text-white">
      {/* Donation Call-to-Action */}
      <section className="py-16 md:py-20 bg-shelter-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wir brauchen Ihre Hilfe!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Ein Dollar/Euro oder mehr kann einen großen Unterschied für das Wohlergehen dieser stimmlosen Tiere ausmachen. Hören Sie auf Ihr Herz und retten ein Leben oder ermöglichen eine Mahlzeit für die bedürftigen Tiere
          </p>

          {/* PayPal Donation Button */}
          <div className="flex justify-center">
            <Image
              src="https://ext.same-assets.com/1668787291/780025665.gif"
              alt="PayPal Donation Button"
              width={147}
              height={47}
              className="cursor-pointer hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Subscribe & Social</h3>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email *"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-shelter-brown"
                />
                <Button className="bg-shelter-brown hover:bg-shelter-brown/90 w-full">
                  Subscribe
                </Button>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://facebook.com"
                  className="w-10 h-10 bg-white/10 hover:bg-shelter-brown rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/TVRescueShelter"
                  className="w-10 h-10 bg-white/10 hover:bg-shelter-brown rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCa9rIc0ZTQMrEHF2t2u8tHQ"
                  className="w-10 h-10 bg-white/10 hover:bg-shelter-brown rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://tumblr.com"
                  className="w-10 h-10 bg-white/10 hover:bg-shelter-brown rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Tumblr"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    Donate
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    Press Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    Visiting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    Volunteering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-white/20 mb-8" />

          {/* Support Message & Copyright */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">PLEASE SUPPORT US</h3>
            <div className="flex flex-col md:flex-row justify-between items-center text-white/60">
              <p>Copyright © 2025 THE VOICELESS RESCUE SHELTER</p>
              <p className="mt-2 md:mt-0">Designed by THE VOICELESS RESCUE SHELTER</p>
            </div>

            {/* Footer Logo */}
            <div className="flex justify-center mt-6">
              <Image
                src="https://ext.same-assets.com/1668787291/2449756518.svg"
                alt="Footer logo"
                width={40}
                height={40}
                className="opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
