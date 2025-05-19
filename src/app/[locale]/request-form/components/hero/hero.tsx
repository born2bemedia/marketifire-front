'use client';

import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  return (
    <section className={st.text}>
      <Tag color="yellow">Let’s Build Your Success Together</Tag>
      <Title>Get Started with Marketifire</Title>
      <Text>
        Tell us your goals and challenges, and we’ll craft a personalized
        strategy to help you grow. Fill out the form below, and let’s take the
        next step toward measurable success.
      </Text>
    </section>
  );
}
