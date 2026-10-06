import { tr } from '@/content/tr';
import { InsightsIndexView, insightsIndexMetadata } from '@/views/InsightsIndexView';

export const metadata = insightsIndexMetadata(tr);

export default function InsightsPage() {
  return <InsightsIndexView t={tr} />;
}
