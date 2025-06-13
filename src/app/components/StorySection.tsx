import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-shelter-gray-dark mb-4">
            UNSERE GESCHICHTE BEGINNT
          </h2>
          <h3 className="text-xl md:text-2xl text-shelter-brown font-medium">
            With - Mr. Mwesigye Timothy & his little daughter
          </h3>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-shelter-gray-dark leading-relaxed text-lg">
              Herr Mwesigye Timothy lebt mit seiner siebenjährigen Tochter zusammen. Er hatte die Idee, seiner damals dreijährigen Tochter ein Haustier zu schenken, die sich sehr für Haustiere interessierte. Eines Tages, erzählt er, fand er auf der Straße zwei ausgesetzte kleine Welpen.
            </p>

            <p className="text-shelter-gray-dark leading-relaxed text-lg">
              Da seine Tochter Haustiere sehr liebte, dachte er, dies wäre ein tolles Geschenk für sie. Er nannte die Welpen Bella und Jack. Leider überlebte Jack nicht, da die strengen Bedingungen, denen er ausgesetzt war, seine Immunität schwächten.
            </p>

            <p className="text-shelter-gray-dark leading-relaxed text-lg">
              Herr Timothy verlor seinen Job und konnte Bella nicht mehr ausreichend ernähren. Aufgrund von Unterernährung erkrankte Bella an einer Krankheit, die ihren Gesundheitszustand stark beeinträchtigte und sie fast starb.
            </p>

            <p className="text-shelter-gray-dark leading-relaxed text-lg">
              Daraufhin veröffentlichten wir ein Foto von ihr im Internet und baten um Hilfe bei der Behandlung. Glücklicherweise kamen wir mit unseren deutschen Freunden in Kontakt, die uns ihre Hilfe anboten, und Bella konnte gerettet werden.
            </p>

            <p className="text-shelter-brown leading-relaxed text-lg font-medium">
              Von da an waren wir inspiriert, auch anderen Tieren zu helfen, und nach und nach wuchs die Zahl auf 220 Hunde, die wir derzeit in unseren Unterkünften haben, zusätzlich zu den 43 Hunden, die wir zur Adoption an liebevolle Familien vermittelt haben.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="https://ext.same-assets.com/1668787291/3421932339.jpeg"
                  alt="Mr. Mwesigye Timothy - Founder"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Christine Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="https://ext.same-assets.com/1668787291/1292526540.jpeg"
                alt="Christine Landscheiten"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-shelter-gray-dark mb-6">
                Ein besonderer Dank an Christine Landscheiten
              </h3>

              <div className="space-y-4">
                <p className="text-shelter-gray-dark leading-relaxed">
                  Christine hat sehr viel dazu beigetragen, den von uns geretteten sprachlosen Tieren einen sicheren Hafen zu bieten. Sie hat viel dazu beigetragen, die Spender zu organisieren und dafür zu sorgen, dass jedes von uns gerettete Tier einen Paten bekommt.
                </p>

                <p className="text-shelter-gray-dark leading-relaxed">
                  In dem Land, in dem wir leben, in dem es nicht einmal üblich ist, sich um seine Mitmenschen zu kümmern, ganz zu schweigen von Haustieren, ist es wirklich eine aufregende Erfahrung zu wissen, dass es Menschen wie Christine mit einem solch großzügigen und fürsorglichen Herzen noch gibt.
                </p>

                <p className="text-shelter-brown leading-relaxed font-medium">
                  Neben Christine möchten wir allen Spendern, die mit großzügigen Spenden einen großen Unterschied machen, um diesen stimmlosen Tieren zu helfen, unsere aufrichtige Anerkennung aussprechen. Mögen Sie wirklich reichlich gesegnet sein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
