'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './see-our-impact.module.scss';

const cards = [
  {
    title: 'Real Insights, Not Guesswork',
    desc: 'Every strategy is backed by data.',
    imgPath: '/home/our-impact-1.png',
  },
  {
    title: 'Adaptive & Scalable',
    desc: 'Designed for growth at every stage.',
    imgPath: '/home/our-impact-2.png',
  },
  {
    title: 'Optimized for ROI',
    desc: 'Reduce costs and maximize results.',
    imgPath: '/home/our-impact-3.png',
  },
  {
    title: 'Actionable Execution',
    desc: 'We help implement, not just advise.',
    imgPath: '/home/our-impact-4.png',
  },
];

export function ImpactCards() {
  return (
    <section className={st.cards}>
      {cards.map(card => (
        <Card key={card.title} {...card} />
      ))}
    </section>
  );
}

function Card({
  title,
  desc,
  imgPath,
}: {
  title: string;
  desc: string;
  imgPath: string;
}) {
  return (
    <article className={st.cardLayout}>
      <Title level={3}>{title}</Title>
      <Text color="black60" size="2xl" className={st.text}>
        {desc}
      </Text>
      <Image
        src={imgPath}
        className={st.imgBorder}
        alt={title}
        width={566}
        height={344}
      />
    </article>
  );
}
