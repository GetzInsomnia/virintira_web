import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from '../i18n';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locales.includes(locale as any) ? locale : defaultLocale;
  return {
    locale: validLocale as string,
    messages: (await import(`../src/messages/${validLocale}/common.json`)).default
  };
}); 