import { en } from '@/content/en';
import { SectorsIndexView, sectorsIndexMetadata } from '@/views/SectorsIndexView';

export const metadata = sectorsIndexMetadata(en);

export default function SectorsPageEn() {
  return <SectorsIndexView t={en} />;
}
