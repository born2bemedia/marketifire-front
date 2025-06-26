'use client';

import { type ReactNode, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
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
  const pathname = usePathname();

  const switchLanguage = useCallback(
    (value: string) => {
      const segments = pathname.split('/');
      segments[1] = value;
      const newPath = segments.join('/');
      router.replace(newPath);
    },
    [pathname, router],
  );

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
              onClick={() => switchLanguage(option.value)}
            >
              <Text>{option.label}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
}
