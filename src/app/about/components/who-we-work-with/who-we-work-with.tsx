'use client';

import { WhyOptions } from '../why-options';

const cards = [
  {
    title: 'Entrepreneurs & Startups',
    desc: 'Launch, grow, and confidently establish your brand.',
  },
  {
    title: 'Consultants & Experts',
    desc: 'Position yourself as a leader in your field and attract the right audience.',
  },
  {
    title: 'Freelancers & Solopreneurs',
    desc: 'Avg. Increase in Client Online Engagement',
  },
  {
    title: 'Personal Brands & Creators',
    desc: 'Growth in Qualified Leads for Startups',
  },
];

export function WhoWeWorkWith() {
  return (
    <WhyOptions
      title="Who We Work With"
      annotation="Marketfire is designed for individuals, professionals, and businesses looking for clear, effective, and sustainable growth strategies. Whether you’re just starting or looking to scale, we provide the tools, expertise, and insights to help you succeed in a competitive landscape."
      footerText=""
      cards={cards}
      tagText="Text"
    />
  );
}
