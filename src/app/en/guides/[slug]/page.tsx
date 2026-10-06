import { en } from '@/content/en';
import { GuideView, guideMetadata, guideStaticParams } from '@/views/GuideView';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams(en);
}

export async function generateMetadata({ params }: Params) {
  return guideMetadata(en, (await params).slug);
}

export default async function GuidePageEn({ params }: Params) {
  return <GuideView t={en} slug={(await params).slug} />;
}
