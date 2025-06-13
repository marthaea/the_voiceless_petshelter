'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    donationType: 'one-time',
    amount: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.')
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      details: ['Nsanji, Uganda', 'Kampala Region'],
      description: 'Unser Tierheim befindet sich in Nsanji, Uganda'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon',
      details: ['+256 XXX XXX XXX'],
      description: 'Rufen Sie uns für dringende Fälle an'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-Mail',
      details: ['info@voicelessrescue.org', 'donations@voicelessrescue.org'],
      description: 'Senden Sie uns eine E-Mail für allgemeine Anfragen'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Öffnungszeiten',
      details: ['Mo-Fr: 8:00 - 18:00', 'Sa-So: 9:00 - 16:00'],
      description: 'Besuche nach Terminvereinbarung möglich'
    }
  ]

  const donationOptions = [
    { value: '25', label: '€25' },
    { value: '50', label: '€50' },
    { value: '100', label: '€100' },
    { value: '250', label: '€250' },
    { value: 'custom', label: 'Eigener Betrag' }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-shelter-gray">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-shelter-gray-dark mb-6">
              Kontakt
            </h1>
            <p className="text-lg md:text-xl text-shelter-gray-dark max-w-4xl mx-auto leading-relaxed">
              Nehmen Sie Kontakt mit uns auf und helfen Sie uns, das Leben der stimmlosen Tiere zu verändern.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-shelter-gray-dark mb-4">
                Kontaktinformationen
              </h2>
              <p className="text-lg text-shelter-gray-dark">
                Erreichen Sie uns über verschiedene Kanäle
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-shelter-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-shelter-brown">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-shelter-gray-dark mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-shelter-gray-dark font-medium">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-shelter-gray-dark/70 mt-2">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Donation */}
        <section className="py-16 md:py-20 bg-shelter-gray">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-shelter-gray-dark">
                    Nachricht senden
                  </CardTitle>
                  <p className="text-shelter-gray-dark">
                    Haben Sie Fragen oder möchten Sie mehr erfahren? Schreiben Sie uns!
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-shelter-gray-dark mb-2">
                          Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Ihr vollständiger Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-shelter-gray-dark mb-2">
                          E-Mail *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="ihre.email@beispiel.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-shelter-gray-dark mb-2">
                          Telefon
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+49 XXX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-shelter-gray-dark mb-2">
                          Betreff *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shelter-brown"
                        >
                          <option value="">Wählen Sie ein Thema</option>
                          <option value="adoption">Tieradoption</option>
                          <option value="volunteer">Freiwilligenarbeit</option>
                          <option value="donation">Spenden</option>
                          <option value="partnership">Partnerschaft</option>
                          <option value="general">Allgemeine Anfrage</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-shelter-gray-dark mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shelter-brown resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-shelter-brown hover:bg-shelter-brown/90"
                    >
                      Nachricht senden
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Donation Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-shelter-gray-dark flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-shelter-brown" />
                    Schnell spenden
                  </CardTitle>
                  <p className="text-shelter-gray-dark">
                    Ihre Spende rettet Leben. Jeder Betrag macht einen Unterschied.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-shelter-gray-dark mb-2">
                        Spendentyp
                      </label>
                      <div className="flex gap-4 mb-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="donationType"
                            value="one-time"
                            checked={formData.donationType === 'one-time'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          Einmalig
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="donationType"
                            value="monthly"
                            checked={formData.donationType === 'monthly'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          Monatlich
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-shelter-gray-dark mb-2">
                        Betrag wählen
                      </label>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {donationOptions.slice(0, -1).map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, amount: option.value }))}
                            className={`p-2 border rounded-md text-center transition-colors ${
                              formData.amount === option.value
                                ? 'bg-shelter-brown text-white border-shelter-brown'
                                : 'border-gray-300 hover:border-shelter-brown'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      <Input
                        type="number"
                        name="amount"
                        value={formData.amount === 'custom' ? '' : formData.amount}
                        onChange={(e) => setFormData(prev => ({ ...prev, amount: 'custom' }))}
                        placeholder="Eigener Betrag in €"
                        min="1"
                      />
                    </div>

                    <div className="bg-shelter-brown/10 p-4 rounded-lg">
                      <h4 className="font-medium text-shelter-gray-dark mb-2">
                        Was Ihre Spende bewirkt:
                      </h4>
                      <ul className="text-sm text-shelter-gray-dark space-y-1">
                        <li>• €25 = Impfungen für ein Tier</li>
                        <li>• €50 = Futter für 5 Tiere/Woche</li>
                        <li>• €100 = Medizinische Behandlung</li>
                        <li>• €250 = Kastration und Nachsorge</li>
                      </ul>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-shelter-brown hover:bg-shelter-brown/90"
                    >
                      Jetzt spenden
                    </Button>
                  </form>

                  {/* PayPal Button */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-shelter-gray-dark mb-4">
                      Oder spenden Sie direkt über PayPal:
                    </p>
                    <Image
                      src="https://ext.same-assets.com/1668787291/780025665.gif"
                      alt="PayPal Donation Button"
                      width={147}
                      height={47}
                      className="mx-auto cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Map Placeholder */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-shelter-gray-dark mb-4">
                Besuchen Sie uns
              </h2>
              <p className="text-lg text-shelter-gray-dark">
                Unser Tierheim in Nsanji, Uganda
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-64 md:h-96 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-shelter-brown mx-auto mb-4" />
                      <p className="text-shelter-gray-dark font-medium">
                        Karte von Nsanji, Uganda
                      </p>
                      <p className="text-sm text-shelter-gray-dark mt-2">
                        Besuche nach Terminvereinbarung
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-shelter-gray-dark mb-4">
                      Anfahrt
                    </h3>
                    <p className="text-shelter-gray-dark mb-4">
                      Unser Tierheim befindet sich in Nsanji, etwa 45 Minuten von Kampala entfernt.
                    </p>
                    <ul className="text-sm text-shelter-gray-dark space-y-2">
                      <li>• Von Kampala: Nimmt die Masaka Road</li>
                      <li>• Öffentliche Verkehrsmittel verfügbar</li>
                      <li>• Parkplätze vor Ort vorhanden</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-shelter-gray-dark mb-4">
                      Besuchshinweise
                    </h3>
                    <p className="text-shelter-gray-dark mb-4">
                      Wir freuen uns über Besucher! Bitte beachten Sie folgende Hinweise:
                    </p>
                    <ul className="text-sm text-shelter-gray-dark space-y-2">
                      <li>• Voranmeldung erforderlich</li>
                      <li>• Geschlossene Schuhe tragen</li>
                      <li>• Desinfektionsmittel wird bereitgestellt</li>
                      <li>• Füttern nur nach Absprache</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
