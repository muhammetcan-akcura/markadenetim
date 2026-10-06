// Her sayfada bulunan kök bileşenlerin (çerez bildirimi, mobil şerit, teklif paneli) metinleri.
// Kök layout tek olduğu için bu bileşenler dili adresten anlar; tam sözlük yerine yalnızca
// ihtiyaç duydukları bölümler iki dil için gönderilir (sayfa yükü küçük kalır).
import type { Dictionary } from '@/content/tr';
import type { Locale } from './i18n';

export type ChromeText = Pick<Dictionary, 'locale' | 'cookies' | 'mobileBar' | 'quoteTab' | 'contactSection'>;
export type ChromeTexts = Record<Locale, ChromeText>;

export const pickChrome = (t: Dictionary): ChromeText => ({
  locale: t.locale,
  cookies: t.cookies,
  mobileBar: t.mobileBar,
  quoteTab: t.quoteTab,
  contactSection: t.contactSection,
});
