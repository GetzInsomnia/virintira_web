'use client'

import { FaUserTie, FaClock, FaComments, FaBalanceScale, FaThumbsUp, FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const featureItems = [
  {
    icon: <FaCheckCircle className="text-6xl text-white" />,
    titleKey: 'whyChooseUs.features.one'
  },
  {
    icon: <FaUserTie className="text-6xl text-white" />,
    titleKey: 'whyChooseUs.features.two'
  },
  {
    icon: <FaClock className="text-6xl text-white" />,
    titleKey: 'whyChooseUs.features.three'
  },
  {
    icon: <FaComments className="text-6xl text-white" />,
    titleKey: 'whyChooseUs.features.four'
  },
  {
    icon: <FaBalanceScale className="text-6xl text-white" />,
    titleKey: 'whyChooseUs.features.five'
  },
  {
    icon: <FaThumbsUp className="text-6xl text-white" />,
    titleKey: 'whyChooseUs.features.six'
  },
]

export default function WhyChooseUsSection() {
  const t = useTranslations()
  return (
    <section
      className="relative min-h-[calc(100dvh-var(--header-height))] snap-start overflow-hidden px-4 py-40 md:py-58 lg:py-50"
      style={{ minHeight: 'calc(100dvh - var(--header-height))' }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: '100% 100%' }}
        animate={{ backgroundPosition: '0% 0%' }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(135deg, #661001, #781200, #8C1804, #A70909, #D94D3A, #FF6F61, #FF8F8F, #FF8F8F, #FF6F61, #D94D3A, #A70909, #8C1804, #781200, #661001)',
          backgroundSize: '600% 600%'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 text-center">
        {featureItems.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-white font-semibold text-lg lg:text-xl leading-relaxed">{t(feature.titleKey)}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
