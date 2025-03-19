'use client';

import { WhyOptions } from '@/shared/ui/components/why-options';

const cards = [
  {
    title: '+200%',
    desc: 'Avg. Increase in Client Online Engagement',
  },
  {
    title: '+35%',
    desc: 'Reduction in Marketing Spend Waste',
  },
  {
    title: '96%',
    desc: 'Avg. Increase in Client Online Engagement',
  },
  {
    title: '+50%',
    desc: 'Growth in Qualified Leads for Startups',
  },
];

export function WhyBusinessesTrust() {
  return (
    <WhyOptions
      title="Why Businesses Trust Marketfire?"
      annotation="We may be a young agency but we bring industry expertise, innovative solutions, and results-driven strategies that businesses trust."
      footerText="Your Growth, Our Priority. Let’s Make It Happen!"
      cards={cards}
    />
  );
}
