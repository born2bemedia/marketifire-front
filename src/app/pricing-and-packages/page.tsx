import {
  automationDigitalTransformation,
  businessConsulting,
  contentEngagement,
  marketingAndGrowth,
  performanceMarketing,
  strategicGrowth,
} from '@/features/request-form/lib/pricing';

import { Hero } from './components/hero';
import Pricing from './components/pricing/pricing';

export default function PricingAndPackages() {
  return (
    <main>
      <Hero />
      <Pricing
        categoryLabel="Innovative Solutions for Unique Challenges"
        categoryTitle="Marketing & Growth Strategies"
        categoryDescription="We don’t believe in one-size-fits-all solutions. At Marketfire, every strategy is custom-built to fit your unique goals. With a data-driven mindset, innovative execution, and a commitment to measurable results, we help you stand out, grow faster, and achieve long-term success."
        pricingItems={marketingAndGrowth}
        index={'01'}
        sectionBackground={'#FFF'}
        cardBackground={'#F5F4F2'}
      />
      <Pricing
        categoryLabel="Innovative Solutions for Unique Challenges"
        categoryTitle="Performance Marketing & Conversion Optimization"
        categoryDescription="We don’t believe in one-size-fits-all solutions. At Marketfire, every strategy is custom-built to fit your unique goals. With a data-driven mindset, innovative execution, and a commitment to measurable results, we help you stand out, grow faster, and achieve long-term success."
        pricingItems={performanceMarketing}
        index={'02'}
        sectionBackground={'#F5F4F2'}
        cardBackground={'#FFF'}
      />
      <Pricing
        categoryLabel="Innovative Solutions for Unique Challenges"
        categoryTitle="Business Consulting & Expansion Planning"
        categoryDescription="We don’t believe in one-size-fits-all solutions. At Marketfire, every strategy is custom-built to fit your unique goals. With a data-driven mindset, innovative execution, and a commitment to measurable results, we help you stand out, grow faster, and achieve long-term success."
        pricingItems={businessConsulting}
        index={'03'}
        sectionBackground={'#FFF'}
        cardBackground={'#E4E3D5'}
      />
      <Pricing
        categoryLabel="Innovative Solutions for Unique Challenges"
        categoryTitle="Content & Audience Engagement"
        categoryDescription="We don’t believe in one-size-fits-all solutions. At Marketfire, every strategy is custom-built to fit your unique goals. With a data-driven mindset, innovative execution, and a commitment to measurable results, we help you stand out, grow faster, and achieve long-term success."
        pricingItems={contentEngagement}
        index={'04'}
        sectionBackground={'#E4E3D5'}
        cardBackground={'#FFF'}
      />
      <Pricing
        categoryLabel="Innovative Solutions for Unique Challenges"
        categoryTitle="Automation & Digital Transformation"
        categoryDescription="We don’t believe in one-size-fits-all solutions. At Marketfire, every strategy is custom-built to fit your unique goals. With a data-driven mindset, innovative execution, and a commitment to measurable results, we help you stand out, grow faster, and achieve long-term success."
        pricingItems={automationDigitalTransformation}
        index={'05'}
        sectionBackground={'#fff'}
        cardBackground={'#F3FF97'}
      />
      <Pricing
        categoryLabel="Innovative Solutions for Unique Challenges"
        categoryTitle="Strategic Growth & Competitive Edge"
        categoryDescription="We don’t believe in one-size-fits-all solutions. At Marketfire, every strategy is custom-built to fit your unique goals. With a data-driven mindset, innovative execution, and a commitment to measurable results, we help you stand out, grow faster, and achieve long-term success."
        pricingItems={strategicGrowth}
        index={'06'}
        sectionBackground={'#F3FF97'}
        cardBackground={'#fff'}
      />
    </main>
  );
}
