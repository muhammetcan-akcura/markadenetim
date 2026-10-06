import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guides } from '@/content/guides';
import { tr } from '@/content/tr';
import { extraPageParams, parsePage } from '@/lib/paginate';
import { GuidesIndexView, guidesMetadata } from '@/views/GuidesIndexView';

type Params = { params: Promise<{ page: string }> };

// Yalnızca var olan sayfalar üretilir; olmayan sayfa numarası 404 döner
export const dynamicParams = false;

export function generateStaticParams() {
  return extraPageParams(guides.length);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const page = parsePage((await params).page, guides.length);
  return page ? guidesMetadata(tr, page) : {};
}

export default async function GuidesPagedPage({ params }: Params) {
  const page = parsePage((await params).page, guides.length);
  if (!page) notFound();
  return <GuidesIndexView t={tr} page={page} />;
}
