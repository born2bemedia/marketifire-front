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
      <Tag color="yellow">Strategies for Real-World Success</Tag>
      <Title level={1}>
        What We Do – Comprehensive Services Tailored for Your Project
      </Title>
      <Text color="black100">
        At Marketfire, we provide end-to-end marketing and business consulting
        solutions to help you grow, optimize, and succeed in your industry. Our
        services are tailored to your unique needs, ensuring that every strategy
        is built to drive real results, regardless of your business stage.
        <br />
        <br />
        Here’s a closer look at the extensive services we offer:
      </Text>
    </section>
  );
}
