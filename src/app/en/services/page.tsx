import { en } from '@/content/en';
import { ServicesIndexView, servicesIndexMetadata } from '@/views/ServicesIndexView';

export const metadata = servicesIndexMetadata(en);

export default function ServicesPageEn() {
  return <ServicesIndexView t={en} />;
}
