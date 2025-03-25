import type { Metadata } from 'next';

import { InsightsList } from '@/features/insights/components';
import { insightsMapping } from '@/features/insights/lib';
import { getInsights } from '@/features/insights/services';

import { GetFreeConsultation, Hero } from './components';
import st from './page.module.scss';
import { PulsingEllipse } from '@/app/request-form/components';

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
      <GetFreeConsultation />
    </main>
  );
}
