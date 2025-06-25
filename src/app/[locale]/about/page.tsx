import type { Metadata } from 'next';

import { ContactBlock } from './components/contact-block';
import { Hero } from './components/hero';
import { MarketfireApproach } from './components/marketfire-approach';
import { OurMission } from './components/our-mission';
import { WhatSetsApart } from './components/what-sets-apart';
import { WhoWeWorkWith } from './components/who-we-work-with';

export const metadata: Metadata = {
  title: 'About Marketifire | Business & Marketing Experts for Entrepreneurs',
  description:
    'Learn more about Marketifire and how we help entrepreneurs grow their brands with data-driven strategies, innovative solutions, and personalized marketing.',
  openGraph: {
    title: 'About Marketifire | Business & Marketing Experts for Entrepreneurs',
    description:
      'Learn more about Marketifire and how we help entrepreneurs grow their brands with data-driven strategies, innovative solutions, and personalized marketing.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default function About() {
  return (
    <main>
      <Hero />
      <OurMission />
      <WhatSetsApart />
      <WhoWeWorkWith />
      <MarketfireApproach />
      <ContactBlock />
    </main>
  );
}
