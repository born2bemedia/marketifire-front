'use client';

import type { JSX } from 'react';
import Link from 'next/link';

import { StepFour, StepOne, StepThree, StepTwo } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Content } from './content';
import st from './transform-your-business.module.scss';

const steps = [
  {
    title: 'Increase Brand Visibility',
    desc: 'Get noticed where it matters most.',
  },
  {
    title: 'Optimize Lead Generation',
    desc: 'Convert visitors into customers effortlessly.',
  },
  {
    title: 'Enhance Digital Performance',
    desc: 'Maximize marketing ROI with data-backed decisions.',
  },
  {
    title: 'Drive Sustainable Growth',
    desc: 'Build strategies that scale with your business.',
  },
];

const stepIcons: Record<number, () => JSX.Element> = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
  4: StepFour,
};

export function TransformYourBusiness() {
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
    <section className={st.cardContainer}>
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
