'use client'

// Using React components on the homepage without Suspense
import ScrollToHero from '@/components/ScrollToHero'
import HeroSection from '@/components/HeroSection'
import PopularServices from '@/components/PopularServices'
import AboutSection from '@/components/AboutSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import HowItWorksSection from '@/components/HowItWorksSection'

function HomePageContent() {
  return (
    <>
      <ScrollToHero />
      <HeroSection />
      <PopularServices />
      <AboutSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
    </>
  )
}

export default function HomePage() {
  return <HomePageContent />
}
