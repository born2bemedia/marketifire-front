'use client';
import { useState } from 'react';
import Image from 'next/image';

import { CloseIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { useModalStore } from '../../services/modal.store';
import { OrderForm } from '../order-form/order-form';
import st from './modal.module.scss';

export function Modal({}) {
  const { isOpen, setIsOpen, type, product } = useModalStore();

  const [thanksPopupOpen, setThanksPopupOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setThanksPopupOpen(false);
  };

  const handleThanksPopupClose = () => {
    setThanksPopupOpen(false);
    setIsOpen(false);
  };

  const title =
    type === 'service' ? 'Service Request Form' : 'Package Request Form';

  return (
    <div className={`${st.modalWrapper} ${isOpen ? st.open : ''}`}>
      {thanksPopupOpen ? (
        <div className={st.modalThanks}>
          <Title level={2}>Thank you!</Title>
          <Text>
            Your request for our service package has been successfully
            submitted. Our team will review the information provided and get in
            touch with you shortly to discuss the next steps and how we can
            assist you.
          </Text>
          <Image
            className={st.thanksImageMob}
            src="/pricing/thanksMob.png"
            alt="Thank you"
            width={343}
            height={169}
          />
          <Button variant="black" onClick={handleThanksPopupClose}>
            Close
          </Button>
          <Image
            className={st.thanksImage}
            src="/pricing/thanks.png"
            alt="Thank you"
            width={914}
            height={132}
          />
        </div>
      ) : (
        <div className={st.modal}>
          <div className={st.modalTop}>
            <div className={st.modalTopLeft}>
              <Title level={2}>{title}</Title>
              <span className={st.divider}></span>
              <Tag color="yellow">{product}</Tag>
            </div>
            <button className={st.close} onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <OrderForm
            setThanksPopupOpen={setThanksPopupOpen}
            product={product}
          />
        </div>
      )}
    </div>
  );
}
