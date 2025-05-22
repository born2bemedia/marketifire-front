import type { Metadata } from 'next';

import {
  AutomationAndDigitalTransform,
  BusinessConsulting,
  CheckOutOurPricing,
  ContentAndAudience,
  Hero,
  MarketingAndGrowthStrategies,
  PerfomanceOptimization,
  StrategicGrowth,
} from './components';
import { FreeConsultation } from './components/free-consultation';
import st from './page.module.scss';
import { PulsingEllipse } from '@/app/[locale]/request-form/components';
export const metadata: Metadata = {
  title: 'What We Do | Business Consulting & Marketing Services',
  description:
    'Discover the comprehensive services we offer, including marketing strategies, business consulting, and performance optimization tailored to your goals.',
  openGraph: {
    title: 'What We Do | Business Consulting & Marketing Services',
    description:
      'Discover the comprehensive services we offer, including marketing strategies, business consulting, and performance optimization tailored to your goals.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default function WhatWeDo() {
  return (
    <main className={st.layout}>
      <PulsingEllipse />
      <Hero />
      <section className={st.info}>
        <MarketingAndGrowthStrategies />
        <PerfomanceOptimization />
        <BusinessConsulting />
        <ContentAndAudience />
        <AutomationAndDigitalTransform />
        <StrategicGrowth />
      </section>
      <CheckOutOurPricing />
      <FreeConsultation />
    </main>
  );
}
