'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './contact.module.scss';

function ContactCard({
  title,
  link,
  text,
  balloons,
}: {
  title: string;
  link: string;
  text: string;
  balloons: {
    src: string;
    className: string;
    width: number;
    height: number;
  }[];
}) {
  return (
    <article className={st.cardLayout}>
      <section className={st.imgs}>
        {balloons.map(({ src, className, width, height }, index) => (
          <Image
            key={index}
            className={className}
            src={src}
            alt={`balloon-${index}`}
            width={width}
            height={height}
          />
        ))}
      </section>
      <section className={st.text}>
        <Title level={4} color="black60" uppercase>
          {title}
        </Title>
        <Link href={link}>
          <Text color="black100" size="xl" weight={500}>
            {text}
          </Text>
        </Link>
      </section>
    </article>
  );
}

export function Contact() {
  const t = useTranslations('contacts.contact');

  const contacts = [
    {
      title: t('getInTouch'),
      link: 'mailto:info@marketifire.com',
      text: 'info@marketifire.com',
      balloons: [
        {
          src: '/contacts/0.png',
          className: st.zeroBalloon,
          width: 180,
          height: 200,
        },
        {
          src: '/contacts/1.png',
          className: st.oneBalloon,
          width: 126,
          height: 200,
        },
      ],
    },
    {
      title: t('speakWithUs'),
      link: 'tel:+421221011939',
      text: '+421221011939',
      balloons: [
        {
          src: '/contacts/0.png',
          className: st.zeroBalloon,
          width: 180,
          height: 200,
        },
        {
          src: '/contacts/2.png',
          className: st.twoBalloon,
          width: 107,
          height: 164,
        },
      ],
    },
  ];

  return (
    <section className={st.layout}>
      {contacts.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}
    </section>
  );
}
