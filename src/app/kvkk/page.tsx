import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { tr } from '@/content/tr';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: tr.legal.pages.kvkk.title,
  description: tr.legal.pages.kvkk.description,
  path: '/kvkk',
});

export default function Page() {
  return <LegalPage t={tr} page="kvkk" />;
}
