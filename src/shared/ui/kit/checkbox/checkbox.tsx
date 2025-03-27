import type { ReactNode } from 'react';
import { useId } from 'react';
import { Indicator, Root } from '@radix-ui/react-checkbox';

import { Check } from '@/shared/ui/icons/fill';
import { Text } from '@/shared/ui/kit/text';

import st from './checkbox.module.scss';

export function Checkbox({
  label,
  labelColor = 'black',
  onCheckedChange,
  checked = false,
  id,
}: {
  label?: ReactNode;
  labelColor?: 'black' | 'black60';
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
}) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className={st.layout}>
      <Root
        className={st.checkboxRoot}
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Indicator className={st.checkboxIndicator}>
          <Check />
        </Indicator>
      </Root>
      <label htmlFor={checkboxId}>
        <Text color={labelColor} weight={300} className={st.label}>
          {label}
        </Text>
      </label>
    </div>
  );
}
