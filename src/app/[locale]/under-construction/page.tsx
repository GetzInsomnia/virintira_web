import type { Metadata } from 'next'
import UnderConstructionContent from './UnderConstructionContent'

export const generateMetadata = (): Metadata => ({
  title: 'หน้ากำลังพัฒนา',
  alternates: { canonical: 'https://virintira.com/under-construction' },
})

export default async function UnderConstructionPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  await params; // รอ params เพื่อให้ Next.js 15 ทำงานได้
  return <UnderConstructionContent />
}
