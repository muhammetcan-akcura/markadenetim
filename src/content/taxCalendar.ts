// Vergi takvimi: ayın beyan ve ödeme son günleri, KURALLARDAN hesaplanır (backend yok).
// Her ay kendiliğinden güncellenir; elle bakım gereken tek yer aşağıdaki `overrides` listesidir.
//
// [BİLGİ GİRİLECEK] Kurallar genel ve yerleşik takvimi yansıtır; yayın öncesi ve mevzuat
// değiştikçe sorumlu YMM tarafından doğrulanmalıdır. Kesin tarihler için GİB vergi takvimi esastır.
//
// Kaydırma: son gün hafta sonu ya da aşağıdaki sabit resmî tatillerden birine denk gelirse
// ilk iş gününe kayar (VUK md. 18). Dini bayramlar her yıl değiştiği için koda gömülmez;
// bayram/idari izin nedeniyle değişen tarihler `overrides` ile elle girilir.

import type { Locale } from '@/lib/i18n';

type Text = Record<Locale, string>;

export type TaxRule = {
  id: string;
  title: Text;
  /** "Beyan ve ödeme" gibi kısa açıklama */
  kind: Text;
  /** Ayın kaçıncı günü; 'last' = ayın son günü */
  day: number | 'last';
  /** Hangi aylarda (1–12); boşsa her ay */
  months?: number[];
  /** Kural hangi dönemi kapsar: son günün ayına göre geriye doğru */
  period: 'previousMonth' | 'previousQuarter' | 'previousYear';
};

export const taxRules: TaxRule[] = [
  {
    id: 'muhtasar',
    title: { tr: 'Muhtasar ve Prim Hizmet Beyannamesi', en: 'Withholding Tax and Social Security Premium Return (Muhtasar)' },
    kind: { tr: 'Beyan ve ödeme', en: 'Filing and payment' },
    day: 26,
    period: 'previousMonth',
  },
  {
    id: 'damga',
    title: { tr: 'Damga Vergisi Beyannamesi', en: 'Stamp Duty Return' },
    kind: { tr: 'Beyan ve ödeme', en: 'Filing and payment' },
    day: 26,
    period: 'previousMonth',
  },
  {
    id: 'kdv',
    title: { tr: 'Katma Değer Vergisi Beyannamesi (KDV 1 ve KDV 2)', en: 'VAT Returns (KDV 1 and KDV 2)' },
    kind: { tr: 'Beyan ve ödeme', en: 'Filing and payment' },
    day: 28,
    period: 'previousMonth',
  },
  {
    id: 'gecici',
    title: { tr: 'Geçici Vergi Beyannamesi', en: 'Advance (Provisional) Tax Return' },
    kind: { tr: 'Beyan ve ödeme', en: 'Filing and payment' },
    day: 17,
    months: [2, 5, 8, 11],
    period: 'previousQuarter',
  },
  {
    id: 'gelir-beyan',
    title: { tr: 'Yıllık Gelir Vergisi Beyannamesi', en: 'Annual Personal Income Tax Return' },
    kind: { tr: 'Beyan ve 1. taksit ödemesi', en: 'Filing and 1st instalment' },
    day: 31,
    months: [3],
    period: 'previousYear',
  },
  {
    id: 'gelir-taksit',
    title: { tr: 'Yıllık Gelir Vergisi', en: 'Annual Personal Income Tax' },
    kind: { tr: '2. taksit ödemesi', en: '2nd instalment' },
    day: 31,
    months: [7],
    period: 'previousYear',
  },
  {
    id: 'kurumlar',
    title: { tr: 'Kurumlar Vergisi Beyannamesi', en: 'Corporate Income Tax Return' },
    kind: { tr: 'Beyan ve ödeme', en: 'Filing and payment' },
    day: 30,
    months: [4],
    period: 'previousYear',
  },
];

/** Sabit resmî tatiller (ay-gün). Dini bayramlar burada yok: overrides ile girilir. */
const fixedHolidays = ['01-01', '04-23', '05-01', '05-19', '07-15', '08-30', '10-29'];

/**
 * Elle düzeltmeler: { "YYYY-AA" (kuralın ayı): { kural kimliği: "YYYY-AA-GG" (kesin son gün) } }.
 * Örnek: bayram nedeniyle Mayıs 2026 KDV son günü 1 Haziran'a kaydıysa
 *   '2026-05': { kdv: '2026-06-01' }
 * [BİLGİ GİRİLECEK] Bayram ve idari izin dönemlerinde GİB duyurusuna göre güncellenmelidir.
 */
export const overrides: Record<string, Record<string, string>> = {};

export type TaxDeadline = {
  id: string;
  title: string;
  kind: string;
  /** Yerel tarih, "YYYY-AA-GG" */
  date: string;
  /** Kural tarihi kaydırıldıysa true (hafta sonu / tatil / elle düzeltme) */
  shifted: boolean;
  /** "Eylül 2026", "2026 / 3. dönem", "2025 yılı" */
  period: string;
};

const MONTHS: Record<Locale, string[]> = {
  tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

const pad = (n: number) => String(n).padStart(2, '0');
const iso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

function isHoliday(d: Date) {
  const dow = d.getDay();
  return dow === 0 || dow === 6 || fixedHolidays.includes(`${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
}

function periodLabel(rule: TaxRule, year: number, month: number, locale: Locale) {
  if (rule.period === 'previousYear') return locale === 'tr' ? `${year - 1} yılı` : `Tax year ${year - 1}`;
  if (rule.period === 'previousQuarter') {
    // Son gün ayından iki ay önce biten çeyrek: Şubat → önceki yılın 4. dönemi
    const q = Math.floor(((month - 3 + 12) % 12) / 3) + 1;
    const y = month <= 2 ? year - 1 : year;
    return locale === 'tr' ? `${y} / ${q}. dönem` : `${y} Q${q}`;
  }
  const prev = new Date(year, month - 2, 1);
  return `${MONTHS[locale][prev.getMonth()]} ${prev.getFullYear()}`;
}

/** Verilen ay (1–12) için son günler, tarihe göre sıralı */
export function deadlinesFor(year: number, month: number, locale: Locale = 'tr'): TaxDeadline[] {
  const key = `${year}-${pad(month)}`;
  const manual = overrides[key] ?? {};
  return taxRules
    .filter((r) => !r.months || r.months.includes(month))
    .map((r) => {
      const lastDay = new Date(year, month, 0).getDate();
      const nominal = new Date(year, month - 1, r.day === 'last' ? lastDay : Math.min(r.day, lastDay));
      let date = new Date(nominal);
      while (isHoliday(date)) date.setDate(date.getDate() + 1);
      if (manual[r.id]) {
        const [y, m, d] = manual[r.id].split('-').map(Number);
        date = new Date(y, m - 1, d);
      }
      return {
        id: r.id,
        title: r.title[locale],
        kind: r.kind[locale],
        date: iso(date),
        shifted: iso(date) !== iso(nominal),
        period: periodLabel(r, year, month, locale),
      };
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function monthName(month: number, locale: Locale = 'tr') {
  return MONTHS[locale][month - 1];
}

/**
 * Ekranda gösterilen ay: son günü o aya düşen her şey. Önceki ayın kuralı kayarak bu aya
 * geçtiyse (ör. 28 Şubat → 1 Mart) burada görünür; bu aydan sonraki aya kayanlar görünmez.
 */
export function deadlinesInMonth(year: number, month: number, locale: Locale = 'tr'): TaxDeadline[] {
  const key = `${year}-${pad(month)}`;
  const prev = month === 1 ? [year - 1, 12] : [year, month - 1];
  return [...deadlinesFor(prev[0], prev[1], locale), ...deadlinesFor(year, month, locale)]
    .filter((d) => d.date.startsWith(key))
    .sort((a, b) => a.date.localeCompare(b.date));
}
