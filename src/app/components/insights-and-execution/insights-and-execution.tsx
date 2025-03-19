'use client';

import { WhyOptions } from '@/shared/ui/components/why-options';

const stats = [
  { title: '+40%', desc: 'Avg. Increase in Customer Retention for Clients' },
  { title: '2X', desc: 'Higher Engagement Rates in Digital Campaigns' },
  {
    title: '85%',
    desc: 'Faster ROI on Marketing Investment with Data-Driven Plans',
  },
];

export function InsightsAndExecution() {
  return (
    <WhyOptions
      title="Success Built on Insights & Execution"
      annotation="Marketfire creates scalable marketing solutions that help businesses generate leads, nurture customers, and drive higher lifetime value."
      footerText="Your Growth Starts Now – Let’s Build a Plan That Works!"
      cards={stats}
    />
  );
}
