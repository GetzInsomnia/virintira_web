import ScrollToHero from '@/components/ScrollToHero';
import HeroSection from '@/components/HeroSection';
import PopularServices from '@/components/PopularServices';
import AboutSection from '@/components/AboutSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://virintira.com' },
};

function HomePageContent() {
  // const t = useTranslations('home');

  return (
    <>
      <ScrollToHero />
      <HeroSection />
      <PopularServices />
      <AboutSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
    </>
  );
}

export default function HomePage() {
  return <HomePageContent />;
} 