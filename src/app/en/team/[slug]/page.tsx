import { en } from '@/content/en';
import { MemberView, memberMetadata, memberStaticParams } from '@/views/MemberView';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return memberStaticParams(en);
}

export async function generateMetadata({ params }: Params) {
  return memberMetadata(en, (await params).slug);
}

export default async function MemberPageEn({ params }: Params) {
  return <MemberView t={en} slug={(await params).slug} />;
}
