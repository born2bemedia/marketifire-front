'use client';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  Eye,
  Handshake,
  Linktree,
  MagnifyingGlass,
  MapPin,
  MobileCamera,
  Strategy,
  Users,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from '@/app/what-we-do/components/info-block';

const strategies: DataGridDef[] = [
  {
    title: 'Market Research & Competitive Analysis',
    desc: 'Deep insights into your industry and competitors.',
    icon: MagnifyingGlass,
    iconBg: 'grey',
  },
  {
    title: 'Brand Positioning & Messaging',
    desc: 'Crafting your unique value proposition for maximum impact.',
    icon: Linktree,
    iconBg: 'grey',
  },
  {
    title: 'Digital & Traditional Advertising',
    desc: 'Multi-channel campaigns that engage and convert.',
    icon: MobileCamera,
    iconBg: 'grey',
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Comprehensive plans for successful product introductions.',
    icon: Strategy,
    iconBg: 'yellow',
  },
  {
    title: 'Customer Segmentation Strategy',
    desc: 'Identifying key customer segments to target with tailored marketing.',
    icon: Users,
    iconBg: 'grey',
  },
  {
    title: 'Brand Identity Design',
    desc: 'Crafting a unique visual and verbal identity for your business.',
    icon: Eye,
    iconBg: 'grey',
  },
  {
    title: 'Local Market Penetration',
    desc: 'Targeting regional and local markets for stronger community engagement.',
    icon: MapPin,
    iconBg: 'grey',
  },
  {
    title: 'Strategic Partnership Development',
    desc: 'Identifying and forming valuable partnerships to scale your brand.',
    icon: Handshake,
    iconBg: 'yellow',
  },
];

export function MarketingAndGrowthStrategies() {
  return (
    <InfoBlock
      number="01"
      annotation="We design customized strategies that drive brand visibility, customer
          acquisition, and market expansion. Our approach ensures that every
          step we take aligns with your specific goals, helping you reach your
          target audience and grow your presence."
      subAnnotation="Our services include:"
      title="Marketing & Growth Strategies"
      values={strategies}
    />
  );
}
