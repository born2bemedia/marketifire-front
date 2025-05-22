'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { PreviewInsight } from '@/features/insights/lib';

import { ArrowRight } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './insight-card.module.scss';

export function InsightCard({ info }: { info: PreviewInsight }) {
  return (
    <article className={st.layout}>
      <section className={st.imgLayout}>
        <Image className={st.img} src={info.thumbnail} alt="thumnnail" fill />
      </section>
      <section>
        <Title level={3}>{info.title}</Title>
        <Text color="black60" className={st.text}>
          {info.excerpt}
          {info.excerpt}
        </Text>
      </section>
      <Link href={`/insights/${info.slug}`}>
        <Button variant="yellow" className={st.btn}>
          Read More <ArrowRight color="black" />
        </Button>
      </Link>
    </article>
  );
}
