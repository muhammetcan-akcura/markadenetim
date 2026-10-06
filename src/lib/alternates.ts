// Diller arası sayfa karşılıkları. İki dilin içeriği birbirinin çevirisi olmak zorunda değil:
// - Bölümler (hizmetler, rehber…) her dilde var olabilir ya da olmayabilir (Sirküler yalnızca TR).
// - Bölüm içindeki içerikler (rehber, yazı, hizmet…) dile özgüdür; başka dilde karşılığı varsa
//   aynı `pair` anahtarını taşırlar, yoksa bağımsız yaşarlar.
//
// Dil seçici şu sırayla hedef bulur: 1) birebir karşılık, 2) aynı bölümün dizini, 3) ana sayfa.
// hreflang ise yalnızca 1) birebir karşılık varsa yazılır (ilgisiz sayfalar çeviri sayılmasın).
//
// Yeni bir İngilizce sayfa yayına alındığında yapılacak tek şey: aşağıda yolunu eklemek.
import { articles } from '@/content/insights';
import { circulars } from '@/content/circulars';
import { guides } from '@/content/guides';
import { sectors } from '@/content/sectors';
import { services } from '@/content/services';
import { teamMembers } from '@/content/team';
import { guidesEn } from '@/content/en/guides';
import { articlesEn } from '@/content/en/insights';
import { sectorsEn } from '@/content/en/sectors';
import { servicesEn } from '@/content/en/services';
import { teamMembersEn } from '@/content/en/team';
import type { Locale } from './i18n';

type Paths = Partial<Record<Locale, string>>;

/** Bölüm dizinleri ve tekil sayfalar. Yalnızca VAR OLAN sayfaların yolu yazılır. */
const sections: { id: string; paths: Paths }[] = [
  { id: 'home', paths: { tr: '/', en: '/en' } },
  { id: 'about', paths: { tr: '/hakkimizda', en: '/en/about' } },
  { id: 'chairman', paths: { tr: '/hakkimizda/baskanin-mesaji', en: '/en/about/chairmans-message' } },
  { id: 'quality', paths: { tr: '/kalite-ve-bagimsizlik', en: '/en/quality-and-independence' } },
  { id: 'services', paths: { tr: '/hizmetler', en: '/en/services' } },
  { id: 'sectors', paths: { tr: '/sektorler', en: '/en/sectors' } },
  { id: 'team', paths: { tr: '/#ekip', en: '/en#team' } },
  { id: 'insights', paths: { tr: '/guncel', en: '/en/insights' } },
  { id: 'guides', paths: { tr: '/rehber', en: '/en/guides' } },
  // Sirküler yalnızca Türkçe: İngilizcede karşılığı olmayacak (karar: 2026-10)
  { id: 'circulars', paths: { tr: '/sirkuler' } },
  { id: 'taxCalendar', paths: { tr: '/vergi-takvimi', en: '/en/tax-calendar' } },
  { id: 'contact', paths: { tr: '/iletisim', en: '/en/contact' } },
  { id: 'kvkk', paths: { tr: '/kvkk', en: '/en/privacy-notice' } },
  { id: 'privacy', paths: { tr: '/gizlilik', en: '/en/privacy' } },
  { id: 'cookies', paths: { tr: '/cerez', en: '/en/cookies' } },
];

type Entry = { path: string; pair?: string };

/**
 * Bölüm içi içerikler, dil başına ayrı listeler. İngilizce içerik eklendiğinde ilgili `en`
 * dizisi doldurulur; `pair` aynıysa iki sayfa birbirinin karşılığı sayılır.
 * Hizmet ve sektörlerde eşleme anahtarı Türkçe slug'dır.
 */
const collections: { section: string; entries: Partial<Record<Locale, Entry[]>> }[] = [
  {
    section: 'services',
    entries: {
      tr: services.map((s) => ({ path: `/hizmetler/${s.slug}`, pair: s.slug })),
      en: servicesEn.map((s) => ({ path: `/en/services/${s.slug}`, pair: s.pair })),
    },
  },
  {
    section: 'sectors',
    entries: {
      tr: sectors.map((s) => ({ path: `/sektorler/${s.slug}`, pair: s.slug })),
      en: sectorsEn.map((s) => ({ path: `/en/sectors/${s.slug}`, pair: s.pair })),
    },
  },
  {
    section: 'team',
    entries: {
      tr: teamMembers.map((m) => ({ path: `/ekip/${m.slug}`, pair: m.slug })),
      en: teamMembersEn.map((m) => ({ path: `/en/team/${m.slug}`, pair: m.slug })),
    },
  },
  {
    section: 'guides',
    entries: {
      tr: guides.map((g) => ({ path: `/rehber/${g.slug}`, pair: g.pair })),
      en: guidesEn.map((g) => ({ path: `/en/guides/${g.slug}`, pair: g.pair })),
    },
  },
  {
    section: 'insights',
    entries: {
      tr: articles.map((a) => ({ path: `/guncel/${a.slug}`, pair: a.pair })),
      en: articlesEn.map((a) => ({ path: `/en/insights/${a.slug}`, pair: a.pair })),
    },
  },
  { section: 'circulars', entries: { tr: circulars.map((c) => ({ path: `/sirkuler/${c.slug}` })) } },
];

const clean = (p: string) => (p.length > 1 ? p.replace(/\/$/, '') : p);

/** Birebir karşılık (hreflang için). Yoksa null. */
export function exactCounterpart(path: string, target: Locale): string | null {
  const p = clean(path);
  for (const s of sections) {
    if (Object.values(s.paths).includes(p)) return s.paths[target] ?? null;
  }
  for (const c of collections) {
    for (const list of Object.values(c.entries)) {
      const hit = list?.find((e) => e.path === p);
      if (hit) {
        if (!hit.pair) return null;
        return c.entries[target]?.find((e) => e.pair === hit.pair)?.path ?? null;
      }
    }
  }
  return null;
}

/** Yolun ait olduğu bölüm: önce içerik listelerinde, sonra en uzun eşleşen bölüm önekiyle */
function sectionOf(p: string): string | undefined {
  const fromCollection = collections.find((c) => Object.values(c.entries).some((l) => l?.some((e) => e.path === p)));
  if (fromCollection) return fromCollection.section;
  let best: { id: string; len: number } | undefined;
  for (const s of sections) {
    for (const sp of Object.values(s.paths)) {
      // Ana sayfa ve çapa (#) yolları önek sayılmaz
      if (sp === '/' || sp.includes('#')) continue;
      if ((p === sp || p.startsWith(`${sp}/`)) && (!best || sp.length > best.len)) best = { id: s.id, len: sp.length };
    }
  }
  return best?.id;
}

/** Dil seçicinin hedefi: birebir karşılık → bölüm dizini → ana sayfa */
export function switchTarget(path: string, target: Locale): string {
  const p = clean(path);
  const exact = exactCounterpart(p, target);
  if (exact) return exact;
  const index = sections.find((s) => s.id === sectionOf(p))?.paths[target];
  return index ?? sections[0].paths[target] ?? '/';
}

/** Tüm bilinen yollar için seçici hedefleri (header'a tek seferde verilir) */
export function switchMap(target: Locale): Record<string, string> {
  const all = new Set<string>();
  sections.forEach((s) => Object.values(s.paths).forEach((p) => !p.includes('#') && all.add(p)));
  collections.forEach((c) => Object.values(c.entries).forEach((l) => l?.forEach((e) => all.add(e.path))));
  return Object.fromEntries([...all].map((p) => [p, switchTarget(p, target)]));
}
