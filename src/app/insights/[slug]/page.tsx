import type { Metadata } from 'next';
import Image from 'next/image';

import {
  groupElementsByH3,
  insightsMapping,
  parseJSONToElements,
} from '@/features/insights/lib';
import { getInsight } from '@/features/insights/services';

import { GetFreeConsultation } from '@/shared/ui/components/get-free-consultation';

import { Article, Banner, Hero } from './components';
import st from './page.module.scss';
import { insightsMeta } from '@/app/insights/[slug]/meta';
import { PulsingEllipse } from '@/app/request-form/components';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;

  return {
    title: insightsMeta[awaitedParams.slug].title,
    description: insightsMeta[awaitedParams.slug].description,
    openGraph: {
      title: insightsMeta[awaitedParams.slug].title,
      description: insightsMeta[awaitedParams.slug].description,
      images: 'https://marketifire.com/meta/balloons.png',
    },
  };
}

export default async function Insight({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;

  const res = await getInsight({ slug });
  const insight = res.map(insightsMapping);

  const { elements } = parseJSONToElements(insight[0].content);
  const groupedElements = groupElementsByH3(elements);

  const { elements: desc } = parseJSONToElements(insight[0].excerpt);

  return (
    <main className={st.layout}>
      <section className={st.articleLayout}>
        <PulsingEllipse />
        <Hero title={insight[0].title} description={desc} />
        <Banner>
          <Image
            className={st.img}
            src={insight[0].thumbnail}
            alt="thumb"
            fill
          />
        </Banner>
        <Article>{groupedElements}</Article>
      </section>
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
