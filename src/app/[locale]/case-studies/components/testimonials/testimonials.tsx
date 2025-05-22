import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Star } from '@/shared/ui/icons/fill/star';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './testimonials.module.scss';

export function Testimonials() {
  const t = useTranslations('caseStudies.testimonials');

  const testimonials = [
    {
      rating: Number(t('items.0.rating')),
      testimonial: t('items.0.testimonial'),
      author: t('items.0.author'),
      role: t('items.0.role'),
    },
    {
      rating: Number(t('items.1.rating')),
      testimonial: t('items.1.testimonial'),
      author: t('items.1.author'),
      role: t('items.1.role'),
    },
    {
      rating: Number(t('items.2.rating')),
      testimonial: t('items.2.testimonial'),
      author: t('items.2.author'),
      role: t('items.2.role'),
    },
    {
      rating: Number(t('items.3.rating')),
      testimonial: t('items.3.testimonial'),
      author: t('items.3.author'),
      role: t('items.3.role'),
    },
    {
      rating: Number(t('items.4.rating')),
      testimonial: t('items.4.testimonial'),
      author: t('items.4.author'),
      role: t('items.4.role'),
    },
    {
      rating: Number(t('items.5.rating')),
      testimonial: t('items.5.testimonial'),
      author: t('items.5.author'),
      role: t('items.5.role'),
    },
  ];

  return (
    <div className={st.layout}>
      <section className={st.titleLayout}>
        <Tag color="yellow">
          <Asterisk />
          <Text>{t('tag')}</Text>
        </Tag>
        <Title level={2}>{t('title')}</Title>
        <Text>{t('text')}</Text>
      </section>
      <section className={st.testimonialsLayout}>
        {testimonials.map((testimonial, index) => (
          <div
            className={st.testimonial}
            key={index}
            style={{
              top: `calc(10px + ${index * 70}px)`,
            }}
          >
            <div className={st.stars}>
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} />
              ))}
            </div>
            <Text>{testimonial.testimonial}</Text>
            <div className={st.author}>
              <Text>
                — {testimonial.author}, {testimonial.role}
              </Text>
            </div>
          </div>
        ))}
      </section>
      <Link href="/request-form" className={st.link}>
        <Button size="sm" variant="black">
          {t('btnLabel')}
        </Button>
      </Link>
    </div>
  );
}
