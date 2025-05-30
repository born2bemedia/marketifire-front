import Link from 'next/link';

import { DownloadIcon } from '@/shared/ui/icons/outline/download';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './download-price.module.scss';

export function DownloadPrice() {
  return (
    <div className={st.layout}>
      <div className={st.ctaBlock}>
        <div className={st.ctaBlockContent}>
          <Title level={2}>Download Full Price List</Title>
          <Text>
            <span>
              All the pricing details you need are already listed here on the
              page. If you&apos;d like to have a PDF version for your reference,
              feel free to download the full price list. Everything is clearly
              outlined for you to make an informed decision!
            </span>
          </Text>
          <Link href="/Price_List_Marketifire.pdf" target="_blank">
            <Button variant="black" size="sm">
              Download Price List in PDF
              <DownloadIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
