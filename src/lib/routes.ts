// Dile göre adresler: bileşenler yol yazmaz, buradan alır. Aynı bileşen Türkçede
// /hizmetler/denetim, İngilizcede /en/services/audit üretir.
//
// Bir dilde olmayan bölüm `null` döner (sirküler yalnızca Türkçe). Böylece bir İngilizce sayfa
// yanlışlıkla Türkçe bir sayfaya ya da var olmayan bir adrese bağlantı veremez; derleme hatası verir.
import type { Locale } from './i18n';

/** Ana sayfa bölümlerinin ve formun kimlikleri (adres çubuğundaki #çapa) */
type SectionIds = { services: string; team: string; approach: string; insights: string; contact: string; contactForm: string };

type Routes = {
  ids: SectionIds;
  home: string;
  /** Sayfa başı çapası (logo bağlantısı) */
  top: string;
  about: string;
  chairman: string;
  quality: string;
  services: string;
  service: (slug: string) => string;
  sectors: string;
  sector: (slug: string) => string;
  /** Ana sayfadaki ekip bölümü */
  team: string;
  member: (slug: string) => string;
  insights: string;
  article: (slug: string) => string;
  guides: string;
  guide: (slug: string) => string;
  /** Sayfalı dizinlerde sayfa kelimesi: /rehber/sayfa/2, /en/guides/page/2 */
  pageSegment: string;
  circulars: string | null;
  taxCalendar: string;
  contact: string;
  contactForm: string;
  kvkk: string;
  privacy: string;
  cookies: string;
};

const tr: Routes = {
  ids: { services: 'hizmetler', team: 'ekip', approach: 'yaklasim', insights: 'guncel', contact: 'iletisim', contactForm: 'iletisim-formu' },
  home: '/',
  top: '/#top',
  about: '/hakkimizda',
  chairman: '/hakkimizda/baskanin-mesaji',
  quality: '/kalite-ve-bagimsizlik',
  services: '/hizmetler',
  service: (s) => `/hizmetler/${s}`,
  sectors: '/sektorler',
  sector: (s) => `/sektorler/${s}`,
  team: '/#ekip',
  member: (s) => `/ekip/${s}`,
  insights: '/guncel',
  article: (s) => `/guncel/${s}`,
  guides: '/rehber',
  guide: (s) => `/rehber/${s}`,
  pageSegment: 'sayfa',
  circulars: '/sirkuler',
  taxCalendar: '/vergi-takvimi',
  contact: '/iletisim',
  contactForm: '/iletisim#iletisim-formu',
  kvkk: '/kvkk',
  privacy: '/gizlilik',
  cookies: '/cerez',
};

const en: Routes = {
  ids: { services: 'services', team: 'team', approach: 'approach', insights: 'insights', contact: 'contact', contactForm: 'contact-form' },
  home: '/en',
  top: '/en#top',
  about: '/en/about',
  chairman: '/en/about/chairmans-message',
  quality: '/en/quality-and-independence',
  services: '/en/services',
  service: (s) => `/en/services/${s}`,
  sectors: '/en/sectors',
  sector: (s) => `/en/sectors/${s}`,
  team: '/en#team',
  member: (s) => `/en/team/${s}`,
  insights: '/en/insights',
  article: (s) => `/en/insights/${s}`,
  guides: '/en/guides',
  guide: (s) => `/en/guides/${s}`,
  pageSegment: 'page',
  // Sirküler yalnızca Türkçe (karar: 2026-10)
  circulars: null,
  taxCalendar: '/en/tax-calendar',
  contact: '/en/contact',
  contactForm: '/en/contact#contact-form',
  kvkk: '/en/privacy-notice',
  privacy: '/en/privacy',
  cookies: '/en/cookies',
};

export const routes: Record<Locale, Routes> = { tr, en };
