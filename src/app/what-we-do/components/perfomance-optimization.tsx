'use client';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  Article,
  Browsers,
  CardHolder,
  Certificate,
  ChartDonut,
  Chats,
  Ranking,
  TreeStructure,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from './info-block';

const strategies: DataGridDef[] = [
  {
    title: 'SEO & Search Visibility Growth',
    desc: 'Boosting your organic search rankings to attract high-quality traffic.',
    icon: ChartDonut,
    iconBg: 'grey',
  },
  {
    title: 'PPC & Paid Advertising',
    desc: 'Creating highly effective ad campaigns that deliver fast results.',
    icon: CardHolder,
    iconBg: 'grey',
  },
  {
    title: 'Website & Funnel Optimization',
    desc: 'Optimizing user flows to maximize conversions and sales.',
    icon: Browsers,
    iconBg: 'grey',
  },
  {
    title: 'Data-Driven Sales Strategies',
    desc: 'Implementing strategies that guide and convert prospects effectively.',
    icon: TreeStructure,
    iconBg: 'grey',
  },
  {
    title: 'Landing Page Optimization',
    desc: 'Designing high-converting landing pages tailored to your audience.',
    icon: Article,
    iconBg: 'yellow',
  },
  {
    title: 'Retargeting & Remarketing Campaigns',
    desc: 'Re-engaging past visitors to increase conversions.',
    icon: Certificate,
    iconBg: 'yellow',
  },
  {
    title: 'Lead Generation Tactics',
    desc: 'Capturing high-quality leads through smart targeting strategies.',
    icon: Ranking,
    iconBg: 'yellow',
  },
  {
    title: 'A/B Testing & Performance Tracking',
    desc: 'Continuously improving your campaigns with data insights.',
    icon: Chats,
    iconBg: 'grey',
  },
];

export function PerfomanceOptimization() {
  return (
    <InfoBlock
      number="02"
      annotation="Achieving success online means making sure every click and interaction counts. We focus on driving measurable results through optimized campaigns, enhancing your ROI and conversion rates at every customer journey stage."
      subAnnotation="Our services include:"
      title="Performance Marketing & Conversion Optimization"
      values={strategies}
    />
  );
}
