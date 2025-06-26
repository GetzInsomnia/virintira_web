import type { Metadata } from 'next'
import UnderConstructionContent from './UnderConstructionContent'
import { getTranslations } from 'next-intl/server'

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations()
  return {
    title: t('underConstruction.title'),
    description: t('underConstruction.message'),
    alternates: { canonical: 'https://virintira.com/under-construction' },
  }
}

export default async function UnderConstructionPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  await params; // รอ params เพื่อให้ Next.js 15 ทำงานได้
  return <UnderConstructionContent />
}
