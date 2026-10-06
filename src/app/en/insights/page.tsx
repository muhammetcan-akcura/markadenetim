import { en } from '@/content/en';
import { InsightsIndexView, insightsIndexMetadata } from '@/views/InsightsIndexView';

export const metadata = insightsIndexMetadata(en);

export default function InsightsPageEn() {
  return <InsightsIndexView t={en} />;
}
