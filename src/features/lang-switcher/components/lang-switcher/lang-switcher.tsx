'use client';

import { Switcher } from '@/features/lang-switcher/components/switcher';

import { English, Germany, Italy, Slovakia } from '@/shared/ui/icons/countries';

import { useLanguageSwitcher } from '../../lib';

export function LangSwitcher() {
  const { currentLanguage, switchLanguage, languageConfig } =
    useLanguageSwitcher();

  if (!languageConfig) {
    return null;
  }

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
      value={
        <span className="notranslate">{currentLanguage.toUpperCase()}</span>
      }
      onChange={switchLanguage}
    />
  );
}
