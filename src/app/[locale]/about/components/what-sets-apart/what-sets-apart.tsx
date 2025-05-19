'use client';

import type { JSX } from 'react';
import Link from 'next/link';

import { StepFour, StepOne, StepThree, StepTwo } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Content } from './content';
import st from './what-sets-apart.module.scss';

const steps = [
  {
    title: 'Tailored Strategies, Not Templates',
    desc: 'Every business is unique, and so are our solutions. No generic approaches — just custom strategies designed for your goals.',
  },
  {
    title: 'Data-Driven Decisions',
    desc: 'We analyze, optimize, and refine every strategy to ensure maximum impact. Numbers don’t lie, and we let the data lead.',
  },
  {
    title: 'End-to-End Expertise',
    desc: 'From market research and content creation to conversion optimization and automation, we cover every aspect of your growth journey.',
  },
  {
    title: 'Your Success is Our Success',
    desc: 'We don’t just consult — we partner with you to execute and achieve measurable results.',
  },
];

const stepIcons: Record<number, () => JSX.Element> = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
  4: StepFour,
};

export function WhatSetsApart() {
  return (
    <section className={st.layout}>
      <Content />
      <section className={st.cards}>
        {steps.map(({ title, desc }, i) => (
          <Card key={title} title={title} desc={desc} number={++i} />
        ))}
      </section>
      <div className={st.requestNavMobile}>
        <Text weight={300}>Ready to Elevate Your Business?</Text>
        <Link href="/request-form">
          <Button variant="black" size="md">
            Get Free Consultation
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
