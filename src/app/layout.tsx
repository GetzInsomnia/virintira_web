import './globals.css'
import { Prompt, Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import StructuredData from '@/components/StructuredData'

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

export const metadata = {
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
  ],
  icons: '/favicon.ico',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <StructuredData />
      </head>
      <body className={`${fontTH.variable} ${fontEN.variable} font-[var(--font-th)] overflow-y-scroll scroll-smooth`}>
        <Navbar />
        <main className="pt-[72px] h-[calc(100vh-0px)] overflow-y-auto snap-y snap-mandatory scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  )
}
