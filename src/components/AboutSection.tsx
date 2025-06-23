'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import BorderRevealButton from '@/components/BorderRevealButton'
import { useTranslations } from 'next-intl'

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations()

  return (
    <section
      className="relative min-h-[calc(100dvh-var(--header-height))] snap-start bg-[#FFFEFE] px-4 py-16 lg:py-0 flex items-center justify-center"
      style={{ minHeight: 'calc(100dvh - var(--header-height))' }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 mt-6 lg:mt-12">
        {/* Left (Text Content) */}
        <motion.div
          className="w-full lg:w-1/2 px-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="text-[#A70909] text-xl lg:text-3xl font-semibold leading-relaxed mb-6 border-l-4 border-[#A70909] pl-4">
            <p>{t('about.blockquote1')}</p>
            <p>{t('about.blockquote2')}</p>
          </blockquote>
          <div className="text-base lg:text-lg text-gray-800 space-y-6 leading-relaxed">
            <p className="indent-6">
              {t('about.p1')}
            </p>
            <p className="indent-6">
              {t('about.p2')}
            </p>
            <p className="indent-6">
              {t('about.p3')}
            </p>
            <p className="indent-6">
              {t('about.p4')}
            </p>
          </div>

          <div className="pt-10 flex justify-center">
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            >
              <BorderRevealButton
                href="/under-construction"
                section="Homepage"
                item={t('about.button')}
              >
                  <span className="text-sm lg:text-base">{t('about.button')}</span>
              </BorderRevealButton>

            </motion.div>
          </div>
        </motion.div>

        {/* Right (Image) */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center px-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
            <Image
              src="/about/company-license.png"
              alt="Company License"
              width={480}
              height={600}
              className="rounded-lg shadow-lg object-contain max-h-[75vh]"
            />
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              <motion.img
                src="/about/company-license.png"
                alt="Company License Fullscreen"
                className="max-h-[90vh] w-auto object-contain rounded shadow-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
