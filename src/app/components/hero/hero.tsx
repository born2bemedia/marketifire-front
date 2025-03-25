'use client';

import Link from 'next/link';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  return (
    <section className={st.layout}>
      <Title>Marketifire – Fueling Your Business & Marketing Success</Title>
      <Text>
        With tailored business and marketing consulting, we help businesses
        accelerate growth, optimize marketing efforts, and build lasting
        customer relationships. Whether starting, scaling, or refining your
        strategy, Marketifire is your partner in success.
      </Text>
      <Link href="/request-form">
        <Button size="md" variant="black">
          Get Free Consultation
        </Button>
      </Link>
    </section>
  );
}
