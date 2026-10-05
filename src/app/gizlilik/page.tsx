import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { tr } from '@/content/tr';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tr.legal.pages.gizlilik.title,
  description: tr.legal.pages.gizlilik.description,
  path: '/gizlilik',
});

export default function Page() {
  return <LegalPage t={tr} page="gizlilik" />;
}
