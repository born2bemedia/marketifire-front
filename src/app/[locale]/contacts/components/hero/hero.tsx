'use client';

import { usePreventHorizontalScroll } from '@/shared/lib/hooks';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  usePreventHorizontalScroll();

  return (
    <section className={st.layout}>
      <Tag color="yellow">We’re Here to Help You Reach Your Business Goals</Tag>
      <Title level={1}>Contacts</Title>
      <Text color="black100">
        At Marketfire, we believe in providing the right tools and strategies
        for business growth. Whether you have a question, need guidance, or are
        ready to start a project, we’re here to assist you every step of the
        way.
      </Text>
    </section>
  );
}
