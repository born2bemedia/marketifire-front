'use client';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Included } from './included';
import st from './service-packages.module.scss';

export function ServicePackages({
  packages,
}: {
  packages: {
    id: string;
    title: string;
    price: string;
    description: string;
    whatIncluded: string[];
  }[];
}) {
  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Title level={2}>Service Packages</Title>
        <Text>
          Choose from our comprehensive service packages, designed to meet the
          specific needs of your project at every stage of growth. Whether
          you&apos;re starting small or looking to scale dramatically, we have a
          tailored solution that fits.
        </Text>
      </section>
      <div className={st.cards}>
        {packages.map((item, index) => (
          <section
            className={st.card}
            key={item.id}
            style={{
              top: `calc(10px + ${index * 20}px)`,
            }}
          >
            <span className={st.cardNumber}>0{index + 1}</span>
            <div className={st.col1}>
              <div className={st.title}>
                <Title level={2}>{item.title}</Title>
                <Text>{item.description}</Text>
              </div>
              <div className={st.price}>
                <Title level={2}>From {item.price}</Title>
                <Button size="md" variant="black">
                  Order now
                </Button>
              </div>
            </div>
            <Included item={item} />
          </section>
        ))}
      </div>
    </section>
  );
}
