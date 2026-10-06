import type { Dictionary } from '@/content/tr';
import { switchMap } from '@/lib/alternates';
import { getContent } from '@/lib/content';
import { localeLabels, publishedLocales } from '@/lib/i18n';
import { routes } from '@/lib/routes';
import { SiteHeaderClient, type NavMenus } from './SiteHeaderClient';

/*
  Sunucu sarmalayıcı: açılır menülerin içeriğini burada, yalnızca gereken alanlarla ve sözlüğün
  diline göre kurar. İçerik dosyalarının uzun metinleri istemci paketine girmez; header'a başlık,
  bağlantı ve kısa bir üst bilgi (numara / unvan) gider. Menüler, sözlükteki üst bağlantının
  adresine (t.nav[].href) göre eşleşir; o dilde olmayan bölüm menü almaz.
*/
export function SiteHeader({ t }: { t: Dictionary }) {
  const r = routes[t.locale];
  const c = getContent(t.locale);
  const g = t.services.page.groups;
  const sectorItems = c.sectors.map((s) => ({ href: r.sector(s.slug), label: s.title, meta: s.num }));

  const menus: NavMenus = {
    [r.about]: { groups: [{ items: t.navMenu.about }] },
    [r.services]: {
      wide: true,
      groups: (['temel', 'uzman'] as const).map((key) => ({
        label: g[key],
        items: c.services
          .filter((s) => s.group === key)
          .map((s) => ({ href: r.service(s.slug), label: s.title, meta: s.num })),
      })),
      all: { href: r.services, label: t.navMenu.allServices },
    },
    // Sektörler: Hizmetler paneliyle aynı düzen (numara + ad), iki sütun
    [r.sectors]: {
      wide: true,
      groups: [{ items: sectorItems.slice(0, 3) }, { items: sectorItems.slice(3) }],
      all: { href: r.sectors, label: t.navMenu.allSectors },
    },
    [r.team]: {
      groups: [{ items: c.team.map((m) => ({ href: r.member(m.slug), label: m.name, meta: m.titles[0] })) }],
      all: { href: r.team, label: t.navMenu.allTeam },
    },
  };
  // Yazılar ve vergi takvimi yalnızca o dilde varsa menü alır
  if (r.insights && t.navMenu.insights.length > 0) menus[r.insights] = { groups: [{ items: t.navMenu.insights }] };

  // Dil seçici: yayındaki diğer diller için yol → hedef tablosu (birebir karşılık, yoksa bölüm
  // dizini, yoksa ana sayfa). Tek dil yayındaysa boş kalır ve seçici çizilmez.
  // Bulunulan dil de listede: seçici onu işaretli gösterir
  const languages =
    publishedLocales.length < 2
      ? []
      : publishedLocales.map((l) => ({
          locale: l,
          short: localeLabels[l].short,
          name: localeLabels[l].name,
          home: routes[l].home,
          current: l === t.locale,
          map: l === t.locale ? {} : switchMap(l),
        }));

  return <SiteHeaderClient t={t} menus={menus} languages={languages} />;
}
