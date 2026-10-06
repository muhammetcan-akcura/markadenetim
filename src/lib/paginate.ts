// Dizin sayfalaması (sirküler, rehber). Sayfalar statik üretilir: 1. sayfa kök adreste
// (/sirkuler), sonrakiler /sirkuler/sayfa/2 (İngilizcede /en/guides/page/2) biçiminde. Sorgu parametresi kullanılmaz;
// böylece her sayfa SSG ile HTML olarak gelir ve arama motoru için ayrı bir adresi olur.

/** 3 sütunlu kart ızgarasında iki tam sıra */
export const PAGE_SIZE = 6;

export function pageCount(total: number) {
  return Math.max(1, Math.ceil(total / PAGE_SIZE));
}

export function pageItems<T>(items: T[], page: number): T[] {
  return items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
}

/** segment: dile göre sayfa kelimesi (routes[l].pageSegment) */
export function pageHref(base: string, page: number, segment = 'sayfa') {
  return page <= 1 ? base : `${base}/${segment}/${page}`;
}

/** 2..n için statik parametreler (1. sayfa kök adreste) */
export function extraPageParams(total: number) {
  return Array.from({ length: pageCount(total) - 1 }, (_, i) => ({ page: String(i + 2) }));
}

/** "/sayfa/x" parametresini doğrular; geçersizse null (çağıran notFound der) */
export function parsePage(param: string, total: number): number | null {
  const n = Number(param);
  return Number.isInteger(n) && n >= 2 && n <= pageCount(total) ? n : null;
}
