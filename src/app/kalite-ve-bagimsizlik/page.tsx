import { tr } from '@/content/tr';
import { QualityView, qualityMetadata } from '@/views/QualityView';

export const metadata = qualityMetadata(tr);

export default function QualityPage() {
  return <QualityView t={tr} />;
}
