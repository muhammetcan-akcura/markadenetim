import { en } from '@/content/en';
import { ServiceView, serviceMetadata, serviceStaticParams } from '@/views/ServiceView';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceStaticParams(en);
}

export async function generateMetadata({ params }: Params) {
  return serviceMetadata(en, (await params).slug);
}

export default async function ServicePageEn({ params }: Params) {
  return <ServiceView t={en} slug={(await params).slug} />;
}
