import type { Metadata } from 'next';

import { CtaBlock } from '@/shared/ui/components/cta-block';

import { Hero } from './components/hero';
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
      <SuccessFramework />
      <CtaBlock
        title="Let’s Tailor a Strategy for Your Industry"
        text="No two industries are the same — and neither are our solutions. Let’s build a strategy for your unique business, market, and goals. <br /><br /> Get in touch today to discuss your industry-specific growth plan."
        link="/request-form"
        buttonText="Get Your Free Consultation Today"
      />
    </>
  );
}
