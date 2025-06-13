import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function ServicesSection() {
  const services = [
    {
      title: 'PET SHELTERING',
      image: 'https://ext.same-assets.com/1668787291/299319811.jpeg',
      alt: 'Pet Sheltering Service'
    },
    {
      title: 'VACCINATIONS',
      image: 'https://ext.same-assets.com/1668787291/476847767.jpeg',
      alt: 'Vaccination Service'
    },
    {
      title: 'TRAINING AND BEHAVIOR',
      image: 'https://ext.same-assets.com/1668787291/3069575681.jpeg',
      alt: 'Training and Behavior Service'
    },
    {
      title: 'SERVING OUR COMMUNITY 24/7',
      image: 'https://ext.same-assets.com/1668787291/570289317.jpeg',
      alt: 'Community Service'
    },
    {
      title: 'GOD PARENTING',
      image: 'https://ext.same-assets.com/1668787291/4129562377.jpeg',
      alt: 'God Parenting Service'
    },
    {
      title: 'PET CLINIC SERVICES',
      image: 'https://ext.same-assets.com/1668787291/3103052908.jpeg',
      alt: 'Pet Clinic Services'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-shelter-gray">
      <div className="container mx-auto px-4">
        {/* Mission Header */}
        <div className="text-center mb-16">
          <p className="text-shelter-brown text-lg font-medium mb-4">
            Sei ein Teil von...
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-shelter-gray-dark mb-6">
            unserer Mission
          </h2>
          <p className="text-shelter-gray-dark text-lg max-w-3xl mx-auto leading-relaxed">
            Unsere Mission ist es, einen sicheren Hafen für die stimmlosen Haustiere zu schaffen, die wir täglich verlassen und leidend auf den Straßen und in den Slums des Landes finden
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={service.title} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-lg md:text-xl font-bold text-center px-4 group-hover:scale-105 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Mission Image */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://ext.same-assets.com/1668787291/398283343.jpeg"
              alt="Mission in action"
              width={800}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Gemeinsam für eine bessere Zukunft
                </h3>
                <p className="text-lg opacity-90">
                  Jeder Tag bringt neue Hoffnung für unsere geretteten Tiere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
