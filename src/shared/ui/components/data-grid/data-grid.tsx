'use client';

import { useState } from 'react';
import { Content, Item, Root, Trigger } from '@radix-ui/react-accordion';

import { useWindow } from '@/shared/lib/hooks';
import { ArrowDown } from '@/shared/ui/icons/outline';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './data-grid.module.scss';
import type { DataGridDef } from './types';

export function DataGrid({
  values,
  startFromBig = false,
}: {
  values: DataGridDef[];
  startFromBig?: boolean;
}) {
  const { width } = useWindow();
  const [value, setValue] = useState<string>('');

  return (
    <section>
      {width <= 768 ? (
        <Root
          type="single"
          collapsible
          className={st.accordionRoot}
          value={value}
          onValueChange={() => setValue(value === 'grid' ? '' : 'grid')}
        >
          <Item value="grid" className={st.accordionItem}>
            <Trigger className={st.accordionTrigger}>
              {value === 'grid' ? 'Hide' : 'Open'} <ArrowDown />
            </Trigger>
            <Content className={st.accordionContent}>
              <GridContent values={values} />
            </Content>
          </Item>
        </Root>
      ) : (
        <GridContent values={values} startFromBig={startFromBig} />
      )}
    </section>
  );
}

function GridContent({
  values,
  startFromBig = false,
}: {
  values: DataGridDef[];
  startFromBig?: boolean;
}) {
  return (
    <section className={st.gridContainer}>
      {startFromBig ? (
        <>
          <div className={st.gridRow3}>
            {values
              .slice(0, 2)
              .map(({ title, desc, icon: Icon, iconBg }, index) => (
                <div key={index} className={st.gridItem}>
                  <div className={`${st.icon} ${st[iconBg]}`}>
                    <Icon />
                  </div>
                  <Title level={3}>{title}</Title>
                  <Text color="black60" size="lg">
                    {desc}
                  </Text>
                </div>
              ))}
          </div>
          {values
            .slice(2, 8)
            .map(({ title, desc, icon: Icon, iconBg }, index) => (
              <div key={index} className={st.gridItem}>
                <div className={`${st.icon} ${st[iconBg]}`}>
                  <Icon />
                </div>
                <Title level={3}>{title}</Title>
                <Text color="black60" size="lg">
                  {desc}
                </Text>
              </div>
            ))}
        </>
      ) : (
        <>
          {values
            .slice(0, 6)
            .map(({ title, desc, icon: Icon, iconBg }, index) => (
              <div key={index} className={st.gridItem}>
                <div className={`${st.icon} ${st[iconBg]}`}>
                  <Icon />
                </div>
                <Title level={3}>{title}</Title>
                <Text color="black60" size="lg">
                  {desc}
                </Text>
              </div>
            ))}
          <div className={st.gridRow3}>
            {values
              .slice(6, 8)
              .map(({ title, desc, icon: Icon, iconBg }, index) => (
                <div key={index} className={st.gridItem}>
                  <div className={`${st.icon} ${st[iconBg]}`}>
                    <Icon />
                  </div>
                  <Title level={3}>{title}</Title>
                  <Text color="black60" size="lg">
                    {desc}
                  </Text>
                </div>
              ))}
          </div>
        </>
      )}
    </section>
  );
}
