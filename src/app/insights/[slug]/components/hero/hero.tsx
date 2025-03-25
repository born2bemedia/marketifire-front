'use client';

import type { ReactNode } from 'react';
import { useLayoutEffect } from 'react';

import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    html, body {
      overflow-x: hidden !important;
      position: relative;
    }
  `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className={st.layout}>
      <Title level={1}>{title}</Title>
      <div className={st.desc}>{description}</div>
    </section>
  );
}
