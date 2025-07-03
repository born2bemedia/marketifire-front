import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Policy } from '@/features/policies/components/policy';

export const metadata: Metadata = {
  title:
    'Terms and Conditions | Business & Marketing Consulting for Entrepreneurs',
  description:
    'Unlock your business’s potential with Marketifire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
  openGraph: {
    title:
      'Terms and Conditions | Business & Marketing Consulting for Entrepreneurs',
    description:
      'Unlock your business’s potential with Marketifire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default async function TermsAndConditions({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('policies');

  return (
    <Policy
      title={t('termsAndConditions')}
      id="1"
      locale={(await params).locale}
    />
  );
}
