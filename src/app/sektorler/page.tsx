import { tr } from '@/content/tr';
import { SectorsIndexView, sectorsIndexMetadata } from '@/views/SectorsIndexView';

export const metadata = sectorsIndexMetadata(tr);

export default function SectorsPage() {
  return <SectorsIndexView t={tr} />;
}
