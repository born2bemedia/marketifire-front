import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Toaster } from '@/shared/lib/notify';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';
import { Preloader } from '@/shared/ui/components/preloader';

import './globals.css';
import './reset.css';
import 'modern-normalize/modern-normalize.css';

const outfitFont = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo.png',
        href: '/logo.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo.png',
        href: '/logo.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="/scripts/translation.js" strategy="beforeInteractive" />
        {process.env.GOOGLE_TRANSLATION_CONFIG && (
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={outfitFont.variable}>
        <GoogleAnalytics gaId="G-0NR0307GP5" />
        <Header />
        <Preloader />
        {children}
        <Footer />
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
