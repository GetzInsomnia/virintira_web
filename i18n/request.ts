import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, Locale } from '../i18n';

export default getRequestConfig(async ({ locale }) => {
  console.log('📥 Request Config Debug:', {
    requestedLocale: locale,
    validLocales: locales,
    defaultLocale: defaultLocale,
    isLocaleValid: locales.includes(locale as Locale),
    timestamp: new Date().toISOString()
  });

  const validLocale = locales.includes(locale as Locale) ? locale : defaultLocale;
  
  console.log('✅ Using locale:', validLocale);
  
  // Import messages ทั้งหมด
  const [commonMessages, homeMessages, promotionMessages] = await Promise.all([
    import(`../src/messages/${validLocale}/common.json`),
    import(`../src/messages/${validLocale}/home.json`),
    import(`../src/messages/${validLocale}/promotion.json`)
  ]);

  console.log('📚 Messages loaded:', {
    commonKeys: Object.keys(commonMessages.default),
    homeKeys: Object.keys(homeMessages.default),
    promotionKeys: Object.keys(promotionMessages.default),
    hasHeroSection: 'hero' in homeMessages.default,
    heroKeys: 'hero' in homeMessages.default ? Object.keys(homeMessages.default.hero) : []
  });

  // รวม messages ทั้งหมด
  const messages = {
    ...commonMessages.default,
    ...homeMessages.default,
    ...promotionMessages.default
  };

  console.log('🎯 Final messages config:', {
    totalKeys: Object.keys(messages).length,
    hasHero: 'hero' in messages,
    heroTitle: 'hero' in messages ? messages.hero.title : 'NOT_FOUND',
    heroSubtitle: 'hero' in messages ? messages.hero.subtitle : 'NOT_FOUND'
  });

  return {
    locale: validLocale as string,
    messages,
    // เพิ่ม timeZone และ now เพื่อป้องกัน caching
    timeZone: 'Asia/Bangkok',
    now: new Date(),
    // เพิ่ม cache control headers
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  };
}); 