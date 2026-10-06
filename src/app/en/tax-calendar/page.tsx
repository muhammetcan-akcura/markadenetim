import { en } from '@/content/en';
import { TaxCalendarPageView, taxCalendarMetadata } from '@/views/TaxCalendarPageView';

export const metadata = taxCalendarMetadata(en);

export default function TaxCalendarPageEn() {
  return <TaxCalendarPageView t={en} />;
}
