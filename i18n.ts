export const locales = ['th', 'en'] as const;
export const defaultLocale = 'th';
export type Locale = (typeof locales)[number];

// สำหรับรองรับหลายภาษาในอนาคต
export const futureLocales = ['zh', 'ko', 'ja', 'ar', 'hi'] as const;
export type FutureLocale = (typeof futureLocales)[number];

// ข้อมูลภาษา
export const localeInfo = {
  th: { name: 'ไทย', flag: '/flags/th.png', dir: 'ltr' },
  en: { name: 'English', flag: '/flags/en.png', dir: 'ltr' },
  zh: { name: '中文', flag: '/flags/zh.png', dir: 'ltr' },
  ko: { name: '한국어', flag: '/flags/ko.png', dir: 'ltr' },
  ja: { name: '日本語', flag: '/flags/ja.png', dir: 'ltr' },
  ar: { name: 'العربية', flag: '/flags/ar.png', dir: 'rtl' },
  hi: { name: 'हिन्दी', flag: '/flags/hi.png', dir: 'ltr' },
} as const;
