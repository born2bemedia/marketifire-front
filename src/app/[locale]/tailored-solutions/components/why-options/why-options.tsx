'use client';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './why-options.module.scss';

export function WhyOptions({
  cards,
  annotation,
  title,
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
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <article className={st.cardLayout}>
      <Title level={3}>{title}</Title>
      <Text className={st.text}>{desc}</Text>
    </article>
  );
}
