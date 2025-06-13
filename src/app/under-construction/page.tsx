import type { Metadata } from 'next'
import UnderConstructionContent from './UnderConstructionContent'

export const generateMetadata = (): Metadata => ({
  title: 'หน้ากำลังพัฒนา',
})

export default function UnderConstructionPage() {
  return <UnderConstructionContent />
}
