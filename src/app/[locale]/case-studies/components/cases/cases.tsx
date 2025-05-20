import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ArrowRight, Asterisk } from '@/shared/ui/icons/fill';
import { PlusIcon } from '@/shared/ui/icons/outline/plus';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './cases.module.scss';

export function Cases() {
  const t = useTranslations('caseStudies.cases');

  const caseStudies = [
    {
      title: t('items.0.title'),
      client: `<b>${t('items.0.client.name')}</b>, ${t('items.0.client.profession')}`,
      challenge: t('items.0.challenge'),
      solution: [
        `<b>${t('items.0.solution.0.title')}</b> ${t('items.0.solution.0.text')}`,
        `<b>${t('items.0.solution.1.title')}</b> ${t('items.0.solution.1.text')}`,
        `<b>${t('items.0.solution.2.title')}</b> ${t('items.0.solution.2.text')}`,
        `<b>${t('items.0.solution.3.title')}</b> ${t('items.0.solution.3.text')}`,
      ],
      results: [
        {
          heading: t('items.0.results.0.heading'),
          text: `<span><b>${t('items.0.results.0.text')}</b> ${t('items.0.results.0.text2')}</span>`,
        },
        {
          heading: t('items.0.results.1.heading'),
          text: `<span><b>${t('items.0.results.1.text')}</b> ${t('items.0.results.1.text2')}</span>`,
        },
        {
          heading: t('items.0.results.2.heading'),
          text: `<span><b>${t('items.0.results.2.text')}</b> ${t('items.0.results.2.text2')}</span>`,
        },
      ],
    },
    {
      title: t('items.1.title'),
      client: `<b>${t('items.1.client.name')}</b>, ${t('items.1.client.profession')}`,
      challenge: t('items.1.challenge'),
      solution: [
        `<b>${t('items.1.solution.0.title')}</b> ${t('items.1.solution.0.text')}`,
        `<b>${t('items.1.solution.1.title')}</b> ${t('items.1.solution.1.text')}`,
        `<b>${t('items.1.solution.2.title')}</b> ${t('items.1.solution.2.text')}`,
        `<b>${t('items.1.solution.3.title')}</b> ${t('items.1.solution.3.text')}`,
      ],
      results: [
        {
          heading: t('items.1.results.0.heading'),
          text: `<span><b>${t('items.1.results.0.text')}</b> ${t('items.1.results.0.text2')}</span>`,
        },
        {
          heading: t('items.1.results.1.heading'),
          text: `<span><b>${t('items.1.results.1.text')}</b></span>`,
        },
        {
          heading: t('items.1.results.2.heading'),
          text: `<span><b>${t('items.1.results.2.text')}</b></span>`,
        },
      ],
    },
    {
      title: t('items.2.title'),
      client: `<b>${t('items.2.client.name')}</b>, ${t('items.2.client.profession')}`,
      challenge: t('items.2.challenge'),
      solution: [
        `<b>${t('items.2.solution.0.title')}</b> ${t('items.2.solution.0.text')}`,
        `<b>${t('items.2.solution.1.title')}</b> ${t('items.2.solution.1.text')}`,
        `<b>${t('items.2.solution.2.title')}</b> ${t('items.2.solution.2.text')}`,
        `<b>${t('items.2.solution.3.title')}</b> ${t('items.2.solution.3.text')}`,
      ],
      results: [
        {
          heading: t('items.2.results.0.heading'),
          text: `<span><b>${t('items.2.results.0.text')}</b> ${t('items.2.results.0.text2')}</span>`,
        },
        {
          heading: t('items.2.results.1.heading'),
          text: `<span><b>${t('items.2.results.1.text')}</b> ${t('items.2.results.1.text2')}</span>`,
        },
        {
          heading: t('items.2.results.2.heading'),
          text: `<span><b>${t('items.2.results.2.text')}</b> ${t('items.2.results.2.text2')}</span>`,
        },
      ],
    },
    {
      title: t('items.3.title'),
      client: `<b>${t('items.3.client.name')}</b>, ${t('items.3.client.profession')}`,
      challenge: t('items.3.challenge'),
      solution: [
        `<b>${t('items.3.solution.0.title')}</b> ${t('items.3.solution.0.text')}`,
        `<b>${t('items.3.solution.1.title')}</b> ${t('items.3.solution.1.text')}`,
        `<b>${t('items.3.solution.2.title')}</b> ${t('items.3.solution.2.text')}`,
        `<b>${t('items.3.solution.3.title')}</b> ${t('items.3.solution.3.text')}`,
      ],
      results: [
        {
          heading: t('items.3.results.0.heading'),
          text: `<span><b>${t('items.3.results.0.text')}</b></span>`,
        },
        {
          heading: t('items.3.results.1.heading'),
          text: `<span><b>${t('items.3.results.1.text')}</b></span>`,
        },
        {
          heading: t('items.3.results.2.heading'),
          text: `<span><b>${t('items.3.results.2.text')}</b></span>`,
        },
      ],
    },
    {
      title: t('items.4.title'),
      client: `<b>${t('items.4.client.name')}</b>, ${t('items.4.client.profession')}`,
      challenge: t('items.4.challenge'),
      solution: [
        `<b>${t('items.4.solution.0.title')}</b> ${t('items.4.solution.0.text')}`,
        `<b>${t('items.4.solution.1.title')}</b> ${t('items.4.solution.1.text')}`,
        `<b>${t('items.4.solution.2.title')}</b> ${t('items.4.solution.2.text')}`,
        `<b>${t('items.4.solution.3.title')}</b> ${t('items.4.solution.3.text')}`,
      ],
      results: [
        {
          heading: t('items.4.results.0.heading'),
          text: `<span><b>${t('items.4.results.0.text')}</b> ${t('items.4.results.0.text2')}</span>`,
        },
        {
          heading: t('items.4.results.1.heading'),
          text: `<span><b>${t('items.4.results.1.text')}</b></span>`,
        },
        {
          heading: t('items.4.results.2.heading'),
          text: `<span><b>${t('items.4.results.2.text')}</b></span>`,
        },
      ],
    },
  ];

  return (
    <div className={st.layout}>
      {caseStudies.map((caseStudy, index) => (
        <div className={st.caseStudy} key={caseStudy.title}>
          <section className={st.titleLayout}>
            <Tag color="yellow">
              <Asterisk />
              <Text>
                {t('caseStudy')} {index + 1}
              </Text>
            </Tag>
            <Title level={2}>{caseStudy.title}</Title>
          </section>
          <section className={st.contentLayout}>
            <div className={st.client}>
              <Image
                src={`/cases/case-${index + 1}.png`}
                width={590}
                height={213}
                alt={caseStudy.title}
              />
              <div className={st.clientInfo}>
                <span>{t('client')}</span>
                <p dangerouslySetInnerHTML={{ __html: caseStudy.client }} />
              </div>
            </div>
            <div className={st.details}>
              <div className={st.challenge}>
                <Title level={3}>
                  {t('challenge')}
                  <Image
                    src="/cases/flag.svg"
                    width={34}
                    height={22}
                    alt="Flag"
                  />
                </Title>
                <Text>{caseStudy.challenge}</Text>
              </div>
              <div className={st.solution}>
                <Title level={3}>{t('solution')}</Title>
                <ul>
                  {caseStudy.solution.map(item => (
                    <li className={st.solutionItem} key={item}>
                      <span>
                        <PlusIcon />
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className={st.results}>
            <div className={st.resultsTitle}>
              {t('results')}
              <ArrowRight />
            </div>
            {caseStudy.results.map(({ heading, text }) => (
              <div className={st.resultsItem} key={heading}>
                <h1 className={st.heading} style={{ fontSize: '46px' }}>
                  {heading}
                </h1>
                <span dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
}
