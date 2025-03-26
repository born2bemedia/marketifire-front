'use client';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  Atom,
  CalendarDots,
  ChartLineUp,
  Chat,
  Code,
  Faders,
  GitDiff,
  GridFour,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from './info-block';

const strategies: DataGridDef[] = [
  {
    title: 'AI & Marketing Automation',
    desc: 'Using AI-driven tools to automate marketing processes and save time.',
    icon: Atom,
    iconBg: 'grey',
  },
  {
    title: 'CRM & Customer Journey Optimization',
    desc: 'Designing customer journeys that lead to long-term loyalty and growth.',
    icon: CalendarDots,
    iconBg: 'grey',
  },
  {
    title: 'Chatbot & Lead Nurturing Flows',
    desc: 'Implementing automated systems for customer support and lead nurturing.',
    icon: Chat,
    iconBg: 'grey',
  },
  {
    title: 'Performance Analytics & Reporting',
    desc: 'Monitoring and analyzing key metrics to improve and refine strategies.',
    icon: ChartLineUp,
    iconBg: 'grey',
  },
  {
    title: 'Sales Process Automation',
    desc: 'Streamlining your sales funnel to boost efficiency and close rates.',
    icon: Faders,
    iconBg: 'yellow',
  },
  {
    title: 'Customer Data Integration',
    desc: 'Combining your data sources to create a single view of your customer journey.',
    icon: GitDiff,
    iconBg: 'grey',
  },
  {
    title: 'Workflow Automation',
    desc: 'Automating internal business processes to save time and increase productivity.',
    icon: GridFour,
    iconBg: 'yellow',
  },
  {
    title: 'Custom API Development',
    desc: 'Integrating different tools and platforms to create a cohesive workflow for your business.',
    icon: Code,
    iconBg: 'yellow',
  },
];

export function AutomationAndDigitalTransform() {
  return (
    <InfoBlock
      number="05"
      annotation="Stay ahead of the competition with cutting-edge automation and digital transformation solutions. We help you implement advanced tools and technology to streamline operations, enhance customer journeys, and scale seamlessly."
      subAnnotation="Our services include:"
      title="Automation & Digital Transformation"
      values={strategies}
    />
  );
}
