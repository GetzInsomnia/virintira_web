import BorderRevealButton from '@/components/BorderRevealButton'
import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()
  return {
    title: `${t('notFound.heading')} | VIRINTIRA`,
    description: t('notFound.message'),
  }
}

export default function NotFound() {
  const t = useTranslations()
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center text-center px-6 bg-white">
      <div className="max-w-xl flex flex-col items-center">
        <div className="text-[80px] sm:text-[100px] leading-none mb-6">😢</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#A70909] mb-4 leading-relaxed">
          {t('notFound.heading')}
        </h1>
        <p className="text-black text-lg sm:text-xl mb-10 leading-relaxed">
          {t('notFound.message')}
        </p>
        <BorderRevealButton href="/" className="text-xs py-1 px-3">
          {t('buttons.backHome')}
        </BorderRevealButton>
      </div>
    </div>
  )
}
