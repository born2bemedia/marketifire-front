import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight, Asterisk } from '@/shared/ui/icons/fill';
import { PlusIcon } from '@/shared/ui/icons/outline/plus';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './solutions.module.scss';

export function Solutions() {
  const t = useTranslations('tailoredSolutions.solutions');

  const tailoredSolutions = [
    {
      category: t('values.0.title'),
      items: [
        t('values.0.items.0'),
        t('values.0.items.1'),
        t('values.0.items.2'),
        t('values.0.items.3'),
      ],
      image1: '/tailored/image1_1.png',
      image2: '/tailored/image1_2.png',
      image3: '/tailored/image1_3.png',
      buttonText: t('values.0.title'),
    },
    {
      category: t('values.1.title'),
      items: [
        t('values.1.items.0'),
        t('values.1.items.1'),
        t('values.1.items.2'),
        t('values.1.items.3'),
      ],
      image1: '/tailored/image2_1.png',
      image2: '/tailored/image2_2.png',
      image3: '/tailored/image2_3.png',
      buttonText: t('values.1.title'),
    },
    {
      category: t('values.2.title'),
      items: [
        t('values.2.items.0'),
        t('values.2.items.1'),
        t('values.2.items.2'),
        t('values.2.items.3'),
      ],
      image1: '/tailored/image3_1.png',
      image2: '/tailored/image3_2.png',
      image3: '/tailored/image3_3.png',
      buttonText: t('values.2.title'),
    },
    {
      category: t('values.3.title'),
      items: [
        t('values.3.items.0'),
        t('values.3.items.1'),
        t('values.3.items.2'),
        t('values.3.items.3'),
      ],
      image1: '/tailored/image4_1.png',
      image2: '/tailored/image4_2.png',
      image3: '/tailored/image4_3.png',
      buttonText: t('values.3.title'),
    },
    {
      category: t('values.4.title'),
      items: [
        t('values.4.items.0'),
        t('values.4.items.1'),
        t('values.4.items.2'),
        t('values.4.items.3'),
      ],
      image1: '/tailored/image5_1.png',
      image2: '/tailored/image5_2.png',
      image3: '/tailored/image5_3.png',
      buttonText: t('values.4.title'),
    },
  ];

  return (
    <div className={st.layout}>
      <div className={st.container}>
        <section className={st.titleLayout}>
          <Tag color="yellow">
            <Asterisk />
            <Text>{t('tag')}</Text>
          </Tag>
          <Title level={2}>{t('title')}</Title>
          <Text className={st.text}>{t('text')}</Text>
        </section>
        <section className={st.solutionsLayout}>
          {tailoredSolutions.map((solution, index) => (
            <div className={st.solution} key={index}>
              <div className={st.col1}>
                <Title level={3}>
                  <span
                    dangerouslySetInnerHTML={{ __html: solution.category }}
                  />
                </Title>
                <ul>
                  {solution.items.map((item, index) => (
                    <li key={index}>
                      <PlusIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={st.col2}>
                <div>
                  <Link href={'/request-form'} className={st.link}>
                    <span
                      dangerouslySetInnerHTML={{ __html: solution.buttonText }}
                    />
                    <ArrowRight />
                  </Link>
                  <Image
                    src={solution.image1}
                    alt={solution.category}
                    width={282}
                    height={368}
                    className={st.image1}
                  />
                </div>
                <div>
                  <Image
                    src={solution.image2}
                    alt={solution.category}
                    width={268}
                    height={276}
                    className={st.image2}
                  />
                  <div className={st.avatars}>
                    <Image
                      src={solution.image3}
                      alt={solution.category}
                      width={190}
                      height={55}
                      className={st.image3}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className={st.bottom}>
          <Link href={'/request-form'} className={st.link}>
            <Button size="sm" variant="black">
              {t('btnLabel')}
            </Button>
          </Link>
          <Text className={st.text}>{t('label')}</Text>
        </section>
      </div>
    </div>
  );
}
