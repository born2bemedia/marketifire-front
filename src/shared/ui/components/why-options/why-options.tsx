'use client';

import Link from 'next/link';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './why-options.module.scss';

export function WhyOptions({
  cards,
  annotation,
  title,
  footerText,
  tagText,
}: {
  title: string;
  annotation: string;
  footerText: string;
  cards: { title: string; desc: string }[];
  tagText?: string;
}) {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Tag color="yellow">
          <Asterisk />
          <Text>{tagText}</Text>
        </Tag>
        <Title level={2}>{title}</Title>
        <Text className={st.text}>{annotation}</Text>
      </section>
      <section className={st.cards}>
        {cards.map(card => (
          <Card key={card.title} {...card} />
        ))}
      </section>
      <footer className={st.footer}>
        <Text className={st.text}>{footerText}</Text>
        <Link href="/request-form">
          <Button size="md" variant="black">
            Get Free Consultation
          </Button>
        </Link>
      </footer>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <article className={st.cardLayout}>
      <Title>{title}</Title>
      <Text className={st.text}>{desc}</Text>
    </article>
  );
}
