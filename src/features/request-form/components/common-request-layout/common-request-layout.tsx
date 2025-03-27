'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './common-request-layout.module.scss';

export function CommonRequestLayout({ children }: { children: ReactNode }) {
  return (
    <section className={st.layout}>
      <section className={st.text}>
        <Title>Get in Touch with Marketfire</Title>
        <Text color="black100">
          We’re excited to hear from you! Whether you have a question, need
          expert advice, or are ready to begin a project, our team is here to
          provide the support and solutions you need. Simply fill out the form
          below with your details, and we’ll get back to you as soon as possible
          to discuss how we can help you achieve your business goals.
        </Text>
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
