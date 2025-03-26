import type { Metadata } from 'next';

import { CtaBlock } from '@/shared/ui/components/cta-block';

import { Cases } from './components/cases';
import { Hero } from './components/hero';
import { Testimonials } from './components/testimonials';

export const metadata: Metadata = {
  title: 'Case Studies | Proven Success in Business & Marketing',
  description:
    'Read our case studies to see how we’ve helped entrepreneurs achieve measurable success through our strategic marketing and business consulting services.',
  openGraph: {
    title: 'Case Studies | Proven Success in Business & Marketing',
    description:
      'Read our case studies to see how we’ve helped entrepreneurs achieve measurable success through our strategic marketing and business consulting services.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default function TailoredSolutions() {
  return (
    <>
      <Hero />
      <Cases />
      <Testimonials />
      <CtaBlock
        title="Ready to Take Your Business to the Next Level?"
        text="At Marketfire, we specialize in helping entrepreneurs grow their personal brands, attract clients, and achieve long-term success. These case studies are just a glimpse of our impact on our clients’ businesses."
        link="/request-form"
        buttonText="Schedule a Free Strategy Session Today"
      />
    </>
  );
}
