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
      <Tag color="yellow">Let’s Build Your Success Together</Tag>
      <Title>Igniting Growth, Empowering Success</Title>
      <Text>
        At Marketfire, we believe that growth isn’t just about marketing — it’s
        about creating a lasting impact. We work with entrepreneurs,
        professionals, and personal brands to transform ideas into strategies
        that scale, engage, and convert.
      </Text>
      <Text>
        We don’t follow trends — we create them. With a data-driven approach,
        innovative thinking, and a passion for results, we craft solutions that
        fuel success at every stage of your journey.
      </Text>
    </section>
  );
}
