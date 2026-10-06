import { en } from '@/content/en';
import { AboutView, aboutMetadata } from '@/views/AboutView';

export const metadata = aboutMetadata(en);

export default function AboutPageEn() {
  return <AboutView t={en} />;
}
