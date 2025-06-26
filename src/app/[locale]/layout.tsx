import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales, Locale } from '../../../i18n';
import '../globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/navbar/Navbar';
import StructuredData from '@/components/StructuredData';
import Footer from '@/components/Footer';
import Script from 'next/script';
import type { Metadata } from 'next';

const fontTH = localFont({
  variable: '--font-th',
  src: [
    {
      path: '../../../public/fonts/Prompt/Prompt-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../../public/fonts/Prompt/Prompt-Bold.ttf',
      weight: '700'
    }
  ]
});

const fontEN = localFont({
  variable: '--font-en',
  src: [
    {
      path: '../../../public/fonts/Inter/static/Inter_24pt-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../../public/fonts/Inter/static/Inter_24pt-Bold.ttf',
      weight: '700'
    }
  ]
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: t('meta.title'),
    description: t('meta.description'),
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

function LocaleLayoutContent({ 
  children, 
  locale 
}: { 
  children: ReactNode; 
  locale: string 
}) {
  const messages = useMessages();

    return (
      <html key={locale} lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
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
        <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
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

export default async function LocaleLayout({ 
  children, 
  params 
}: { 
  children: ReactNode; 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  
  // ตรวจสอบว่า locale ถูกต้องหรือไม่
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <LocaleLayoutContent locale={locale}>{children}</LocaleLayoutContent>;
} 