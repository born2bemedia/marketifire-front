'use client';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  return (
    <section className={st.layout}>
      <Title>Marketfire – Fueling Your Business & Marketing Success</Title>
      <Text>
        With tailored business and marketing consulting, we help businesses
        accelerate growth, optimize marketing efforts, and build lasting
        customer relationships. Whether starting, scaling, or refining your
        strategy, Marketfire is your partner in success.
      </Text>
      <Button size="md" variant="black">
        Get Free Consultation
      </Button>
    </section>
  );
}
