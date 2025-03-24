import Link from 'next/link';

import { Button } from '../../kit/button';
import { Text } from '../../kit/text';
import { Title } from '../../kit/title';
import st from './cta-block.module.scss';

export function CtaBlock({
  title,
  text,
  link,
  buttonText,
}: {
  title: string;
  text: string;
  link: string;
  buttonText: string;
}) {
  return (
    <div className={st.layout}>
      <div className={st.ctaBlock}>
        <div className={st.ctaBlockContent}>
          <Title level={2}>{title}</Title>
          <Text><span dangerouslySetInnerHTML={{ __html: text }} /></Text>
        </div>
        <div className={st.ctaBlockLink}>
          <Link href={link}>
            <Button variant="black" size="sm">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
