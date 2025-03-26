import { GetFreeConsultation } from '@/shared/ui/components/get-free-consultation';

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
import st from './page.module.scss';
import { PulsingEllipse } from '@/app/request-form/components';

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
      <GetFreeConsultation
        text={
          <>
            At Marketfire, we are committed to providing you with the tools,
            expertise, and strategies to grow your business and achieve
            measurable success.
            <br />
            <br />
            Ready to get started? Book a free consultation, and let’s create a
            tailored strategy that’s perfect for your goals. Together, we can
            unlock your business’s potential and set the stage for long-term
            success.
          </>
        }
        nav={{
          url: '/pricing-and-packages',
          label: 'Schedule a Free Strategy Session Today',
        }}
      />
    </main>
  );
}
