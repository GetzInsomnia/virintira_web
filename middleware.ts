import createIntlMiddleware from 'next-intl/middleware';
import {locales, defaultLocale, localePrefix} from './src/i18n';

export default createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
