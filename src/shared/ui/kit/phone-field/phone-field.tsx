'use client';

import { PhoneInput, type PhoneInputProps } from 'react-international-phone';

import { Text } from '@/shared/ui/kit/text';

import 'react-international-phone/style.css';
import st from './phone-field.module.scss';

export function PhoneField({
  country,
  label,
  hint,
  ...args
}: PhoneInputProps & {
  country?: string;
  label?: string;
  hint?: string;
}) {
  return (
    <label className={st.layout}>
      <Text color="black" className={st.label}>
        {label}
      </Text>
      <PhoneInput
        defaultCountry={country ?? 'us'}
        className={st.container}
        inputClassName={st.phoneField}
        countrySelectorStyleProps={{
          buttonClassName: st.dropdown,
          dropdownStyleProps: {
            className: st.dropdownList,
          },
          dropdownArrowClassName: st.arrow,
        }}
        {...args}
      />
      {hint && (
        <Text color="black" weight={300} className={st.hint}>
          {hint}
        </Text>
      )}
    </label>
  );
}
