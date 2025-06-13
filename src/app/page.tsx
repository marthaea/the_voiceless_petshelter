import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'
import VolunteerTourSection from '@/components/VolunteerTourSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ServicesSection />
        <StatsSection />
        <VolunteerTourSection />
      </main>
      <Footer />
    </>
  )
}
