import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { circulars } from '@/content/circulars';
import { extraPageParams, parsePage } from '@/lib/paginate';
import { CircularsIndex, circularsMetadata } from '../../CircularsIndex';

type Params = { params: Promise<{ page: string }> };

// Yalnızca var olan sayfalar üretilir; /sirkuler/sayfa/99 gibi adresler 404 döner
export const dynamicParams = false;

export function generateStaticParams() {
  return extraPageParams(circulars.length);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const page = parsePage((await params).page, circulars.length);
  return page ? circularsMetadata(page) : {};
}

export default async function CircularsPagedPage({ params }: Params) {
  const page = parsePage((await params).page, circulars.length);
  if (!page) notFound();
  return <CircularsIndex page={page} />;
}
