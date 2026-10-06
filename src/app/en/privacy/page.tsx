import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { en } from '@/content/en';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: en.legal.pages.gizlilik.title,
  description: en.legal.pages.gizlilik.description,
  path: '/en/privacy',
});

export default function Page() {
  return <LegalPage t={en} page="gizlilik" />;
}
