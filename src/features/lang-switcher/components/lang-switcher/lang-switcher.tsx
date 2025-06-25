'use client';

import { useLocale } from 'next-intl';

import { English, Germany, Italy, Slovakia } from '@/shared/ui/icons/countries';

import { Switcher } from '../switcher';

export function LangSwitcher() {
  const locale = useLocale();

  return (
    <Switcher
      options={[
        {
          label: (
            <span
              className="notranslate"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <English />
              EN
            </span>
          ),
          value: 'en',
        },
        {
          label: (
            <span
              className="notranslate"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Germany />
              DE
            </span>
          ),
          value: 'de',
        },
        {
          label: (
            <span
              className="notranslate"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Italy />
              IT
            </span>
          ),
          value: 'it',
        },
        {
          label: (
            <span
              className="notranslate"
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Slovakia />
              SK
            </span>
          ),
          value: 'sk',
        },
      ]}
      value={<span className="notranslate">{locale.toUpperCase()}</span>}
    />
  );
}
