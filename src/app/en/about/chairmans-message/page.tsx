import { en } from '@/content/en';
import { ChairmanView, chairmanMetadata } from '@/views/ChairmanView';

export const metadata = chairmanMetadata(en);

export default function ChairmanPageEn() {
  return <ChairmanView t={en} />;
}
