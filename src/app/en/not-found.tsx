import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { StatusPage } from '@/components/StatusPage';
import { en } from '@/content/en';

// /en altında olmayan içerik (notFound() ya da eşleşmeyen adres): İngilizce 404
export const metadata: Metadata = {
  title: en.status.notFound.label,
  robots: { index: false, follow: true },
};

export default function NotFoundEn() {
  return (
    <>
      <SiteHeader t={en} />
      <main id="main">
        <StatusPage t={en} kind="notFound" />
      </main>
    </>
  );
}
