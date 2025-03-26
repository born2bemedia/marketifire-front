import type { Metadata } from 'next';

import {
  accountBilling,
  customerSupport,
  generalQuestions,
  servicesPricing,
} from '@/shared/lib/faq';

import { FaqSection } from './components/faq-section';
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
      <FaqSection
        number="01"
        title="General Questions"
        faq={generalQuestions}
      />
      <FaqSection
        number="02"
        title="Services & Pricing"
        faq={servicesPricing}
      />
      <FaqSection number="03" title="Account & Billing" faq={accountBilling} />
      <FaqSection
        number="04"
        title="Customer Support & Communication"
        faq={customerSupport}
      />
      <NeedHelp />
    </main>
  );
}
