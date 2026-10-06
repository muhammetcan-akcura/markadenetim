import { en } from '@/content/en';
import { ArticleView, articleMetadata, articleStaticParams } from '@/views/ArticleView';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articleStaticParams(en);
}

export async function generateMetadata({ params }: Params) {
  return articleMetadata(en, (await params).slug);
}

export default async function ArticlePageEn({ params }: Params) {
  return <ArticleView t={en} slug={(await params).slug} />;
}
