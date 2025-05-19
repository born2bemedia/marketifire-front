'use client';

import Link from 'next/link';

import { cn } from '@/shared/lib/styles';
import { Asterisk, Plus } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-service-offerings.module.scss';

const services = [
  {
    title: 'Marketing & Growth Strategies',
    items: [
      'Market Research & Competitive Analysis',
      'Brand Positioning & Messaging Strategy',
      'Digital & Traditional Advertising',
      'Product Launch Strategy',
    ],
  },
  {
    title: 'Performance Marketing & Conversion Optimization',
    bgImgPath: '/home/our-service-1.png',
    items: [
      'SEO & Search Visibility Growth',
      'PPC & Paid Advertising Campaigns',
      'Website & Funnel Optimization',
      'Data-Driven Sales Strategies',
    ],
  },
  {
    title: 'Business Consulting & Expansion Planning',
    bgImgPath: '/home/our-service-2.png',
    items: [
      'Market Entry & Expansion Strategies',
      'Customer Acquisition & Retention Plans',
      'Revenue Model Optimization',
      'Business Process Automation',
    ],
  },
  {
    title: 'Content & Audience Engagement',
    bgImgPath: '/home/our-service-3.png',
    items: [
      'Social Media & Community Growth',
      'Influencer & Affiliate Marketing',
      'Email & CRM Optimization',
      'High-Impact Content & Storytelling',
    ],
  },
  {
    title: 'Automation & Digital Transformation',
    items: [
      'AI & Marketing Automation',
      'CRM & Customer Journey Optimization',
      'Chatbot & Lead Nurturing Flows',
      'Performance Analytics & Reporting',
    ],
  },
  {
    title: 'Strategic Growth & Competitive Edge',
    items: [
      'Personal Brand & Omni-Channel Growth',
      'Lead Building & Audience Retention Strategies',
      'Sales Strategies for Entrepreneurs',
      'Tailored Marketing & Monetization Plans',
    ],
  },
];

export function OurServiceOfferings() {
  return (
    <section className={st.layout}>
      <section className={st.top}>
        <Tag className={st.tag}>
          <Asterisk />
          <Text>Tailored Solutions for Every Need</Text>
        </Tag>
        <Title level={2}>Our Comprehensive Service Offerings</Title>
        <Text className={st.text}>
          Marketifire combines data, strategy, and execution to deliver a full
          suite of consulting services designed to unlock your brand’s full
          potential.
        </Text>
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
        <Text>Every service is tailored to YOUR business goals.</Text>
        <Link href="/request-form">
          <Button size="md" variant="black">
            Start Optimizing Your Strategy Today
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
        {items.map(item => (
          <Tag key={item} color="white10">
            <Plus />
            <Text>{item}</Text>
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
        {items.map(item => (
          <Tag key={item} color="white10">
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
