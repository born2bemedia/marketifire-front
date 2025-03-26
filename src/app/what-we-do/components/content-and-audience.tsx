'use client';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  ComputerTower,
  Envelope,
  Headset,
  MobileCamera,
  MonitorPlay,
  Smiley,
  User,
  UserSound,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from './info-block';

const strategies: DataGridDef[] = [
  {
    title: 'Social Media & Community Growth',
    desc: 'Growing your social presence and creating active, engaged communities.',
    icon: MobileCamera,
    iconBg: 'yellow',
  },
  {
    title: 'Influencer & Affiliate Marketing',
    desc: 'Leveraging trusted influencers and affiliates to extend your reach.',
    icon: User,
    iconBg: 'grey',
  },
  {
    title: 'High-Impact Content Creation & Storytelling',
    desc: 'Crafting content that informs, engages, and converts your audience.',
    icon: UserSound,
    iconBg: 'yellow',
  },
  {
    title: 'Email & CRM Optimization',
    desc: 'Nurturing customer relationships with targeted email marketing and CRM strategies.',
    icon: Envelope,
    iconBg: 'grey',
  },
  {
    title: 'Blogging & Thought Leadership',
    desc: 'Positioning your brand as an industry authority through consistent, high-quality content.',
    icon: Smiley,
    iconBg: 'grey',
  },
  {
    title: 'Video Content Strategy',
    desc: 'Creating engaging video content that resonates and drives conversions.',
    icon: MonitorPlay,
    iconBg: 'yellow',
  },
  {
    title: 'Social Media Ad Campaigns',
    desc: 'Leveraging platforms like Facebook, Instagram, and LinkedIn to generate targeted leads.',
    icon: ComputerTower,
    iconBg: 'grey',
  },
  {
    title: 'Customer Testimonial & Case Study Creation',
    desc: 'Showcasing your success through compelling customer stories.',
    icon: Headset,
    iconBg: 'grey',
  },
];

export function ContentAndAudience() {
  return (
    <InfoBlock
      number="04"
      annotation="Creating meaningful content that resonates with your audience is key to building relationships and driving conversions. We help you build a strong brand presence and engage with your audience through impactful, high-quality content."
      subAnnotation="Our services include:"
      title="Content & Audience Engagement"
      values={strategies}
    />
  );
}
