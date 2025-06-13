import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-shelter-gray">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-shelter-gray-dark mb-6">
              Über uns
            </h1>
            <p className="text-xl md:text-2xl text-shelter-gray-dark max-w-4xl mx-auto leading-relaxed font-medium">
              THE VOICELESS RESCUE SHELTER ist ein in Uganda ansässiges Tierheim, in dem mehr als 70 Hunde, Katzen und deren Welpen auf der Suche nach einem liebevollen Zuhause sind.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6 text-lg leading-relaxed text-shelter-gray-dark">
              <p>
                THE VOICELESS RESCUE SHELTER wurde 2017 mit dem Ziel gegründet, den Tierschutz zu fördern und Tiere zu unterstützen, die nicht für sich selbst sprechen können. Wir bieten ihnen ein sicheres Zuhause, in dem sie gepflegt, gefüttert, behandelt und geliebt werden wie Menschen.
              </p>

              <p>
                Das VOICELESS wird ausschließlich durch Spenden finanziert. Finanziell sind wir auf die Unterstützung von großzügigen Einzelpersonen, Unternehmen und Tierschutzorganisationen im In- und Ausland angewiesen. Auch Sie können ein können uns unterstützen.
              </p>

              <div className="text-center py-8">
                <h2 className="text-2xl md:text-3xl font-bold text-shelter-brown">
                  Sie können die Stimme der Stimmlosen sein
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 md:py-20 bg-shelter-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-shelter-gray-dark text-center mb-12">
              Der Gründer
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <Card className="overflow-hidden shadow-lg">
                  <CardContent className="p-0">
                    <Image
                      src="https://ext.same-assets.com/1668787291/3421932339.jpeg"
                      alt="Mwesigye Timothy - Founder"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-shelter-gray-dark mb-4">
                  Mwesigye Timothy
                </h3>
                <p className="text-shelter-brown font-medium text-lg mb-6">
                  2017 – bis heute
                </p>

                <div className="space-y-4 text-shelter-gray-dark leading-relaxed">
                  <p className="text-lg italic text-shelter-brown">
                    "Unsere Geschichte beginnt mit Jack und Bella, wir wurden inspiriert, auch anderen Haustieren zu helfen, und allmählich wuchs die Zahl auf 53 Hunde und 23 Katzen, die wir derzeit in unseren Unterkünften haben, zusätzlich zu den 43 Hunden, die wir zur Adoption in liebevolle Familien vermittelt haben."
                  </p>

                  <p>
                    Herr Mwesigye Timothy lebt mit seiner 7-jährigen Tochter zusammen. Die Anregung, sich ein Haustier anzuschaffen, bekam er von seiner kleinen Tochter, die 3 Jahre alt war und eine tiefe Verbundenheit mit Haustieren hatte.
                  </p>

                  <p>
                    Er erzählt, dass er eines Tages, als er auf der Straße unterwegs war, zwei kleine Welpen fand, die ausgesetzt worden waren, und da seine Tochter Haustiere sehr liebte, dachte er, dass dies ein tolles Geschenk für sie sein könnte. Er beschloss, die Welpen Bella und Jack zu nennen.
                  </p>

                  <p>
                    Leider überlebte Jack nicht, da die furchtbaren Bedingungen, denen er ausgesetzt war, seine Immunität beeinträchtigten. Herr Timothy verlor seinen Job und konnte Bella nicht mehr ausreichend ernähren. Aufgrund der Unterernährung wurde Bella auch von einer Krankheit befallen, die ihren Gesundheitszustand stark beeinträchtigte, und sie wäre fast gestorben.
                  </p>

                  <p>
                    An diesem Punkt posteten wir ihr Bild im Internet und baten um Hilfe bei der Behandlung. Glücklicherweise kamen wir mit unseren deutschen Freunden in Kontakt, die uns ihre Hilfe anboten, und Bella konnte gerettet werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Vision */}
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-shelter-brown mb-6 text-center">
                    Vision
                  </h3>
                  <p className="text-shelter-gray-dark leading-relaxed">
                    Unsere Vision ist es, ein Umfeld zu schaffen, in dem die Menschen ein Gefühl der Fürsorge entwickeln und Tiere nicht als Gegenstände betrachten, sondern als fühlende Wesen mit Herz und Seele.
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-shelter-brown mb-6 text-center">
                    Mission
                  </h3>
                  <p className="text-shelter-gray-dark leading-relaxed">
                    Das Voiceless Rescue Shelter ist eine gemeinnützige Organisation, die notleidende und ausgesetzte Katzen und Hunde aufnimmt und ihnen ein Zuhause gibt. Bei Bedarf bietet es Verhaltensinterventionen an, um die Chancen auf eine Adoption zu verbessern. Wir wurden 2017 gegründet und betreiben ein Tierheim in Nsanji, Uganda. Außerdem bieten wir Programme an, die die Bindung zwischen Tieren und Menschen stärken.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-shelter-brown mb-6 text-center">
                    Werte
                  </h3>
                  <ul className="space-y-3 text-shelter-gray-dark">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3 mt-2 flex-shrink-0" />
                      Wir respektieren den inneren Wert von Haustieren
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3 mt-2 flex-shrink-0" />
                      Wir zeigen Mitgefühl im Umgang mit Tieren
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3 mt-2 flex-shrink-0" />
                      Wir arbeiten kooperativ und im Geiste der Zusammenarbeit
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3 mt-2 flex-shrink-0" />
                      Wir betonen die Verantwortung des Menschen für das Wohlergehen aller Tiere
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-shelter-brown rounded-full mr-3 mt-2 flex-shrink-0" />
                      Wir zeigen Vertrauenswürdigkeit, indem wir unsere Verpflichtungen einhalten
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-20 bg-shelter-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-shelter-gray-dark text-center mb-12">
              Unser Tierheim
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="overflow-hidden shadow-lg group">
                <CardContent className="p-0">
                  <Image
                    src="https://ext.same-assets.com/1668787291/2357563287.jpeg"
                    alt="Shelter animals"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-lg group">
                <CardContent className="p-0">
                  <Image
                    src="https://ext.same-assets.com/1668787291/468186380.jpeg"
                    alt="Rescued animals"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-lg group md:col-span-2 lg:col-span-1">
                <CardContent className="p-0">
                  <Image
                    src="https://ext.same-assets.com/1668787291/398283343.jpeg"
                    alt="Shelter facility"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
