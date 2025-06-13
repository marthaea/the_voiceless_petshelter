import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function VolunteerTourSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ext.same-assets.com/1668787291/1565890999.jpeg"
          alt="Background pattern"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Tour Image */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <Image
                  src="https://ext.same-assets.com/1668787291/3346249384.jpeg"
                  alt="Volunteer tour in Uganda"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-shelter-brown font-medium text-lg">
                Reise für Freiwillige
              </p>
            </div>
          </div>

          {/* Tour Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-shelter-gray-dark mb-6">
              Begleiten Sie uns auf eine Tierschutz-Tour
            </h2>

            <p className="text-shelter-gray-dark text-lg mb-8 leading-relaxed">
              Begleiten Sie uns auf unserer nächsten Tierschutztour. Dabei konzentrieren wir uns auf die Durchführung einer Reihe von Aktivitäten, die speziell darauf abzielen, ein stärkeres Band der Brüderlichkeit zwischen unseren geschätzten Freiwilligen und Spendern zu schaffen und Gelder zu sammeln, um die stimmlosen Haustiere zu unterstützen
            </p>

            {/* Tour Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-shelter-brown mb-3">
                  Volunteering Experience
                </h4>
                <ul className="space-y-2 text-shelter-gray-dark">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3" />
                    Jungle Safari
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3" />
                    Volunteering Experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3" />
                    Charity Shows
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3" />
                    Fund Raising
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-shelter-brown mb-3">
                  Other Experiences
                </h4>
                <ul className="space-y-2 text-shelter-gray-dark">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3" />
                    Camp Fire
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3" />
                    Accomodation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3" />
                    Accomodation
                  </li>
                </ul>
              </div>
            </div>

            <Link href="#reserve">
              <Button
                size="lg"
                className="bg-shelter-brown hover:bg-shelter-brown/90 text-white px-8 py-6 text-lg font-medium rounded-md transition-all duration-200 transform hover:scale-105"
              >
                Reserve A Place
              </Button>
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-shelter-brown text-lg font-medium mb-4">
              Mehr erfahren...
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-shelter-gray-dark mb-6">
              UNSER WEG
            </h2>
            <p className="text-shelter-gray-dark text-lg leading-relaxed">
              Klicken Sie auf den unten stehenden Link, um ein Video von Herrn Mwesigye Timothy zu sehen, in dem er den Weg des Voiceless Rescue Shelter von seiner Gründung an erklärt.
            </p>
          </div>

          {/* Video Thumbnail */}
          <div className="relative group cursor-pointer">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="https://ext.same-assets.com/1668787291/872624715.jpeg"
                    alt="Video thumbnail"
                    width={800}
                    height={450}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <div className="w-16 h-16 bg-shelter-brown rounded-full flex items-center justify-center">
                        <Image
                          src="https://ext.same-assets.com/1668787291/144871781.svg"
                          alt="Play button"
                          width={24}
                          height={24}
                          className="ml-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Play Video Text */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-lg font-medium">Play Video</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="https://www.youtube.com/@VOICELESSRESCUESHELTER/featured"
              className="text-shelter-blue hover:text-shelter-brown transition-colors duration-200 font-medium"
            >
              Find us on YouTube
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
