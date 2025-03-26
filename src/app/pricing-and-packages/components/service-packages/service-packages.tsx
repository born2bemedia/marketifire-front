'use client';
import { useModalStore } from '@/features/request-popup/services/modal.store';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
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
  const { setIsOpen, setType, setProduct } = useModalStore();

  const handleOpenModal = (type: 'service' | 'package', product: string) => {
    setIsOpen(true);
    setType(type);
    setProduct(product);
  };
  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Tag color="yellow">
          <Asterisk />
          <Text>Text</Text>
        </Tag>
        <Title level={2}>Our Comprehensive Service Offerings</Title>
        <Text>
          Marketfire combines data, strategy, and execution to deliver a full
          suite of consulting services designed to unlock your brand’s full
          potential.
        </Text>
      </section>
      <div className={st.cards}>
        {packages.map((item, index) => (
          <section className={st.card} key={index}>
            <div className={st.col1}>
              <div className={st.title}>
                <Title level={2}>{item.title}</Title>
                <Title level={3}>From {item.price}</Title>
              </div>
              <Text>{item.description}</Text>
              <Included item={item} />
            </div>

            <Button
              size="md"
              variant="black"
              onClick={() => handleOpenModal('package', item.title)}
            >
              Order now
            </Button>
          </section>
        ))}
      </div>
    </section>
  );
}
