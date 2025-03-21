import { Indicator, Root } from '@radix-ui/react-checkbox';

import { Check } from '@/shared/ui/icons/fill';
import { Text } from '@/shared/ui/kit/text';

import st from './checkbox.module.scss';

export function Checkbox({
  label,
  onCheckedChange,
  checked = false,
}: {
  label?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <div className={st.layout}>
      <Root
        className={st.checkboxRoot}
        id={label}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Indicator className={st.checkboxIndicator}>
          <Check />
        </Indicator>
      </Root>
      <label htmlFor={label}>
        <Text color="black" weight={300} className={st.label}>
          {label}
        </Text>
      </label>
    </div>
  );
}
