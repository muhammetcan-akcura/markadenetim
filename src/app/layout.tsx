import type { Metadata, Viewport } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import { tr } from '@/content/tr';
import { brandName, siteUrl } from '@/lib/site';
import '@/styles/tokens.css';
import './globals.css';

// next/font/google fontu build sırasında indirir ve kendi alan adımızdan sunar:
// ziyaretçiden Google'a istek gitmez (KVKK), preload ve CLS'i azaltan yedek metrikler otomatik.
// Türkçe için iki alt küme şart: "ı" latin'de, "ğ ş İ" latin-ext'te.
const newsreader = Newsreader({
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz'],
  display: 'swap',
  variable: '--font-newsreader',
});

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: tr.meta.title,
  description: tr.meta.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: brandName,
    title: tr.meta.title,
    description: tr.meta.ogDescription,
    url: '/',
    // [GÖRSEL GİRİLECEK] public/img/og-image.jpg — 1200×630, navy zemin üzerinde MARKADENETİM wordmark'ı
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: '#0B1426',
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // "js" sınıfı hidrasyondan önce eklendiği için uyarı bastırılır
    <html lang="tr" className={`${newsreader.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* JS varsa hareket sınıflarını aç; yoksa tüm içerik statik ve görünür kalır */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
