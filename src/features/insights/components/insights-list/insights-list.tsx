'use client';

import type { Insight } from '@/features/insights/lib';

import { InsightCard } from '../insight-card';
import st from './insights-list.module.scss';

export function InsightsList({ values }: { values: Insight[] }) {
  return (
    <section className={st.layout}>
      {values.map(item => (
        <InsightCard key={item.slug} info={item} />
      ))}
    </section>
  );
}
