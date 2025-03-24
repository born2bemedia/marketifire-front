'use client';

import type { InputHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';

import st from './text-field.module.scss';

export function TextField({
  className,
  label,
  hint,
  intent = 'primary',
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  intent?: 'primary' | 'danger';
}) {
  const inputClasses = cn(
    st.textField,
    {
      [st.dangerIntent]: intent === 'danger',
    },
    className,
  );

  return (
    <label className={st.layout}>
      <Text color="black100" className={st.label}>
        {label}
      </Text>
      <input className={inputClasses} {...args} />
      {hint && (
        <Text color="black100" className={st.hint}>
          {hint}
        </Text>
      )}
    </label>
  );
}
