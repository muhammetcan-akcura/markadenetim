import { tr } from '@/content/tr';
import { ChairmanView, chairmanMetadata } from '@/views/ChairmanView';

export const metadata = chairmanMetadata(tr);

export default function ChairmanPage() {
  return <ChairmanView t={tr} />;
}
