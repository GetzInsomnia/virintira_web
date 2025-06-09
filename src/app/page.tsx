'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import PopularServices from '@/components/PopularServices'
import AboutSection from '@/components/AboutSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const shouldScroll = searchParams.get('scrollToHero') === 'true'
    if (shouldScroll) {
      const timeout = setTimeout(() => {
        const target = document.getElementById('herosection')
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })

          // ลบ query ออกเพื่อไม่ scroll ซ้ำอีก
          const url = new URL(window.location.href)
          url.searchParams.delete('scrollToHero')
          window.history.replaceState({}, '', url.toString())
        }
      }, 50)

      return () => clearTimeout(timeout)
    }
  }, [searchParams])

  return (
    <>
      <HeroSection />
      <PopularServices />
      <AboutSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <Footer />
    </>
  )
}
