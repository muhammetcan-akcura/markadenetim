import { tr } from '@/content/tr';
import { SectorView, sectorMetadata, sectorStaticParams } from '@/views/SectorView';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return sectorStaticParams(tr);
}

export async function generateMetadata({ params }: Params) {
  return sectorMetadata(tr, (await params).slug);
}

export default async function SectorPage({ params }: Params) {
  return <SectorView t={tr} slug={(await params).slug} />;
}
