'use client';

import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { CaretDown } from '@/shared/ui/icons/fill';
import { Text } from '@/shared/ui/kit/text';

import st from './switcher.module.scss';

export function Switcher({
  options,
  value,
}: {
  options: { label: ReactNode; value: string }[];
  value: ReactNode;
}) {
  const router = useRouter();

  return (
    <Root>
      <DropdownMenuTrigger className={st.selectTrigger}>
        <Text>{value}</Text>
        <CaretDown />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className={st.selectContent} sideOffset={10}>
          {options.map(option => (
            <DropdownMenuItem
              key={option.value}
              className={st.selectItem}
              onClick={() => {
                router.replace(`/${option.value}`);
              }}
            >
              <Text>{option.label}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
}
