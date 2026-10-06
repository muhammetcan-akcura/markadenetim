import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { en } from '@/content/en';
import { guidesEn } from '@/content/en/guides';
import { extraPageParams, parsePage } from '@/lib/paginate';
import { GuidesIndexView, guidesMetadata } from '@/views/GuidesIndexView';

type Params = { params: Promise<{ page: string }> };

// İngilizce rehber sayısı bir sayfayı aşınca ek sayfalar kendiliğinden üretilir
export const dynamicParams = false;

export function generateStaticParams() {
  return extraPageParams(guidesEn.length);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const page = parsePage((await params).page, guidesEn.length);
  return page ? guidesMetadata(en, page) : {};
}

export default async function GuidesPagedPageEn({ params }: Params) {
  const page = parsePage((await params).page, guidesEn.length);
  if (!page) notFound();
  return <GuidesIndexView t={en} page={page} />;
}
