import type { Metadata } from 'next';

import { Modal } from '@/features/request-popup/components/modal/modal';

import { StrategicGrowth } from '../what-we-do/components/strategic-growth';
import { BusinessConsulting } from './components/business-consulting';
import { ContentAudience } from './components/content-audience';
import { DigitalTransformation } from './components/digital-transformation';
import { DownloadPrice } from './components/download-price';
import { Hero } from './components/hero';
import { MarketingStrategies } from './components/marketing-strategies';
import { PerfomanceMarketing } from './components/perfomance-marketing';
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
      <MarketingStrategies />
      <PerfomanceMarketing />
      <BusinessConsulting />
      <ContentAudience />
      <DigitalTransformation />
      <StrategicGrowth />
      <ServicePackages />
      <DownloadPrice />
      <Modal />
    </main>
  );
}
