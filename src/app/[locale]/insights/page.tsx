import type { Metadata } from 'next';

import { InsightsList } from '@/features/insights/components';
import { insightsMapping } from '@/features/insights/lib';
import { getInsights } from '@/features/insights/services';

import { GetFreeConsultation } from '@/shared/ui/components/get-free-consultation';

import { Hero } from './components';
import st from './page.module.scss';
import { PulsingEllipse } from '@/app/[locale]/request-form/components';

export const metadata: Metadata = {
  title: 'Insights | Business & Marketing Tips for Entrepreneurs',
  description:
    'Stay updated with the latest marketing trends, business growth strategies, and actionable advice from Marketifire’s experts to drive your success.',
  openGraph: {
    title: 'Insights | Business & Marketing Tips for Entrepreneurs',
    description:
      'Stay updated with the latest marketing trends, business growth strategies, and actionable advice from Marketifire’s experts to drive your success.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default async function Insights() {
  const res = await getInsights();
  const insights = res.map(insightsMapping);

  return (
    <main className={st.layout}>
      <PulsingEllipse />
      <Hero />
      <InsightsList values={insights} />
      <GetFreeConsultation
        text="Marketfire isn’t just another marketing consultancy — we are your
            partners in growth. Let’s get started today if you’re ready to
            elevate your brand, expand your audience, and drive revenue."
        nav={{
          url: '/request-form',
          label: 'Get Your Free Consultation Today',
        }}
      />
    </main>
  );
}
