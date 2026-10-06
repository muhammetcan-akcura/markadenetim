import { tr } from '@/content/tr';
import { GuidesIndexView, guidesMetadata } from '@/views/GuidesIndexView';

export const metadata = guidesMetadata(tr, 1);

export default function GuidesPage() {
  return <GuidesIndexView t={tr} page={1} />;
}
