import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CampaignsPage() {
  const campaigns = [
    {
      title: 'PET SHELTERING',
      image: 'https://ext.same-assets.com/1668787291/1025439101.jpeg',
      description: 'Bereitstellung sicherer Unterkünfte für obdachlose und ausgesetzte Tiere. Wir schaffen liebevolle Umgebungen, in denen Tiere die Pflege und den Schutz erhalten, die sie verdienen.',
      goal: '€5,000',
      raised: '€3,200',
      progress: 64
    },
    {
      title: 'VACCINATIONS',
      image: 'https://ext.same-assets.com/1668787291/4190713570.jpeg',
      description: 'Lebensrettende Impfungen für alle geretteten Tiere. Präventive Gesundheitsversorgung ist entscheidend für das Wohlbefinden unserer pelzigen Freunde.',
      goal: '€2,500',
      raised: '€1,800',
      progress: 72
    },
    {
      title: 'TRAINING AND BEHAVIOR',
      image: 'https://ext.same-assets.com/1668787291/279383459.jpeg',
      description: 'Verhaltenstherapie und Training für traumatisierte Tiere. Wir helfen ihnen, Vertrauen zu Menschen zurückzugewinnen und adoptionsbereit zu werden.',
      goal: '€3,000',
      raised: '€2,100',
      progress: 70
    },
    {
      title: 'SERVING OUR COMMUNITY 24/7',
      image: 'https://ext.same-assets.com/1668787291/3706469981.jpeg',
      description: 'Rund-um-die-Uhr-Notfallversorgung für verletzte und kranke Tiere. Unser engagiertes Team ist immer bereit zu helfen.',
      goal: '€4,000',
      raised: '€2,800',
      progress: 70
    },
    {
      title: 'GOD PARENTING',
      image: 'https://ext.same-assets.com/1668787291/3875528686.jpeg',
      description: 'Patenschaftsprogramm, das eine langfristige Verbindung zwischen Spendern und geretteten Tieren schafft. Werden Sie ein Tierpate und verändern Sie ein Leben.',
      goal: '€6,000',
      raised: '€4,500',
      progress: 75
    },
    {
      title: 'PET CLINIC SERVICES',
      image: 'https://ext.same-assets.com/1668787291/1286710295.jpeg',
      description: 'Umfassende tierärztliche Versorgung einschließlich Operationen, Behandlungen und Nachsorge für alle unsere geretteten Tiere.',
      goal: '€8,000',
      raised: '€5,600',
      progress: 70
    }
  ]

  const volunteerTour = {
    title: 'Tierschutzreise nach Uganda',
    subtitle: '10 Tage, um Ugandas exklusive Gorillas und Wildtiere zu erleben',
    image: 'https://ext.same-assets.com/1668787291/1563114161.jpeg',
    description: 'Begleiten Sie uns auf unserer nächsten Tierschutzreise. Dabei konzentrieren wir uns auf die Durchführung einer Reihe von Aktivitäten, die speziell darauf abzielen, ein stärkeres Band der Brüderlichkeit zwischen unseren geschätzten Freiwilligen und Spendern zu schaffen und Gelder zu sammeln, um die stimmlosen Tiere zu unterstützen.',
    activities: [
      'Dschungel-Safari',
      'Wohltätigkeitsveranstaltungen',
      'Geldbeschaffung',
      'Fund Raising'
    ],
    experiences: [
      'Lagerfeuer',
      'Unterkunft',
      'Vollpension'
    ]
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-shelter-gray">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-shelter-gray-dark mb-6">
              Unsere Kampagnen
            </h1>
            <p className="text-lg md:text-xl text-shelter-gray-dark max-w-4xl mx-auto leading-relaxed">
              Alle unsere Kampagnen sind darauf ausgerichtet, für eine Welt zu kämpfen, in der Menschen Haustiere mit Respekt, Einfühlungsvermögen und Verständnis behandeln!
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-shelter-gray-dark mb-8">
              Die Hilfe für schutzbedürftige Tiere und die Unterbringung von Haustieren in sicheren und liebevollen Heimen erfordert das Engagement von uns allen – von Tierschützern, Tierhaltern, Tierheimen, der Politik und ganzen Gemeinden. Wenn wir für eine gemeinsame Sache zusammenarbeiten, retten wir Leben und verbessern unsere Gesellschaft und ihre Gesetze, um sicherzustellen, dass Opfer von Tierquälerei und andere gefährdete Tiere den Schutz und die Pflege erhalten, die sie verdienen.
            </p>
            <p className="text-xl font-medium text-shelter-brown">
              Spenden Sie heute...
            </p>
          </div>
        </section>

        {/* Campaign Selection Header */}
        <section className="py-12 bg-shelter-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shelter-gray-dark mb-4">
              Wählen Sie aus den verfügbaren Kampagnen
            </h2>
            <p className="text-lg text-shelter-gray-dark max-w-3xl mx-auto">
              Bitte wählen Sie aus den verfügbaren Kampagnen aus und helfen Sie uns, einen besseren und sicheren Hafen für die gefährdeten Haustiere zu schaffen.
            </p>
          </div>
        </section>

        {/* Campaigns Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {campaigns.map((campaign) => (
                <Card key={campaign.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold text-center px-4">
                        {campaign.title}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-shelter-gray-dark mb-4 leading-relaxed">
                      {campaign.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-shelter-gray-dark mb-2">
                        <span>Gesammelt: {campaign.raised}</span>
                        <span>Ziel: {campaign.goal}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-shelter-brown h-2 rounded-full transition-all duration-500"
                          style={{ width: `${campaign.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-shelter-gray-dark mt-1">
                        {campaign.progress}% erreicht
                      </p>
                    </div>

                    <Button className="w-full bg-shelter-brown hover:bg-shelter-brown/90">
                      Spenden
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Tour Section */}
        <section className="py-16 md:py-20 bg-shelter-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-shelter-brown text-lg font-medium mb-2">
                  Freiwilligen-Reise
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-shelter-gray-dark mb-6">
                  {volunteerTour.title}
                </h2>
                <p className="text-xl text-shelter-brown font-medium">
                  {volunteerTour.subtitle}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Card className="overflow-hidden shadow-xl">
                    <CardContent className="p-0">
                      <Image
                        src={volunteerTour.image}
                        alt="Uganda wildlife tour"
                        width={600}
                        height={400}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <p className="text-shelter-gray-dark text-lg mb-8 leading-relaxed">
                    {volunteerTour.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-shelter-brown mb-3">
                        Freiwilligenarbeit
                      </h4>
                      <ul className="space-y-2 text-shelter-gray-dark">
                        {volunteerTour.activities.map((activity, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-shelter-brown mb-3">
                        Andere Erlebnisse
                      </h4>
                      <ul className="space-y-2 text-shelter-gray-dark">
                        {volunteerTour.experiences.map((experience, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3" />
                            {experience}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="#reserve">
                    <Button
                      size="lg"
                      className="bg-shelter-brown hover:bg-shelter-brown/90 text-white px-8 py-6 text-lg font-medium"
                    >
                      Reserve A Place
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
