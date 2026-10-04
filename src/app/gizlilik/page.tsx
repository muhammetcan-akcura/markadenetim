import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { tr } from '@/content/tr';

export const metadata: Metadata = {
  title: `${tr.legal.pages.gizlilik.title} | MarkaDenetim`,
  description: tr.legal.pages.gizlilik.description,
  alternates: { canonical: '/gizlilik' },
};

export default function Page() {
  return <LegalPage t={tr} page="gizlilik" />;
}
