import type { Metadata } from 'next';

import { Cases } from './components/cases';
import { FreeSession } from './components/free-session';
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

export default function CaseStudies() {
  return (
    <>
      <Hero />
      <Cases />
      <Testimonials />
      <FreeSession />
    </>
  );
}
