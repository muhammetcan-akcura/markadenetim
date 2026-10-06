import { tr } from '@/content/tr';
import { MemberView, memberMetadata, memberStaticParams } from '@/views/MemberView';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return memberStaticParams(tr);
}

export async function generateMetadata({ params }: Params) {
  return memberMetadata(tr, (await params).slug);
}

export default async function MemberPage({ params }: Params) {
  return <MemberView t={tr} slug={(await params).slug} />;
}
