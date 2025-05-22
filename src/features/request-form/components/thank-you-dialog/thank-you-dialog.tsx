'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
} from '@radix-ui/react-dialog';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './thank-you-dialog.module.scss';

export function ThankYouDialog({
  open,
  onOpenChange,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const t = useTranslations('requestForm.thankYou');

  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Portal>
        <Overlay className={st.dialogOverlay} />
        <Content className={st.dialogContent}>
          <section style={{ height: '100%', width: '100%' }}>
            <DTitle />
            <Description asChild>
              <section className={st.contentLayout}>
                <div className={st.textBlock}>
                  <Title level={2}>{t('title')}</Title>
                  <Text weight={300}>{t('text')}</Text>
                </div>
                <Link href="/">
                  <Button variant="black" uppercase>
                    {t('btnLabel')}
                  </Button>
                </Link>
                <Image
                  className={st.lettersMobile}
                  src="/thank-you/mobile.png"
                  alt="mobile"
                  width={358}
                  height={174}
                />
                <Image
                  className={st.lettersDesktop}
                  src="/thank-you/full.png"
                  alt="full-img"
                  width={945}
                  height={132}
                />
              </section>
            </Description>
          </section>
        </Content>
      </Portal>
    </Root>
  );
}
