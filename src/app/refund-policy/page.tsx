import type { Metadata } from 'next';

import { Policy } from '@/features/policies/components';

export const metadata: Metadata = {
  title: 'Refund Policy | Business & Marketing Consulting for Entrepreneurs',
  description:
    'Unlock your business’s potential with Marketfire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
  openGraph: {
    title: 'Refund Policy | Business & Marketing Consulting for Entrepreneurs',
    description:
      'Unlock your business’s potential with Marketfire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default async function RefundPolicy() {
  return <Policy title="Refund Policy" id="3" />;
}
