'use client';

import { useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

import st from './dropzone.module.scss';

export function Dropdzone({
  required,
  name,
  onDrop,
  value,
}: {
  required?: boolean;
  name?: string;
  onDrop?: (file: File | null) => void;
  value?: File | null;
}) {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const t = useTranslations('dropzone');

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    multiple: false,
    onDrop: incomingFiles => {
      if (onDrop) {
        onDrop(incomingFiles[0] || null);
      }
    },
  });

  const file = value ?? acceptedFiles[0];

  return (
    <div className={st.container}>
      <div {...getRootProps({ className: 'dropzone' })} className={st.inner}>
        <input
          type="file"
          name={name}
          required={required}
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          {...getInputProps()}
        />
        <Text color="black60" size="sm">
          {file ? file.name : t('noFileSelected')}
        </Text>
        <button
          className={st.chooseFile}
          type="button"
          onClick={e => {
            e.stopPropagation();
            open();
          }}
        >
          {t('chooseFile')}
        </button>
        <Text color="black60">{t('attachDocuments')}</Text>
      </div>
    </div>
  );
}
