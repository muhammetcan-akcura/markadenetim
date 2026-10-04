import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { tr } from '@/content/tr';

export const metadata: Metadata = {
  title: `${tr.legal.pages.cerez.title} | MarkaDenetim`,
  description: tr.legal.pages.cerez.description,
  alternates: { canonical: '/cerez' },
};

export default function Page() {
  return <LegalPage t={tr} page="cerez" />;
}
