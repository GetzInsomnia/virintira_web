'use client'

import ContactCTA from '@/components/ContactCTA'
import { motion } from 'framer-motion'
import TypewriterText from '@/components/TypewriterText'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { useEffect } from 'react'

export default function HeroSection() {
  const t = useTranslations()
  const locale = useLocale()
  
  // Debug logging for translations
  useEffect(() => {
    console.log('🏠 HeroSection Debug:', {
      currentLocale: locale,
      heroTitle: t('hero.title'),
      heroSubtitle: t('hero.subtitle'),
      translationKeys: {
        title: 'hero.title',
        subtitle: 'hero.subtitle'
      },
      timestamp: new Date().toISOString()
    })
  }, [locale, t])
  
  return (
    <section
      id="herosection"
      style={{ minHeight: 'calc(100dvh - var(--header-height))' }}
      className="relative min-h-[calc(100dvh-var(--header-height))] lg:pt-25 flex items-center justify-center text-center px-6 bg-[#FFFEFE] snap-start"
    >
      {/* Background image */}
      <div className="absolute -top-[10px] inset-x-0 bottom-0 z-0 bg-[url('/bg-hero.webp')] bg-cover bg-center opacity-15"></div>

      {/* Debug locale indicator */}
      <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 text-xs rounded z-10">
        Locale: {locale}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-xl mx-auto space-y-6">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold leading-snug tracking-tight text-[#A70909]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.div
          className="text-lg lg:text-2xl text-[#A70909] leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypewriterText text={t('hero.subtitle')} />
        </motion.div>

        <motion.div
          className="pt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
        >
          <ContactCTA />
        </motion.div>
      </div>
    </section>
  )
}
