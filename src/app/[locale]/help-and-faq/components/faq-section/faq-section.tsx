'use client';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { FaqBlock } from '../faq-block';
import st from './faq-section.module.scss';

export function FaqSection({
  number,
  title,
  faq,
}: {
  number: string;
  title: string;
  faq: { question: string; answer: string }[];
}) {
  return (
    <div className={st.layout}>
      <div className={st.container}>
        <div className={st.title}>
          <Tag color="yellow">
            <Asterisk />
            <Text>{number}</Text>
          </Tag>
          <Title level={2}>{title}</Title>
        </div>
        <div className={st.faq}>
          {faq.map((item, index) => (
            <FaqBlock key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
