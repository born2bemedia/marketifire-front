import type { Metadata } from 'next';

import { Faq } from './components/faq';
import { Hero } from './components/hero';
import { NeedHelp } from './components/need-help';

export const metadata: Metadata = {
  title: 'Help & FAQs | Answers to Your Questions About Marketifire',
  description:
    'Find answers to frequently asked questions about our services, pricing, and how we can help you grow your business.',
  openGraph: {
    title: 'Help & FAQs | Answers to Your Questions About Marketifire',
    description:
      'Find answers to frequently asked questions about our services, pricing, and how we can help you grow your business.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default function HelpAndFaq() {
  return (
    <main>
      <Hero />
      <Faq />
      <NeedHelp />
    </main>
  );
}
