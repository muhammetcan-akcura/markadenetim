import { en } from '@/content/en';
import { SectorView, sectorMetadata, sectorStaticParams } from '@/views/SectorView';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return sectorStaticParams(en);
}

export async function generateMetadata({ params }: Params) {
  return sectorMetadata(en, (await params).slug);
}

export default async function SectorPageEn({ params }: Params) {
  return <SectorView t={en} slug={(await params).slug} />;
}
