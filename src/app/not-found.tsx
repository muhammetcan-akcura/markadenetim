import type { Metadata } from 'next';
import { SiteHeader } from '@/components/SiteHeader';
import { StatusPage } from '@/components/StatusPage';
import { tr } from '@/content/tr';

// Eşleşmeyen her adres ve notFound() çağrıları (olmayan hizmet/yazı/ekip slug'ı) burada biter.
// Kök layout'taki "index, follow" burada ezilir: 404 sayfası dizine girmez, bağlantıları izlenir.
export const metadata: Metadata = {
  title: tr.status.notFound.label,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader t={tr} />
      <main id="main">
        <StatusPage t={tr} kind="notFound" />
      </main>
    </>
  );
}
