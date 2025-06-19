import '../globals.css'
import { Prompt, Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import StructuredData from '@/components/StructuredData'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Script from 'next/script'
import {NextIntlClientProvider} from 'next-intl'
import {notFound} from 'next/navigation'
import {routing} from '@/i18n/routing'

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
    'business license application'
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png'
  },
  manifest: '/manifest.json'
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

type Props = {
  children: React.ReactNode
  params: {locale: string}
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = params
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  const messages = (await import(`../../messages/${locale}.json`)).default

  return (
    <html lang={locale}>
      <head>
        <style>{`:root{--header-height:72px;}`}</style>
        <StructuredData />
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`
            if ('scrollRestoration' in history) {
              history.scrollRestoration = 'manual'
            }
            const main = document.getElementById('main')
            if (main) {
              main.scrollTo({ top: 0, left: 0, behavior: 'auto' })
            } else {
              window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
            }
          `}
        </Script>
      </head>
      <body className={`${fontTH.variable} ${fontEN.variable} font-[var(--font-th)] overflow-x-hidden overflow-y-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main
            id="main"
            style={{ paddingTop: 'var(--header-height)', height: 'calc(100dvh - var(--header-height))' }}
            className="pt-[var(--header-height)] h-[calc(100dvh-var(--header-height))] box-content overflow-y-auto overflow-x-hidden scroll-smooth scroll-pt-[var(--header-height)]"
          >
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
