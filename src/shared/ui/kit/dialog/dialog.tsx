'use client';

import type { ReactNode } from 'react';
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import st from './dialog.module.scss';

export function Dialog({
  trigger,
  children,
  open,
  onOpenChange,
}: {
  trigger?: ReactNode;
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild={!!trigger}>{trigger ? trigger : null}</Trigger>
      <Portal>
        <Overlay className={st.dialogOverlay} />
        <Content className={st.dialogContent}>
          <Title />
          <Description asChild>{children}</Description>
        </Content>
      </Portal>
    </Root>
  );
}
