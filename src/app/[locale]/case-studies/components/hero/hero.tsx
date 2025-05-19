'use client';

import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { PulsingEllipse } from '../pulsing-ellipse';
import st from './hero.module.scss';

export function Hero() {
  return (
    <section className={st.text}>
      <PulsingEllipse />
      <div className={st.content}>
        <Tag color="yellow">Solutions for Lasting Entrepreneurial Growth</Tag>
        <Title>Case Studies – Proven Results for Entrepreneurs</Title>
        <Text>
          Marketfire specialises in providing customized marketing strategies
          for entrepreneurs who want to scale their personal brands, increase
          their visibility, and achieve long-term success. Our case studies
          demonstrate our real impact on private entrepreneurs across various
          industries and show how we help them achieve their business goals.
        </Text>
      </div>
    </section>
  );
}
