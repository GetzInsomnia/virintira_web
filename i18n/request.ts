import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, Locale } from '../i18n';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locales.includes(locale as Locale) ? locale : defaultLocale;
  
  // Import messages ทั้งหมด
  const [commonMessages, homeMessages, promotionMessages] = await Promise.all([
    import(`../src/messages/${validLocale}/common.json`),
    import(`../src/messages/${validLocale}/home.json`),
    import(`../src/messages/${validLocale}/promotion.json`)
  ]);

  // รวม messages ทั้งหมด
  const messages = {
    ...commonMessages.default,
    ...homeMessages.default,
    ...promotionMessages.default
  };

  return {
    locale: validLocale as string,
    messages
  };
}); 