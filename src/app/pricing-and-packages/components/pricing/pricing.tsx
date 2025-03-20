import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './pricing.module.scss';
import type { PricingItem } from './types';

export default function Pricing({
  categoryLabel,
  categoryTitle,
  categoryDescription,
  pricingItems,
  index,
  sectionBackground,
  cardBackground,
}: {
  categoryLabel: string;
  categoryTitle: string;
  categoryDescription: string;
  pricingItems: PricingItem[];
  index: string;
  sectionBackground: string;
  cardBackground: string;
}) {
  return (
    <div
      className={st.layout}
      style={{
        background: sectionBackground,
      }}
    >
      <div className={st.col1}>
        <div>
          <Tag color={index === '06' ? 'white' : 'yellow'}>
            <Asterisk />
            <Text>{categoryLabel}</Text>
          </Tag>
          <Title level={2}>{categoryTitle}</Title>
          <Text>{categoryDescription}</Text>
        </div>
        <img src={`/pricing/${index}.svg`} alt={categoryTitle} />
      </div>
      <div className={st.col2}>
        {pricingItems.map((item, index) => (
          <div
            key={index}
            className={st.item}
            style={{
              top: `calc(50px + ${index * 50}px)`,
              background: cardBackground,
              borderColor: cardBackground,
            }}
          >
            <div className={st.top}>
              <div className={st.itemTitle}>{item.title}</div>
              <div className={st.itemDescription}>{item.description}</div>
            </div>
            <div className={st.bottom}>
              <div className={st.price}>
                {item.type === 'order' ? 'From ' : ''}€{item.price}
              </div>
              {item.type === 'buy' ? (
                <Button size="md" variant="black">
                  Buy
                </Button>
              ) : (
                <Button size="md" variant="black">
                  Order
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
