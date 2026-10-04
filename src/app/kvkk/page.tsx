import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { tr } from '@/content/tr';

export const metadata: Metadata = {
  title: `${tr.legal.pages.kvkk.title} | MarkaDenetim`,
  description: tr.legal.pages.kvkk.description,
  alternates: { canonical: '/kvkk' },
};

export default function Page() {
  return <LegalPage t={tr} page="kvkk" />;
}
