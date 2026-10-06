import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { en } from '@/content/en';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: en.legal.pages.cerez.title,
  description: en.legal.pages.cerez.description,
  path: '/en/cookies',
});

export default function Page() {
  return <LegalPage t={en} page="cerez" />;
}
