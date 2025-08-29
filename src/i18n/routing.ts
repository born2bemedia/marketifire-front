import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['sk', 'en', 'de', 'it'],
  defaultLocale: 'sk',
});
