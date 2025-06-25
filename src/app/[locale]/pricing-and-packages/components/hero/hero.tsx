'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { PulsingFrame } from '@/shared/ui/components/pulsing-frame';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('pricingPackages.hero');

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
      <Tag color="yellow">{t('tag')}</Tag>
      <Title>{t('title')}</Title>
      <Text>{t('text')}</Text>
    </section>
  );
}
