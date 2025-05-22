'use client';
import { useRef, useState } from 'react';

import { ArrowDown } from '@/shared/ui/icons/outline/arrow-down';

import st from '../faq-section/faq-section.module.scss';

export function FaqBlock({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: string;
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpenedIndex(openedIndex === index ? null : index);
  };
  return (
    <div
      className={`${st.faqItem} ${openedIndex === index ? st.opened : ''}`}
      onClick={() => handleOpen(index)}
    >
      <div className={st.faqItemQuestion}>
        <span>{question}</span>
        <ArrowDown />
      </div>
      <div
        className={st.faqItemAnswer}
        ref={answerRef}
        style={{
          height:
            openedIndex === index ? answerRef.current?.scrollHeight : '0px',
        }}
      >
        {answer}
      </div>
    </div>
  );
}
