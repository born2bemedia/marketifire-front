import type { Metadata } from 'next';

import {
  Hero,
  HowWeDeliver,
  InsightsAndExecution,
  OurServiceOfferings,
  ProvidedServices,
  SeamlessSuccess,
  SeeOurImpact,
  TransformYourBusiness,
  WhyBusinessesTrust,
} from './components';

export const metadata: Metadata = {
  title: 'Marketfire | Business & Marketing Consulting for Entrepreneurs',
  description:
    'Unlock your business’s potential with Marketfire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
  openGraph: {
    title: 'Marketfire | Business & Marketing Consulting for Entrepreneurs',
    description:
      'Unlock your business’s potential with Marketfire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProvidedServices />
      <TransformYourBusiness />
      <OurServiceOfferings />
      <WhyBusinessesTrust />
      <SeeOurImpact />
      <SeamlessSuccess />
      <InsightsAndExecution />
      <HowWeDeliver />
    </main>
  );
}
