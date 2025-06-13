import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ContributorsPage() {
  const starContributors = [
    {
      name: 'Christine Landscheiten',
      image: 'https://ext.same-assets.com/1668787291/1292526540.jpeg',
      country: 'Deutschland',
      contribution: 'Hauptorganisatorin und Patenschaftskoordinatorin',
      description: 'Christine hat sehr viel dazu beigetragen, den von uns geretteten sprachlosen Tieren einen sicheren Hafen zu bieten. Sie hat viel dazu beigetragen, die Spender zu organisieren und dafür zu sorgen, dass jedes von uns gerettete Tier einen Paten bekommt.',
      impact: 'Über 150 Tiere durch Patenschaften unterstützt',
      quote: 'In dem Land, in dem wir leben, in dem es nicht einmal üblich ist, sich um seine Mitmenschen zu kümmern, ganz zu schweigen von Haustieren, ist es wirklich eine aufregende Erfahrung zu wissen, dass es Menschen wie Christine mit einem solch großzügigen und fürsorglichen Herzen noch gibt.',
      featured: true
    },
    {
      name: 'Dr. Maria Schmidt',
      image: 'https://ext.same-assets.com/1668787291/2357563287.jpeg',
      country: 'Deutschland',
      contribution: 'Tierärztin und medizinische Beraterin',
      description: 'Dr. Schmidt stellt ihre tierärztliche Expertise ehrenamtlich zur Verfügung und hilft bei der medizinischen Betreuung unserer geretteten Tiere durch Fernberatung.',
      impact: 'Über 200 medizinische Beratungen',
      quote: 'Jedes Leben zählt, egal wie klein es ist.',
      featured: false
    },
    {
      name: 'Familie Weber',
      image: 'https://ext.same-assets.com/1668787291/468186380.jpeg',
      country: 'Österreich',
      contribution: 'Monatliche Großspender',
      description: 'Die Familie Weber unterstützt unser Tierheim seit 2018 mit regelmäßigen monatlichen Spenden und hat bereits mehrere Adoptionen ermöglicht.',
      impact: 'Über €15,000 gespendet',
      quote: 'Tiere verdienen Liebe und Fürsorge, unabhängig davon, wo sie leben.',
      featured: false
    },
    {
      name: 'Thomas Müller',
      image: 'https://ext.same-assets.com/1668787291/398283343.jpeg',
      country: 'Schweiz',
      contribution: 'Baufinanzierung und Infrastruktur',
      description: 'Thomas hat den Bau unserer neuen Tierheimanlage finanziert und sorgt dafür, dass unsere Tiere bessere Unterkünfte haben.',
      impact: 'Neue Tierheimanlage für 100+ Tiere',
      quote: 'Investitionen in bessere Unterkünfte bedeuten bessere Leben für die Tiere.',
      featured: false
    }
  ]

  const donorLevels = [
    {
      level: 'Goldener Beschützer',
      amount: '€5,000+',
      count: 8,
      benefits: ['Persönlicher Besuch in Uganda', 'Monatliche Updates', 'Namensschild im Tierheim', 'Spezielle Anerkennung']
    },
    {
      level: 'Silberner Pate',
      amount: '€1,000 - €4,999',
      count: 23,
      benefits: ['Vierteljährliche Updates', 'Digitales Zertifikat', 'Social Media Anerkennung']
    },
    {
      level: 'Bronzener Unterstützer',
      amount: '€100 - €999',
      count: 89,
      benefits: ['Halbjährliche Updates', 'Dankesbrief', 'Newsletter']
    },
    {
      level: 'Tierfreund',
      amount: 'Bis €99',
      count: 163,
      benefits: ['Jährlicher Bericht', 'Newsletter']
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-shelter-gray">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-shelter-gray-dark mb-6">
              Star Contributors
            </h1>
            <p className="text-lg md:text-xl text-shelter-gray-dark max-w-4xl mx-auto leading-relaxed">
              Unsere besonderen Dank gilt all den großherzigen Menschen, die unsere Mission unterstützen und das Leben der stimmlosen Tiere verändern.
            </p>
          </div>
        </section>

        {/* Featured Contributor - Christine */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-shelter-gray-dark mb-4">
                  Ausgezeichneter Beitrag
                </h2>
                <p className="text-lg text-shelter-brown">
                  Ein besonderer Dank an unsere Hauptunterstützerin
                </p>
              </div>

              {starContributors.filter(contributor => contributor.featured).map((contributor) => (
                <Card key={contributor.name} className="overflow-hidden shadow-xl mb-12">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                          <Image
                            src={contributor.image}
                            alt={contributor.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-shelter-gray-dark">
                            {contributor.name}
                          </h3>
                          <p className="text-shelter-brown font-medium">
                            {contributor.country} • {contributor.contribution}
                          </p>
                        </div>
                      </div>

                      <p className="text-shelter-gray-dark leading-relaxed mb-6">
                        {contributor.description}
                      </p>

                      <div className="bg-shelter-brown/10 p-4 rounded-lg mb-6">
                        <p className="text-shelter-brown font-medium">
                          Impact: {contributor.impact}
                        </p>
                      </div>

                      <blockquote className="italic text-shelter-gray-dark border-l-4 border-shelter-brown pl-4">
                        "{contributor.quote}"
                      </blockquote>
                    </CardContent>

                    <div className="relative lg:min-h-[400px]">
                      <Image
                        src={contributor.image}
                        alt={contributor.name}
                        fill
                        className="object-cover lg:rounded-r-lg"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Star Contributors */}
        <section className="py-16 md:py-20 bg-shelter-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-shelter-gray-dark mb-4">
                Weitere Star Contributors
              </h2>
              <p className="text-lg text-shelter-gray-dark">
                Jeder Beitrag zählt und macht einen Unterschied
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {starContributors.filter(contributor => !contributor.featured).map((contributor) => (
                <Card key={contributor.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={contributor.image}
                      alt={contributor.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{contributor.name}</h3>
                      <p className="text-sm opacity-90">{contributor.country}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-shelter-brown font-medium mb-2">
                      {contributor.contribution}
                    </p>
                    <p className="text-shelter-gray-dark text-sm leading-relaxed mb-4">
                      {contributor.description}
                    </p>
                    <div className="bg-shelter-brown/10 p-3 rounded text-center">
                      <p className="text-shelter-brown font-medium text-sm">
                        {contributor.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donor Levels */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-shelter-gray-dark mb-4">
                Unsere Spender-Gemeinschaft
              </h2>
              <p className="text-lg text-shelter-gray-dark">
                Verschiedene Wege, wie Sie Teil unserer Mission werden können
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {donorLevels.map((level, index) => (
                <Card key={level.level} className={`text-center ${index === 0 ? 'ring-2 ring-shelter-brown shadow-xl' : 'shadow-lg'}`}>
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-yellow-100' :
                      index === 1 ? 'bg-gray-100' :
                      index === 2 ? 'bg-orange-100' : 'bg-blue-100'
                    }`}>
                      <span className={`text-2xl ${
                        index === 0 ? 'text-yellow-600' :
                        index === 1 ? 'text-gray-600' :
                        index === 2 ? 'text-orange-600' : 'text-blue-600'
                      }`}>
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '❤️'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-shelter-gray-dark mb-2">
                      {level.level}
                    </h3>
                    <p className="text-shelter-brown font-medium mb-2">
                      {level.amount}
                    </p>
                    <p className="text-2xl font-bold text-shelter-gray-dark mb-4">
                      {level.count} Spender
                    </p>

                    <ul className="text-sm text-shelter-gray-dark space-y-1">
                      {level.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-shelter-brown rounded-full mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-shelter-brown">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Werden Sie ein Star Contributor
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Schließen Sie sich unserer Gemeinschaft von Tierliebhabern an und helfen Sie uns, mehr Leben zu retten. Jede Spende, egal wie groß oder klein, macht einen Unterschied.
            </p>
            <Button
              size="lg"
              className="bg-white text-shelter-brown hover:bg-white/90 px-8 py-6 text-lg font-medium"
            >
              Jetzt spenden
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
