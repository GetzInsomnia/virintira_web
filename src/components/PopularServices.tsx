'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const services = [
  {
    titleKey: 'popularServices.registration.title',
    descKey: 'popularServices.registration.description',
    slug: 'registration',
    image: '/services/registration.webp',
  },
  {
    titleKey: 'popularServices.editInfo.title',
    descKey: 'popularServices.editInfo.description',
    slug: 'edit-info',
    image: '/services/edit-info.webp',
  },
  {
    titleKey: 'popularServices.accounting.title',
    descKey: 'popularServices.accounting.description',
    slug: 'accounting',
    image: '/services/accounting.webp',
  },
  {
    titleKey: 'popularServices.closeFinancial.title',
    descKey: 'popularServices.closeFinancial.description',
    slug: 'close-financial',
    image: '/services/close-financial.webp',
  },
  {
    titleKey: 'popularServices.tax.title',
    descKey: 'popularServices.tax.description',
    slug: 'tax',
    image: '/services/tax.webp',
  },
]

export default function PopularServices() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const t = useTranslations()

  return (
    <section
      className="relative min-h-[calc(100dvh-var(--header-height))] snap-start px-4 pt-[80px] sm:pt-[80px] lg:pt-25 pb-10 flex items-center justify-center bg-[#FFFEFE]"
      style={{ minHeight: 'calc(100dvh - var(--header-height))' }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#A70909] mb-10">{t('popularServices.title')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[340px] sm:auto-rows-[280px] lg:auto-rows-[230px]">
          {services.map((service, index) => {
            const isBlurred = hoverIndex !== null && hoverIndex !== index

            return (
              <CustomLink
                href="/under-construction"
                section={t('popularServices.title')}
                item={t(service.titleKey)}
                key={index}
                className="contents"
              >
                <motion.div
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={`relative rounded-xl overflow-hidden bg-white shadow-md group transition-none h-full
                    ${index === 0
                      ? 'sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-2'
                      : 'sm:col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1'}
                    ${isBlurred ? 'blur-[2px]' : ''}
                  `}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Image
                    src={service.image}
                    alt={t(service.titleKey)}
                    fill
                    sizes={index === 0 ? '(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'}
                    priority={index < 2}
                    className="absolute inset-0 object-cover object-center opacity-80 group-hover:opacity-100 no-image-fade"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 px-4 py-3 z-10">
                    <h3 className="text-lg font-semibold text-[#A70909] mb-1 group-hover:translate-y-[-2px] transition duration-300">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-base text-black/80 leading-relaxed line-clamp-3 group-hover:opacity-100 transition duration-300">
                      {t(service.descKey)}
                    </p>
                  </div>
                </motion.div>
              </CustomLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}
