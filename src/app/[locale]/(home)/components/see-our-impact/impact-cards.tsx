'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './see-our-impact.module.scss';

export function ImpactCards() {
  const t = useTranslations('home.seeOurImpact.cards');

  const cards = [
    {
      title: t('0.title'),
      desc: t('0.desc'),
      imgPath: '/home/our-impact-1.png',
    },
    {
      title: t('1.title'),
      desc: t('1.desc'),
      imgPath: '/home/our-impact-2.png',
    },
    {
      title: t('2.title'),
      desc: t('2.desc'),
      imgPath: '/home/our-impact-3.png',
    },
    {
      title: t('3.title'),
      desc: t('3.desc'),
      imgPath: '/home/our-impact-4.png',
    },
  ];

  return (
    <section className={st.cards}>
      {cards.map((card, index) => (
        <Card key={card.title} {...card} index={index} />
      ))}
    </section>
  );
}

function Card({
  title,
  desc,
  imgPath,
  index,
}: {
  title: string;
  desc: string;
  imgPath: string;
  index: number;
}) {
  return (
    <article
      className={st.cardLayout}
      style={{
        top: `calc(10px + ${index * 50}px)`,
      }}
    >
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
