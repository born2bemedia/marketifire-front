'use client';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  Aperture,
  ArrowsIn,
  BezierCurve,
  CardThree,
  CheckSquare,
  Eyes,
  MoneyWavy,
  Users,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from './info-block';

const strategies: DataGridDef[] = [
  {
    title: 'Market Entry & Expansion Strategies',
    desc: 'Comprehensive plans for entering new markets or launching new products.',
    icon: ArrowsIn,
    iconBg: 'yellow',
  },
  {
    title: 'Customer Acquisition & Retention Plans',
    desc: 'Building sustainable growth through effective lead generation and loyalty tactics.',
    icon: Users,
    iconBg: 'grey',
  },
  {
    title: 'Revenue Model Optimization',
    desc: 'Refining your business model to increase profitability and scalability.',
    icon: Aperture,
    iconBg: 'grey',
  },
  {
    title: 'Business Process Automation',
    desc: 'Streamlining operations to save time and improve efficiency.',
    icon: CardThree,
    iconBg: 'grey',
  },
  {
    title: 'Strategic Business Planning',
    desc: 'Helping you define your growth and long-term success roadmap.',
    icon: CheckSquare,
    iconBg: 'grey',
  },
  {
    title: 'Financial Forecasting & Budgeting',
    desc: 'Projecting and managing business growth and expenditures effectively.',
    icon: MoneyWavy,
    iconBg: 'grey',
  },
  {
    title: 'Organizational Design & Development',
    desc: 'Structuring your team for maximum productivity and growth.',
    icon: BezierCurve,
    iconBg: 'yellow',
  },
  {
    title: 'Competitive Market Intelligence',
    desc: 'Gathering industry trends, competitor strategies, and market dynamics insights.',
    icon: Eyes,
    iconBg: 'yellow',
  },
];

export function BusinessConsulting() {
  return (
    <InfoBlock
      number="03"
      annotation="Whether you’re looking to expand into new markets or streamline your business processes, our consulting services provide the expertise and strategies you need to scale successfully."
      subAnnotation="Our services include:"
      title="Business Consulting & Expansion Planning"
      values={strategies}
      startFromBig
    />
  );
}
