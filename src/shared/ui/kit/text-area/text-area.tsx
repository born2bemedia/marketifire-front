'use client';

import type { InputHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { st } from '@/shared/ui/kit/text-field';

import textareaSt from './text-area.module.scss';

export function TextArea({
  className,
  label,
  hint,
  intent = 'primary',
  ...args
}: InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
  intent?: 'primary' | 'danger';
}) {
  const textareaClasses = cn(
    st.textField,
    textareaSt.textArea,
    {
      [st.dangerIntent]: intent === 'danger',
    },
    className,
  );

  return (
    <label className={st.layout}>
      <Text color="black">{label}</Text>
      <textarea className={textareaClasses} {...args} />
      {hint && (
        <Text color="black100" className={st.hint}>
          {hint}
        </Text>
      )}
    </label>
  );
}
