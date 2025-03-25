import Image from 'next/image';

import { caseStudies } from '@/shared/lib/caseStudies';
import { ArrowRight, Asterisk } from '@/shared/ui/icons/fill';
import { PlusIcon } from '@/shared/ui/icons/outline/plus';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './cases.module.scss';

export function Cases() {
  return (
    <div className={st.layout}>
      {caseStudies.map((caseStudy, index) => (
        <div className={st.caseStudy} key={caseStudy.title}>
          <section className={st.titleLayout}>
            <Tag color="yellow">
              <Asterisk />
              <Text>Case Study {index + 1}</Text>
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
                <span>Client</span>
                <p dangerouslySetInnerHTML={{ __html: caseStudy.client }} />
              </div>
            </div>
            <div className={st.details}>
              <div className={st.challenge}>
                <Title level={3}>
                  Challenge
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
                <Title level={3}>Solution</Title>
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
              Results
              <ArrowRight />
            </div>
            {caseStudy.results.map(item => (
              <div className={st.resultsItem} key={item}>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
}
