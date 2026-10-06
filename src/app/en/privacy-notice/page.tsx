import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { en } from '@/content/en';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: en.legal.pages.kvkk.title,
  description: en.legal.pages.kvkk.description,
  path: '/en/privacy-notice',
});

export default function Page() {
  return <LegalPage t={en} page="kvkk" />;
}
