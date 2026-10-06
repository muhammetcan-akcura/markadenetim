import { en } from '@/content/en';
import { QualityView, qualityMetadata } from '@/views/QualityView';

export const metadata = qualityMetadata(en);

export default function QualityPageEn() {
  return <QualityView t={en} />;
}
