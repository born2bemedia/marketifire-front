'use client';

import type { PreviewInsight } from '@/features/insights/lib';

import { InsightCard } from '../insight-card';
import st from './insights-list.module.scss';

export function InsightsList({ values }: { values: PreviewInsight[] }) {
  return (
    <section className={st.layout}>
      {values.map(item => (
        <InsightCard key={item.slug} info={item} />
      ))}
    </section>
  );
}
