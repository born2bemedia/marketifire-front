'use client';

import type { JSX } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { StepFour, StepOne, StepThree, StepTwo } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Content } from './content';
import st from './what-sets-apart.module.scss';

const stepIcons: Record<number, () => JSX.Element> = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
  4: StepFour,
};

export function WhatSetsApart() {
  const t = useTranslations('about.whatSetsApart');

  const steps = [
    {
      title: t('steps.0.title'),
      desc: t('steps.0.desc'),
    },
    {
      title: t('steps.1.title'),
      desc: t('steps.1.desc'),
    },
    {
      title: t('steps.2.title'),
      desc: t('steps.2.desc'),
    },
    {
      title: t('steps.3.title'),
      desc: t('steps.3.desc'),
    },
  ];

  return (
    <section className={st.layout}>
      <Content />
      <section className={st.cards}>
        {steps.map(({ title, desc }, i) => (
          <Card key={title} title={title} desc={desc} number={++i} />
        ))}
      </section>
      <div className={st.requestNavMobile}>
        <Text weight={300}>{t('label')}</Text>
        <Link href="/request-form">
          <Button variant="black" size="md">
            {t('btnLabel')}
          </Button>
        </Link>
      </div>
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
  const Icon = stepIcons[number];

  return (
    <section
      className={st.cardContainer}
      style={{
        top: `calc(10px ${number * 50}px)`,
      }}
    >
      <article className={st.card}>
        <div>
          <Title level={2}>{title}</Title>
          <Text color="black60">{desc}</Text>
        </div>
        <div className={st.iconLayout}>
          <Icon />
        </div>
      </article>
    </section>
  );
}
