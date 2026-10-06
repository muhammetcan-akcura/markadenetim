import { en } from '@/content/en';
import { ContactView, contactMetadata } from '@/views/ContactView';

export const metadata = contactMetadata(en);

export default function ContactPageEn() {
  return <ContactView t={en} />;
}
