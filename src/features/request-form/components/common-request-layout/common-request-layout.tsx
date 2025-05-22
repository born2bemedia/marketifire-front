'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './common-request-layout.module.scss';

export function CommonRequestLayout({ children }: { children: ReactNode }) {
  const t = useTranslations('commonRequest');

  return (
    <section className={st.layout}>
      <section className={st.text}>
        <Title>{t('title')}</Title>
        <Text color="black100">{t('text')}</Text>
      </section>
      <section>
        <Image
          className={st.ellipseLineOpacity}
          src="/contacts/ellipse-line.png"
          alt="Contact us"
          width={750}
          height={750}
        />
        <Image
          className={st.ellipseLine}
          src="/contacts/ellipse-line.png"
          alt="Contact us"
          width={632}
          height={632}
        />
        <Image
          className={st.ellipseFill}
          src="/contacts/ellipse-fill.png"
          alt="Contact us"
          width={503}
          height={503}
        />
      </section>
      <main className={st.form}>{children}</main>
    </section>
  );
}
