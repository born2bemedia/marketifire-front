'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './get-free-consultation.module.scss';

export function GetFreeConsultation({
  text,
  nav,
}: {
  text: ReactNode;
  nav: { url: string; label: string };
}) {
  const t = useTranslations('freeConsultation');

  return (
    <section className={st.layout}>
      <section className={st.textContent}>
        <div className={st.text}>
          <Title level={1}>{t('title')}</Title>
          <Text>{text}</Text>
        </div>
        <Link href={nav.url}>
          <Button variant="black" className={st.btn}>
            {nav.label}
          </Button>
        </Link>
      </section>
      <section className={st.mainEllipse}>
        <Image
          className={st.ellipseFill}
          src="/insights/ellipse-fill.png"
          alt="ellipse-fill"
          width={503}
          height={503}
        />
        <Image
          className={st.ellipseFill}
          src="/insights/line-1.png"
          alt="ellipse-line"
          width={590}
          height={590}
        />
        <Image
          className={st.ellipseFill}
          src="/insights/line-2.png"
          alt="ellipse-line"
          width={680}
          height={680}
        />
      </section>
      <section className={st.mobileEllipse}>
        <Image
          className={st.line}
          src="/insights/half-line-1.png"
          alt="ellipse-line"
          width={280}
          height={280}
        />
        <Image
          className={st.line}
          src="/insights/half-line-2.png"
          alt="ellipse-line"
          width={350}
          height={350}
        />
        <section className={st.halfEllipse}>
          <Image src="/insights/half-ellipse.png" alt="ellipse-fill" fill />
        </section>
      </section>
    </section>
  );
}
