import ScrollToHero from '@/components/ScrollToHero'
import HeroSection from '@/components/HeroSection'
import PopularServices from '@/components/PopularServices'
import AboutSection from '@/components/AboutSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import HowItWorksSection from '@/components/HowItWorksSection'

export default function HomePage({ searchParams }: { searchParams: { scrollToHero?: string } }) {
  const shouldScroll = searchParams.scrollToHero === 'true'
  return (
    <>
      <ScrollToHero shouldScroll={shouldScroll} />
      <HeroSection />
      <PopularServices />
      <AboutSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
    </>
  )
}
