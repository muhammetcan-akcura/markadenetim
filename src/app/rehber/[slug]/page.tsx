import { tr } from '@/content/tr';
import { GuideView, guideMetadata, guideStaticParams } from '@/views/GuideView';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guideStaticParams(tr);
}

export async function generateMetadata({ params }: Params) {
  return guideMetadata(tr, (await params).slug);
}

export default async function GuidePage({ params }: Params) {
  return <GuideView t={tr} slug={(await params).slug} />;
}
