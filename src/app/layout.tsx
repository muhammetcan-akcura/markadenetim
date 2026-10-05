// Global stiller her bileşen import'undan ÖNCE gelmeli: CSS paket sırası import sırasını izler.
// Sonra gelirse .btn-frame / .t-display gibi global sınıflar bileşen kurallarını ezer
// (mobilde header CTA'sı görünür kalıp menü butonunu ekran dışına itiyordu).
import '@/styles/tokens.css';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { tr } from '@/content/tr';
import { brandName, legalName, siteUrl } from '@/lib/site';
import { defaultOgImage } from '@/lib/seo';
import { fontClassName } from '@/lib/fonts';
import { MobileActionBar } from '@/components/MobileActionBar';
import { CookieNotice } from '@/components/CookieNotice';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Alt sayfalar yalnızca kendi başlığını verir; marka son eki şablondan gelir
  title: { default: tr.meta.title, template: `%s | ${brandName}` },
  description: tr.meta.description,
  applicationName: brandName,
  authors: [{ name: legalName, url: '/' }],
  creator: legalName,
  publisher: legalName,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // iOS Safari numaraları kendiliğinden bağlantıya çevirmesin; telefonlar zaten tel: bağlantısı
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: brandName,
    title: tr.meta.title,
    description: tr.meta.ogDescription,
    url: '/',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: tr.meta.title,
    description: tr.meta.ogDescription,
    images: [defaultOgImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: '#0B1426',
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // "js" sınıfı hidrasyondan önce eklendiği için uyarı bastırılır
    <html lang="tr" className={fontClassName} suppressHydrationWarning>
      <head>
        {/* JS varsa hareket sınıflarını aç; yoksa tüm içerik statik ve görünür kalır */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body id="top">
        {children}
        <MobileActionBar />
        <CookieNotice t={tr} />
      </body>
    </html>
  );
}
