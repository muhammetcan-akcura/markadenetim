import { tr } from '@/content/tr';
import { ServicesIndexView, servicesIndexMetadata } from '@/views/ServicesIndexView';

export const metadata = servicesIndexMetadata(tr);

export default function ServicesPage() {
  return <ServicesIndexView t={tr} />;
}
