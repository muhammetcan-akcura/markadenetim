import { tr } from '@/content/tr';
import { ServiceView, serviceMetadata, serviceStaticParams } from '@/views/ServiceView';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceStaticParams(tr);
}

export async function generateMetadata({ params }: Params) {
  return serviceMetadata(tr, (await params).slug);
}

export default async function ServicePage({ params }: Params) {
  return <ServiceView t={tr} slug={(await params).slug} />;
}
