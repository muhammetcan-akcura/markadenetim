import { tr } from '@/content/tr';
import { ContactView, contactMetadata } from '@/views/ContactView';

export const metadata = contactMetadata(tr);

export default function ContactPage() {
  return <ContactView t={tr} />;
}
