import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Policy } from '@/features/policies/components';

export const metadata: Metadata = {
  title: 'Cookie Policy | Business & Marketing Consulting for Entrepreneurs',
  description:
    'Unlock your business’s potential with Marketifire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
  openGraph: {
    title: 'Cookie Policy | Business & Marketing Consulting for Entrepreneurs',
    description:
      'Unlock your business’s potential with Marketifire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default async function CookiePolicy() {
  const t = await getTranslations('policies');

  return <Policy title={t('cookiePolicy')} id="4" />;
}
