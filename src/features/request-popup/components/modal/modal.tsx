'use client';

import { CloseIcon } from '@/shared/ui/icons/outline';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Title } from '@/shared/ui/kit/title';

import { useModalStore } from '../../services/modal.store';
import st from './modal.module.scss';

export function Modal({}) {
  const { isOpen, setIsOpen, type } = useModalStore();

  const handleClose = () => {
    setIsOpen(false);
  };

  const title =
    type === 'service' ? 'Service Request Form' : 'Package Request Form';

  const subtitle =
    type === 'service'
      ? 'Ignite Your Brand'
      : 'Lead Building & Audience Retention Strategies';

  return (
    <div className={`${st.modalWrapper} ${isOpen ? st.open : ''}`}>
      <div className={st.modal}>
        <div className={st.modalTop}>
          <div className={st.modalTopLeft}>
            <Title level={2}>{title}</Title>
            <span className={st.divider}></span>
            <Tag color="yellow">{subtitle}</Tag>
          </div>
          <button className={st.close} onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
