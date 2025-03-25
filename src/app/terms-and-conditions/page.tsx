import type { Metadata } from 'next';

import { Policy } from '@/features/policies/components/policy';

export const metadata: Metadata = {
  title:
    'Terms and Conditions | Business & Marketing Consulting for Entrepreneurs',
  description:
    'Unlock your business’s potential with Marketfire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
  openGraph: {
    title:
      'Terms and Conditions | Business & Marketing Consulting for Entrepreneurs',
    description:
      'Unlock your business’s potential with Marketfire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default async function TermsAndConditions() {
  return <Policy title="Terms and Conditions" id="1" />;
}
