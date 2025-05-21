import type { Metadata } from 'next';

import { InsightsList } from '@/features/insights/components';
import { previewInsightMapping } from '@/features/insights/lib';
import { getInsights } from '@/features/insights/services';

import { Hero } from './components';
import { FreeConsultation } from './components/free-consultation';
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

export default async function Insights({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const { locale } = awaitedParams;

  const res = await getInsights({ locale });
  const insights = res.map(previewInsightMapping);

  return (
    <main className={st.layout}>
      <PulsingEllipse />
      <Hero />
      <InsightsList values={insights} />
      <FreeConsultation />
    </main>
  );
}
