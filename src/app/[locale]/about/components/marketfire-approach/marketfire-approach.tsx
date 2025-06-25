import { useTranslations } from 'next-intl';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Line } from '@/shared/ui/icons/outline/line';
import { LineMob } from '@/shared/ui/icons/outline/lineMob';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './marketfire-approach.module.scss';

export function MarketfireApproach() {
  const t = useTranslations('about.marketfireApproach');

  return (
    <div className={st.layout}>
      <section className={st.titleLayout}>
        <Tag color="yellow">
          <Asterisk />
          <Text>{t('tag')}</Text>
        </Tag>
        <Title level={2}>{t('title')}</Title>
        <Text className={st.text}>{t('desc')}</Text>
      </section>
      <section className={st.lineLayout}>
        <div className={st.card}>
          <div className={st.cardNumber}>01</div>
          <div className={st.cardContent}>
            <Title level={3}>{t('cards.0.title')}</Title>
            <Text className={st.text}>{t('cards.0.desc')}</Text>
          </div>
        </div>
        <div className={st.card}>
          <div className={st.cardNumber}>02</div>
          <div className={st.cardContent}>
            <Title level={3}>{t('cards.1.title')}</Title>
            <Text className={st.text}>{t('cards.1.desc')}</Text>
          </div>
        </div>
        <div className={st.card}>
          <div className={st.cardNumber}>03</div>
          <div className={st.cardContent}>
            <Title level={3}>{t('cards.2.title')}</Title>
            <Text className={st.text}>{t('cards.2.desc')}</Text>
          </div>
        </div>
        <Line className={st.line} />
        <LineMob className={st.lineMob} />
      </section>
    </div>
  );
}
