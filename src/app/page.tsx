'use client'

// Using React Suspense to handle asynchronous components on the homepage
import { Suspense } from 'react'
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
  return (
    <Suspense fallback={null}>
      <HomePageContent />
    </Suspense>
  )
}
