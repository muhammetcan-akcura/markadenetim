// Dile göre içerik: bileşenler içerik dosyalarını doğrudan değil, buradan alır.
// Koleksiyonlar dile özgüdür: İngilizce yazı ve rehberler Türkçenin çevirisi değil, kendi konularıdır.
// Sirküler yalnızca Türkçe olduğu için buraya hiç girmez (routes.circulars = null).
import { en } from '@/content/en';
import { guidesEn } from '@/content/en/guides';
import { articlesEn } from '@/content/en/insights';
import { legalEn } from '@/content/en/legal';
import { sectorsEn } from '@/content/en/sectors';
import { servicesEn } from '@/content/en/services';
import { teamMembersEn } from '@/content/en/team';
import { guides } from '@/content/guides';
import { articles } from '@/content/insights';
import { legal } from '@/content/legal';
import { sectors } from '@/content/sectors';
import { services } from '@/content/services';
import { teamMembers } from '@/content/team';
import { tr, type Dictionary } from '@/content/tr';
import type { Locale } from './i18n';

export const dictionaries: Record<Locale, Dictionary> = { tr, en };

const content = {
  tr: { services, sectors, team: teamMembers, articles, guides, legal },
  en: { services: servicesEn, sectors: sectorsEn, team: teamMembersEn, articles: articlesEn, guides: guidesEn, legal: legalEn },
};

export function getContent(locale: Locale) {
  const c = content[locale];
  return {
    ...c,
    coreServices: c.services.filter((s) => s.group === 'temel'),
    getService: (slug: string) => c.services.find((s) => s.slug === slug),
    getSector: (slug: string) => c.sectors.find((s) => s.slug === slug),
    getMember: (slug: string) => c.team.find((m) => m.slug === slug),
    getArticle: (slug: string) => c.articles.find((a) => a.slug === slug),
    getGuide: (slug: string) => c.guides.find((g) => g.slug === slug),
  };
}
