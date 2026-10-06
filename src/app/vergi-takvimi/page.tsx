import { tr } from '@/content/tr';
import { TaxCalendarPageView, taxCalendarMetadata } from '@/views/TaxCalendarPageView';

export const metadata = taxCalendarMetadata(tr);

export default function TaxCalendarPage() {
  return <TaxCalendarPageView t={tr} />;
}
