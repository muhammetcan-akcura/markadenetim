// Dil tanımları. Türkçe kökte (/hizmetler), İngilizce /en altında (/en/services).
// Tarayıcı diline göre otomatik yönlendirme bilinçli olarak yok: arama motorlarını ve
// yurt dışındaki Türkçe ziyaretçiyi yanıltır; dil seçimi header'daki seçiciyle yapılır.

export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'tr';

/**
 * Yayında olan diller. İngilizce ana sayfa ve çekirdek sayfalar hazır olunca 'en' eklenir;
 * o zamana kadar dil seçici görünmez ve yarım bir İngilizce site yayına çıkmaz.
 */
export const publishedLocales: readonly Locale[] = ['tr', 'en'];

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  tr: { short: 'TR', name: 'Türkçe' },
  en: { short: 'EN', name: 'English' },
};

/** Open Graph yerel ayarı */
export const ogLocale: Record<Locale, string> = { tr: 'tr_TR', en: 'en_US' };

/** Yoldan dil: /en ve /en/... İngilizce, geri kalan her şey Türkçe */
export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'tr';
}
