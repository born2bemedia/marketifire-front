import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { DownloadIcon } from '@/shared/ui/icons/outline/download';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './download-price.module.scss';

export function DownloadPrice() {
  const t = useTranslations('downloadPrice');

  return (
    <div className={st.layout}>
      <div className={st.ctaBlock}>
        <div className={st.ctaBlockContent}>
          <Title level={2}>{t('title')}</Title>
          <Text>
            <span>{t('description')}</span>
          </Text>
          <Link href={'/Price_List_Marketfire.pdf'} target="_blank">
            <Button variant="black" size="sm">
              {t('download')}
              <DownloadIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
