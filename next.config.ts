import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    GOOGLE_TRANSLATION_CONFIG: JSON.stringify({
      languages: [
        { title: 'Slovak', name: 'sk' },
        { title: 'Deutsch', name: 'de' },
        { title: 'Italiano', name: 'it' },
      ],
      defaultLanguage: 'sk',
    }),
  },
};

export default nextConfig;
