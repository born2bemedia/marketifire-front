import type { Metadata } from 'next';

import { Consultation } from './components/consultation';
import { Hero } from './components/hero';
import { Solutions } from './components/solutions';
import { SuccessFramework } from './components/success-framework';

export const metadata: Metadata = {
  title: 'Tailored Solutions | Industry-Specific Consulting for Entrepreneurs',
  description:
    'Explore our industry-specific consulting services to meet your unique business needs and help you thrive in competitive markets.',
  openGraph: {
    title:
      'Tailored Solutions | Industry-Specific Consulting for Entrepreneurs',
    description:
      'Explore our industry-specific consulting services to meet your unique business needs and help you thrive in competitive markets.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default function TailoredSolutions() {
  return (
    <>
      <Hero />
      <Solutions />
      <SuccessFramework />
      <Consultation />
    </>
  );
}
