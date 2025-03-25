'use client';

import Link from 'next/link';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './download-price.module.scss';

export function DownloadPrice() {
  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Tag color="white">
          <Asterisk />
          <Text>Price List</Text>
        </Tag>
        <Title level={2}>Download Full Price List</Title>
        <Text>
          All the pricing details you need are already listed here on the page.
          If you&apos;d like to have a PDF version for your reference, feel free
          to download the full price list. Everything is clearly outlined for
          you to make an informed decision!
        </Text>
        <Link href="/Price_List_Marketfire.pdf" target="_blank">
          <Button variant="black" size="md">
            Download Price List in PDF
          </Button>
        </Link>
      </section>
    </section>
  );
}
