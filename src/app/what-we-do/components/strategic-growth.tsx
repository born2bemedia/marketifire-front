'use client';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  BluePrint,
  Briefcase,
  ChartBar,
  ChartPie,
  HandCoins,
  HandGrabbing,
  IntersectThree,
  UsersThree,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from './info-block';

const strategies: DataGridDef[] = [
  {
    title: 'Personal Brand & Omni-Channel Growth',
    desc: 'Helping individuals build and scale their personal brands across all channels.',
    icon: ChartBar,
    iconBg: 'yellow',
  },
  {
    title: 'Lead Building & Audience Retention Strategies',
    desc: 'Developing strategies to attract new leads and maintain lasting relationships.',
    icon: ChartPie,
    iconBg: 'grey',
  },
  {
    title: 'Sales Strategies for Entrepreneurs',
    desc: 'Tailored sales tactics to help you grow and scale your business.',
    icon: Briefcase,
    iconBg: 'grey',
  },
  {
    title: 'Tailored Marketing & Monetization Plans',
    desc: 'Creating strategies that maximize your business’s profitability and growth potential.',
    icon: HandCoins,
    iconBg: 'grey',
  },
  {
    title: 'Business Valuation & Exit Strategy',
    desc: 'Planning for your long-term business goals and potential exit.',
    icon: BluePrint,
    iconBg: 'grey',
  },
  {
    title: 'Strategic Partnership & Collaboration',
    desc: 'Identifying opportunities for alliances to help you scale.',
    icon: HandGrabbing,
    iconBg: 'grey',
  },
  {
    title: 'Market Differentiation Strategy',
    desc: 'Helping you stand out in a crowded market with unique selling propositions.',
    icon: IntersectThree,
    iconBg: 'yellow',
  },
  {
    title: 'Long-Term Growth & Sustainability Plans',
    desc: 'Building strategies for continuous innovation and sustained growth.',
    icon: UsersThree,
    iconBg: 'yellow',
  },
];

export function StrategicGrowth() {
  return (
    <InfoBlock
      number="06"
      annotation="Achieving sustainable growth requires a strategic approach that builds long-term value. We help you stay competitive by offering personalized growth plans that focus on scalability, revenue generation, and market positioning."
      subAnnotation="Our services include:"
      title="Strategic Growth & Competitive Edge"
      values={strategies}
      startFromBig
    />
  );
}
