import { tr } from '@/content/tr';
import { ArticleView, articleMetadata, articleStaticParams } from '@/views/ArticleView';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articleStaticParams(tr);
}

export async function generateMetadata({ params }: Params) {
  return articleMetadata(tr, (await params).slug);
}

export default async function ArticlePage({ params }: Params) {
  return <ArticleView t={tr} slug={(await params).slug} />;
}
