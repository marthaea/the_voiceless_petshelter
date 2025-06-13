import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ext.same-assets.com/1668787291/3283251561.jpeg"
          alt="Rescue shelter background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Die Stimmlosen empfinden genau wie wir Menschen Schmerz und zeigen Emotionen.
          </h1>

          <h2 className="text-lg md:text-xl lg:text-2xl mb-8 font-light opacity-90 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam einen sicheren Hafen für die Stimmlosen schaffen. Bitte beteiligen Sie sich an unserer Mission zur Rettung von Haustieren und helfen Sie uns, eine bessere Zukunft für unsere geretteten Tiere zu schaffen.
          </h2>

          <Link href="/campaigns">
            <Button
              size="lg"
              className="bg-shelter-brown hover:bg-shelter-brown/90 text-white px-8 py-6 text-lg font-medium rounded-md transition-all duration-200 transform hover:scale-105"
            >
              See All Campaigns
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
