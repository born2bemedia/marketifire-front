'use client';

import { useEffect, useState } from 'react';

import { MinusIcon } from '@/shared/ui/icons/outline/minus';
import { PlusIcon } from '@/shared/ui/icons/outline/plus';
import { Title } from '@/shared/ui/kit/title';

import st from './service-packages.module.scss';

export function Included({ item }: { item: { whatIncluded: string[] } }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={st.col2}>
      <div
        className={st.col2Title}
        onClick={handleOpen}
        style={{ cursor: 'pointer' }}
      >
        <Title level={3}>What&apos;s included:</Title>
        {isMobile && (
          <div className={st.col2TitleIcon}>
            {isOpen ? <MinusIcon /> : <PlusIcon />}
          </div>
        )}
      </div>
      {isOpen && isMobile && (
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
      )}
      {!isMobile && (
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
      )}
    </div>
  );
}
