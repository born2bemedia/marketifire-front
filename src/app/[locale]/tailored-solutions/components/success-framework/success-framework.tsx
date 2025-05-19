'use client';

import { WhyOptions } from '../why-options';

const cards = [
  {
    title: 'Data-Driven Market Positioning',
    desc: 'Understanding where you stand and where you need to be.',
  },
  {
    title: 'Customer Behavior & Trend Analysis',
    desc: 'Identifying key patterns to enhance engagement.',
  },
  {
    title: 'Revenue Optimization Strategies',
    desc: 'Maximizing value through tailored monetization approaches.',
  },
  {
    title: 'Growth & Expansion Roadmaps',
    desc: 'A step-by-step guide to industry dominance.',
  },
];

export function SuccessFramework() {
  return (
    <WhyOptions
      title="Industry-Focused Success Framework"
      annotation="We don’t just create strategies — we develop frameworks that align with your industry’s core success drivers. Whether you want to grow your client base, increase engagement, or refine your business model, we build custom roadmaps that ensure long-term scalability."
      footerText=""
      cards={cards}
      tagText="Crafting Roadmaps for Long-Term Growth"
    />
  );
}
