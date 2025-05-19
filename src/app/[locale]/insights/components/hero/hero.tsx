'use client';

import { useLayoutEffect } from 'react';

import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
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
      <Tag color="yellow">Knowledge to Fuel Your Growth</Tag>
      <Title level={1}>Insights</Title>
      <Text className={st.text} color="black100" size="lg">
        Welcome to Marketifire’s Insights page, where we share valuable
        articles, tips, and strategies to help entrepreneurs thrive. Stay
        updated on the latest marketing trends, business growth tactics, and
        industry insights that will help you optimize your approach and achieve
        long-term success. Explore our articles below to discover proven methods
        and actionable advice.
      </Text>
    </section>
  );
}
