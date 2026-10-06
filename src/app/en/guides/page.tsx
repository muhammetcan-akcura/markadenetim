import { en } from '@/content/en';
import { GuidesIndexView, guidesMetadata } from '@/views/GuidesIndexView';

export const metadata = guidesMetadata(en, 1);

export default function GuidesPageEn() {
  return <GuidesIndexView t={en} page={1} />;
}
