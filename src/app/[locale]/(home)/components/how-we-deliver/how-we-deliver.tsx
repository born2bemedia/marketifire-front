'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './how-we-deliver.module.scss';

export function HowWeDeliver() {
  const t = useTranslations('home.howWeDeliver');

  const results = [
    {
      title: t('cards.0.title'),
      desc: t('cards.0.desc'),
    },
    {
      title: t('cards.1.title'),
      desc: t('cards.1.desc'),
    },
    {
      title: t('cards.2.title'),
      desc: t('cards.2.desc'),
    },
    {
      title: t('cards.3.title'),
      desc: t('cards.3.desc'),
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Tag color="white">
          <Asterisk />
          <Text>{t('tag')}</Text>
        </Tag>
        <Title level={2}>{t('title')}</Title>
      </section>
      <section className={st.cards}>
        {results.map((item, i) => (
          <Card key={item.title} number={++i} {...item} />
        ))}
      </section>
      <section className={st.contactsBtn}>
        <Text>{t('label')}</Text>
        <Link href="/contacts">
          <Button variant="black" size="md">
            {t('btnLabel')}
          </Button>
        </Link>
      </section>
    </section>
  );
}

function Card({
  title,
  desc,
  number,
}: {
  title: string;
  desc: string;
  number: number;
}) {
  return (
    <article
      className={st.cardLayout}
      style={{
        top: `calc(10px + ${(number - 1) * 120}px)`,
      }}
    >
      <div className={st.cardNumber}>0{number}</div>
      <section className={st.cardInfo}>
        <Title level={3}>{title}</Title>
        <Text>{desc}</Text>
      </section>
    </article>
  );
}
