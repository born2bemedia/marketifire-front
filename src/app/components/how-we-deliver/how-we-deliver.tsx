'use client';

import Link from 'next/link';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './how-we-deliver.module.scss';

const results = [
  {
    title: 'How does Marketfire help individuals grow?',
    desc: 'We provide customized business and marketing strategies for individuals, freelancers, and entrepreneurs who want to enhance their personal brand, attract clients, and increase revenue through data-driven consulting.',
  },
  {
    title: 'Who can benefit from Marketfire’s services?',
    desc: 'We specialize in helping professionals, digital creators, consultants, and solopreneurs optimize their marketing, sales, and business growth strategies. Whether you’re launching your brand or scaling an existing one, we create actionable solutions that work.',
  },
  {
    title: 'Do you offer ongoing support and strategy updates?',
    desc: 'Absolutely! We provide continuous optimization, analytics tracking, and performance reporting to ensure your long-term success. Our services evolve with your goals, so you always have the most effective strategies.',
  },
  {
    title: 'Can I get a fully personalized marketing plan?',
    desc: 'Yes! Every strategy we create suits your unique needs, target audience, and growth stage. We analyze your market, define opportunities, and provide step-by-step guidance to help you achieve sustainable success.',
  },
];

export function HowWeDeliver() {
  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Tag color="white">
          <Asterisk />
          <Text>Our Approach to Measurable Success</Text>
        </Tag>
        <Title level={2}>Explore How We Deliver Results</Title>
      </section>
      <section className={st.cards}>
        {results.map((item, i) => (
          <Card key={item.title} number={++i} {...item} />
        ))}
      </section>
      <section className={st.contactsBtn}>
        <Text>Have More Questions? Get in Touch!</Text>
        <Link href="/contacts">
          <Button variant="black" size="md">
            Drop Us a Message
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
