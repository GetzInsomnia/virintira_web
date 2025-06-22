import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales, Locale } from '../../../i18n';
import '../globals.css';
import { Prompt, Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import StructuredData from '@/components/StructuredData';
import Footer from '@/components/Footer';
import Script from 'next/script';
import type { Metadata } from 'next';

const fontTH = Prompt({
  subsets: ['thai'],
  variable: '--font-th',
  weight: ['400', '700']
});

const fontEN = Inter({
  subsets: ['latin'],
  variable: '--font-en',
  weight: ['400', '700']
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: locale === 'th' 
      ? 'สำนักงานบัญชี VIRINTIRA | สำนักงานบัญชีและบริหารธุรกิจครบวงจร'
      : 'VIRINTIRA Accounting Office | Complete Accounting and Business Management Services',
    description: locale === 'th'
      ? 'ให้บริการบัญชี ภาษี จดทะเบียนธุรกิจ และการตลาดออนไลน์'
      : 'Professional accounting, tax, business registration, and online marketing services',
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
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-icon.png',
    },
    manifest: '/manifest.json',
  };
}

export default function LocaleLayout({ 
  children, 
  params: { locale } 
}: { 
  children: ReactNode; 
  params: { locale: string } 
}) {
  // ตรวจสอบว่า locale ถูกต้องหรือไม่
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
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
            style={{
              paddingTop: 'var(--header-height)',
              height: 'calc(100dvh - var(--header-height))',
            }}
            className="pt-[var(--header-height)] h-[calc(100dvh-var(--header-height))] box-content overflow-y-auto overflow-x-hidden scroll-smooth scroll-pt-[var(--header-height)]"
          >
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 