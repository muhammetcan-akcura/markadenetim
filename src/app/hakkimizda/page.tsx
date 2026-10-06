import { tr } from '@/content/tr';
import { AboutView, aboutMetadata } from '@/views/AboutView';

export const metadata = aboutMetadata(tr);

export default function AboutPage() {
  return <AboutView t={tr} />;
}
