'use client';
import { useTranslations } from 'next-intl';

import { useModalStore } from '@/features/request-popup/services/modal.store';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { Included } from './included';
import st from './service-packages.module.scss';

export function ServicePackages() {
  const t = useTranslations('pricingPackages.servicePackages');

  const { setIsOpen, setType, setProduct } = useModalStore();

  const handleOpenModal = (type: 'service' | 'package', product: string) => {
    setIsOpen(true);
    setType(type);
    setProduct(product);
  };

  const packages = [
    {
      id: '01',
      title: t('packages.0.title'),
      price: '€1,800',
      description: t('packages.0.description'),
      whatIncluded: [
        `<b>${t('packages.0.includes.0.title')}</b> – ${t('packages.0.includes.0.description')}`,
        `<b>${t('packages.0.includes.1.title')}</b> – ${t('packages.0.includes.1.description')}`,
        `<b>${t('packages.0.includes.2.title')}</b> – ${t('packages.0.includes.2.description')}`,
        `<b>${t('packages.0.includes.3.title')}</b> – ${t('packages.0.includes.3.description')}`,
        `<b>${t('packages.0.includes.4.title')}</b> – ${t('packages.0.includes.4.description')}`,
      ],
    },
    {
      id: '02',
      title: t('packages.1.title'),
      price: '€2,500',
      description: t('packages.1.description'),
      whatIncluded: [
        `<b>${t('packages.1.includes.0.title')}</b>`,
        `<b>${t('packages.1.includes.1.title')}</b> – ${t('packages.1.includes.1.description')}`,
        `<b>${t('packages.1.includes.2.title')}</b> – ${t('packages.1.includes.2.description')}`,
        `<b>${t('packages.1.includes.3.title')}</b> – ${t('packages.1.includes.3.description')}`,
        `<b>${t('packages.1.includes.4.title')}</b> – ${t('packages.1.includes.4.description')}`,
        `<b>${t('packages.1.includes.5.title')}</b> – ${t('packages.1.includes.5.description')}`,
        `<b>${t('packages.1.includes.6.title')}</b> – ${t('packages.1.includes.6.description')}`,
      ],
    },
    {
      id: '03',
      title: t('packages.2.title'),
      price: '€3,500',
      description: t('packages.2.description'),
      whatIncluded: [
        `<b>${t('packages.2.includes.0.title')}</b>`,
        `<b>${t('packages.2.includes.1.title')}</b> – ${t('packages.2.includes.1.description')}`,
        `<b>${t('packages.2.includes.2.title')}</b> – ${t('packages.2.includes.2.description')}`,
        `<b>${t('packages.2.includes.3.title')}</b> – ${t('packages.2.includes.3.description')}`,
        `<b>${t('packages.2.includes.4.title')}</b> – ${t('packages.2.includes.4.description')}`,
        `<b>${t('packages.2.includes.5.title')}</b> – ${t('packages.2.includes.5.description')}`,
        `<b>${t('packages.2.includes.6.title')}</b> – ${t('packages.2.includes.6.description')}`,
        `<b>${t('packages.2.includes.7.title')}</b> – ${t('packages.2.includes.7.description')}`,
        `<b>${t('packages.2.includes.8.title')}</b> – ${t('packages.2.includes.8.description')}`,
      ],
    },
    {
      id: '04',
      title: t('packages.3.title'),
      price: '€5,000',
      description: t('packages.3.description'),
      whatIncluded: [
        `<b>${t('packages.3.includes.0.title')}</b>`,
        `<b>${t('packages.3.includes.1.title')}</b> – ${t('packages.3.includes.1.description')}`,
        `<b>${t('packages.3.includes.2.title')}</b> – ${t('packages.3.includes.2.description')}`,
        `<b>${t('packages.3.includes.3.title')}</b> – ${t('packages.3.includes.3.description')}`,
        `<b>${t('packages.3.includes.4.title')}</b> – ${t('packages.3.includes.4.description')}`,
        `<b>${t('packages.3.includes.5.title')}</b> – ${t('packages.3.includes.5.description')}`,
        `<b>${t('packages.3.includes.6.title')}</b> – ${t('packages.3.includes.6.description')}`,
        `<b>${t('packages.3.includes.7.title')}</b> – ${t('packages.3.includes.7.description')}`,
        `<b>${t('packages.3.includes.8.title')}</b> – ${t('packages.3.includes.8.description')}`,
      ],
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Tag color="white">
          <Asterisk />
        </Tag>
        <Title level={2}>{t('title')}</Title>
        <Text>{t('description')}</Text>
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
              {t('orderNow')}
            </Button>
          </section>
        ))}
      </div>
    </section>
  );
}
