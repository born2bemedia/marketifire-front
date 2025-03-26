import Link from 'next/link';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './need-help.module.scss';

export function NeedHelp() {
  return (
    <div className={st.layout}>
      <div className={st.ctaBlock}>
        <div className={st.ctaBlockContent}>
          <Title level={2}>Need More Help?</Title>
          <Text>
            <span>
              If you have more questions or need assistance with a specific
              issue, don’t hesitate to reach out. We’re here to help you
              succeed!
            </span>
          </Text>
          <div className={st.ctaBlockButtons}>
            <Link href={'/contacts'}>
              <Button variant="black" size="sm">
                Contact Us
              </Button>
            </Link>
            <Link href={'/request-form'}>
              <Button variant="yellow" size="sm">
                Schedule a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
