'use client';

import { DataGrid, type DataGridDef } from '@/shared/ui/components/data-grid';
import { Asterisk } from '@/shared/ui/icons/fill';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './info-block.module.scss';

export function InfoBlock({
  number,
  annotation,
  subAnnotation,
  title,
  values,
  startFromBig = false,
}: {
  number: string;
  annotation: string;
  subAnnotation: string;
  title: string;
  values: DataGridDef[];
  startFromBig?: boolean;
}) {
  return (
    <section className={st.layout}>
      <section className={st.text}>
        <Tag color="yellow">
          <Asterisk />
          {number}
        </Tag>
        <Title level={2}>{title}</Title>
        <Text color="black100">
          {annotation}
          <br />
          <br />
          {subAnnotation}
        </Text>
      </section>
      <DataGrid values={values} startFromBig={startFromBig} />
    </section>
  );
}
