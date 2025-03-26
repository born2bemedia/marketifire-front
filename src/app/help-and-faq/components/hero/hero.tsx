'use client';

import Image from 'next/image';

import { PulsingFrame } from '@/shared/ui/components/pulsing-frame';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  return (
    <section className={st.text}>
      <PulsingFrame
        layerOne={
          <Image
            className={st.ellipse}
            src="/request-form/ellipse.svg"
            alt="ellipse"
            width={513}
            height={513}
          />
        }
        layerTwo={
          <Image
            className={st.ellipseBig}
            src="/request-form/ellipse.svg"
            alt="ellipse"
            width={813}
            height={813}
          />
        }
      />
      <Tag color="yellow">Your Questions Answered</Tag>
      <Title>Help & FAQs</Title>
      <Text>
        We understand that clarity is key to making the right decisions for your
        business. That’s why we’ve compiled answers to the most frequently asked
        questions to help you better understand our services, processes, and how
        we can help you grow. If you don’t find what you’re looking for, feel
        free to reach out directly!
      </Text>
    </section>
  );
}
