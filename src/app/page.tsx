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
  title: 'Marketifire | Business & Marketing Consulting for Entrepreneurs',
  description:
    'Unlock your business’s potential with Marketifire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
  openGraph: {
    title: 'Marketifire | Business & Marketing Consulting for Entrepreneurs',
    description:
      'Unlock your business’s potential with Marketifire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
    images: 'https://marketifire.com/meta/lg.png',
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
