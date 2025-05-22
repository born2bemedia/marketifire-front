'use client';
import { PlusIcon } from '@/shared/ui/icons/outline/plus';

import st from './service-packages.module.scss';

export function Included({ item }: { item: { whatIncluded: string[] } }) {
  return (
    <div className={st.col2}>
      <div className={st.whatIncluded}>
        {item.whatIncluded.map(item => (
          <div key={item}>
            <PlusIcon />
            <div
              className={st.whatIncludedItem}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
