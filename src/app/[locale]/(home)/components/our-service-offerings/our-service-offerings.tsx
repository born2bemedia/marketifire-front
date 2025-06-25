'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { Asterisk, Plus } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-service-offerings.module.scss';

export function OurServiceOfferings() {
  const t = useTranslations('home.ourServiceOfferings');

  const services = [
    {
      title: t('services.0.title'),
      items: [
        t('services.0.items.0'),
        t('services.0.items.1'),
        t('services.0.items.2'),
        t('services.0.items.3'),
      ],
    },
    {
      title: t('services.1.title'),
      bgImgPath: '/home/our-service-1.png',
      items: [
        t('services.1.items.0'),
        t('services.1.items.1'),
        t('services.1.items.2'),
        t('services.1.items.3'),
      ],
    },
    {
      title: t('services.2.title'),
      bgImgPath: '/home/our-service-2.png',
      items: [
        t('services.2.items.0'),
        t('services.2.items.1'),
        t('services.2.items.2'),
        t('services.2.items.3'),
      ],
    },
    {
      title: t('services.3.title'),
      bgImgPath: '/home/our-service-3.png',
      items: [
        t('services.3.items.0'),
        t('services.3.items.1'),
        t('services.3.items.2'),
        t('services.3.items.3'),
      ],
    },
    {
      title: t('services.4.title'),
      items: [
        t('services.4.items.0'),
        t('services.4.items.1'),
        t('services.4.items.2'),
        t('services.4.items.3'),
      ],
    },
    {
      title: t('services.5.title'),
      items: [
        t('services.5.items.0'),
        t('services.5.items.1'),
        t('services.5.items.2'),
        t('services.5.items.3'),
      ],
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.top}>
        <Tag className={st.tag}>
          <Asterisk />
          <Text>{t('tag')}</Text>
        </Tag>
        <Title level={2}>{t('title')}</Title>
        <Text className={st.text}>{t('text')}</Text>
      </section>
      <section className={st.servicesLayout}>
        {services.map(({ title, items, bgImgPath }) =>
          bgImgPath ? (
            <CardWithBg
              key={title}
              title={title}
              items={items}
              bgImgPath={bgImgPath}
            />
          ) : (
            <SimpleCard key={title} title={title} items={items} />
          ),
        )}
      </section>
      <section className={st.requestFormNav}>
        <Text>{t('label')}</Text>
        <Link href="/request-form">
          <Button size="md" variant="black">
            {t('btnLabel')}
          </Button>
        </Link>
      </section>
    </section>
  );
}

function SimpleCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className={st.cardLayout}>
      <Title level={3}>{title}</Title>
      <section className={cn(st.services, st.servicesBottom)}>
        {items.map((item, i) => (
          <Tag key={item + i} color="white10" className={st.tag}>
            <Plus />
            <Text className={st.tagText}>{item}</Text>
          </Tag>
        ))}
      </section>
    </article>
  );
}

function CardWithBg({
  title,
  items,
  bgImgPath,
}: {
  title: string;
  items: string[];
  bgImgPath: string;
}) {
  return (
    <article
      className={st.cardLayout}
      style={{
        backgroundImage: `url(${bgImgPath})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '0px',
      }}
    >
      <section className={st.services} style={{ padding: '20px' }}>
        {items.map((item, i) => (
          <Tag key={item + i} color="white10">
            <Plus />
            <Text>{item}</Text>
          </Tag>
        ))}
      </section>
      <Title level={3} className={st.titleTop}>
        {title}
      </Title>
    </article>
  );
}
