import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './need-help.module.scss';

export function NeedHelp() {
  const t = useTranslations('helpAndFaq.needHelp');

  return (
    <div className={st.layout}>
      <div className={st.ctaBlock}>
        <div className={st.ctaBlockContent}>
          <Title level={2}>{t('title')}</Title>
          <Text>
            <span>{t('text')}</span>
          </Text>
          <div className={st.ctaBlockButtons}>
            <Link href={'/contacts'}>
              <Button variant="black" size="sm">
                {t('contactUs')}
              </Button>
            </Link>
            <Link href={'/request-form'}>
              <Button variant="yellow" size="sm">
                {t('scheduleFreeConsultation')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
