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
      <Tag color="yellow">
        Choose the Solution That Best Fits Your Objectives
      </Tag>
      <Title>Pricing & Packages</Title>
      <Text>
        We offer customized solutions for entrepreneurs at every growth stage.
        Whether you need a single solution or a full-service package, we have
        the right plan to meet your needs. Our pricing structure ensures
        flexibility and transparency, giving you various options based on your
        budget and goals.
      </Text>
    </section>
  );
}
