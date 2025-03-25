import Image from 'next/image';
import Link from 'next/link';

import { tailoredSolutions } from '@/shared/lib/tailored-solution';
import { ArrowRight, Asterisk } from '@/shared/ui/icons/fill';
import { PlusIcon } from '@/shared/ui/icons/outline/plus';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './solutions.module.scss';

export function Solutions() {
  return (
    <div className={st.layout}>
      <div className={st.container}>
        <section className={st.titleLayout}>
          <Tag color="yellow">
            <Asterisk />
            <Text>Tailored Expertise for Your Industry</Text>
          </Tag>
          <Title level={2}>Targeted Consulting Solutions</Title>
          <Text className={st.text}>
            We provide expert guidance tailored to your field, helping you
            optimize visibility, customer acquisition, and revenue generation
            through targeted consulting.
          </Text>
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
      </div>
    </div>
  );
}
