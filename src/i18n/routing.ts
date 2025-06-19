import {defineRouting} from 'next-intl/routing'

export const locales = ['th', 'en'] as const
export const defaultLocale = 'th'

export const routing = defineRouting({
  locales,
  defaultLocale,
})
