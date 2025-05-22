'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';

import st from './provided-services.module.scss';

export function ProvidedServices() {
  return (
    <section className={st.layout}>
      <TailoredStrategies />
      <ProvenTactics />
      <MeasurableGrowth />
    </section>
  );
}

function TailoredStrategies() {
  const t = useTranslations('home.providedServices');

  return (
    <article className={cn(st.cardLayout, st.yellowBg)}>
      <Text className={st.title} weight={500} uppercase>
        {t('strategies')}
      </Text>
      <Image
        className={st.balloonGutImg}
        src="/home/balloon-gut.webp"
        alt="ballon-img"
        width={250}
        height={389}
      />
      <Image
        className={st.balloonStarImg}
        src="/home/balloon-star.webp"
        alt="ballon-img"
        width={220}
        height={352}
      />
    </article>
  );
}

function ProvenTactics() {
  const t = useTranslations('home.providedServices');

  return (
    <article className={cn(st.cardLayout, st.whiteBg)}>
      <Text className={st.title} weight={500} uppercase>
        {t('tactics')}
      </Text>
      <Graphics />
    </article>
  );
}

function Graphics() {
  return (
    <section className={st.graphics}>
      <Image
        className={st.firstGraphic}
        src="/home/graphic.svg"
        alt="graphic"
        width={370}
        height={176}
      />
      <Image
        className={st.secondGraphic}
        src="/home/graphic-2.svg"
        alt="graphic"
        width={370}
        height={176}
      />
      <Image
        className={st.thirdGraphic}
        src="/home/graphic-3.svg"
        alt="graphic"
        width={370}
        height={176}
      />
    </section>
  );
}

function MeasurableGrowth() {
  const t = useTranslations('home.providedServices');

  return (
    <article className={cn(st.cardLayout, st.black10Bg)}>
      <Text className={st.title} weight={500} uppercase>
        {t('growth')}
      </Text>
      <Image
        className={st.circleLineMd}
        src="/home/circle-line-sm.svg"
        alt="circle"
        width={435}
        height={435}
      />
      <Image
        className={st.circleLineSm}
        src="/home/circle-line-sm.svg"
        alt="circle"
        width={395}
        height={395}
      />
      <Image
        className={st.circle}
        src="/home/circle.svg"
        alt="circle"
        width={336}
        height={336}
      />
    </article>
  );
}
