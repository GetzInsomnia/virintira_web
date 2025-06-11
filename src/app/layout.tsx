import './globals.css'
import { Prompt, Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import StructuredData from '@/components/StructuredData'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

const fontTH = Prompt({
  subsets: ['thai'],
  variable: '--font-th',
  weight: ['400', '700']
})

const fontEN = Inter({
  subsets: ['latin'],
  variable: '--font-en',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'สำนักงานบัญชี VIRINTIRA | สำนักงานบัญชีและบริหารธุรกิจครบวงจร',
  description: 'ให้บริการบัญชี ภาษี จดทะเบียนธุรกิจ และการตลาดออนไลน์',
  keywords: [
    'สำนักงานบัญชี',
    'บริการบัญชี',
    'บริการภาษี',
    'จดทะเบียนบริษัท',
    'การตลาดออนไลน์',

    'Virintira',
    'Virintira Accounting',
    'accounting services',
    'tax services',
    'bookkeeping',
    'company registration',
    'online marketing',
    // Business registration services
    'จด หจก.',
    'limited partnership registration',
    'จด บจก.',
    'private limited company registration',
    'จดห้างหุ้นส่วน',
    'partnership registration',
    'จดสมาคม',
    'association registration',
    'จดมูลนิธิ',
    'foundation registration',
    'แก้ไขข้อมูลบริษัท',
    'company information update',
    'ทำบัญชี',
    'ภาษี',
    'เคลียร์ภาษี',
    'วางแผนภาษี',
    'tax',
    'tax clearance',
    'tax planning',
    'ปิดงบ',
    'financial statement closing',
    'ทำเว็บ',
    'website development',
    'การตลาด',
    'marketing',
    'โปรดักชั่น',
    'production',
    'ที่ปรึกษา',
    'consultant',
    'ขอใบอนุญาต',
    'business license application',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <StructuredData />
      </head>
      <body className={`${fontTH.variable} ${fontEN.variable} font-[var(--font-th)] overflow-y-hidden`}>
        <Navbar />
        <main className="pt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto scroll-smooth scroll-pt-[var(--header-height)]">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
