import type { Metadata } from 'next';

import { Modal } from '@/features/request-popup/components/modal/modal';

import {
  automationDigitalTransformation,
  businessConsulting,
  contentEngagement,
  marketingAndGrowth,
  packages,
  performanceMarketing,
  strategicGrowth,
} from '@/shared/lib/pricing';

import { DownloadPrice } from './components/download-price';
import { Hero } from './components/hero';
import Pricing from './components/pricing/pricing';
import { ServicePackages } from './components/service-packages';

export const metadata: Metadata = {
  title: 'Pricing & Packages | Customized Marketing & Business Solutions',
  description:
    'Explore our pricing options and service packages designed to fit your business needs and help you achieve your growth goals efficiently.',
  openGraph: {
    title: 'Pricing & Packages | Customized Marketing & Business Solutions',
    description:
      'Explore our pricing options and service packages designed to fit your business needs and help you achieve your growth goals efficiently.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default function PricingAndPackages() {
  return (
    <main>
      <Hero />
      <Pricing
        categoryLabel="01"
        categoryTitle="Marketing & Growth Strategies"
        pricingItems={marketingAndGrowth}
      />
      <Pricing
        categoryLabel="02"
        categoryTitle="Performance Marketing & Conversion Optimization"
        pricingItems={performanceMarketing}
      />
      <Pricing
        categoryLabel="03"
        categoryTitle="Business Consulting & Expansion Planning"
        pricingItems={businessConsulting}
      />
      <Pricing
        categoryLabel="04"
        categoryTitle="Content & Audience Engagement"
        pricingItems={contentEngagement}
      />
      <Pricing
        categoryLabel="05"
        categoryTitle="Automation & Digital Transformation"
        pricingItems={automationDigitalTransformation}
      />
      <Pricing
        categoryLabel="06"
        categoryTitle="Strategic Growth & Competitive Edge"
        pricingItems={strategicGrowth}
      />
      <ServicePackages packages={packages} />
      <DownloadPrice />
      <Modal />
    </main>
  );
}
