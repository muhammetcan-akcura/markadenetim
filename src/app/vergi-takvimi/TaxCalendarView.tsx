'use client';

import { useEffect, useState } from 'react';
import { deadlinesInMonth, monthName } from '@/content/taxCalendar';
import type { Dictionary } from '@/content/tr';
import styles from './TaxCalendar.module.css';

const WEEKDAYS = {
  tr: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
const DAY_MS = 86_400_000;

const toDate = (isoDate: string) => {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d);
};

/*
  Ay görünümü. Sunucu, derleme anındaki ayı HTML olarak üretir (arama motoru ve JS'siz okur için);
  tarayıcıda bugünün ayına geçilir ve durumlar (geçti / bugün / n gün kaldı) eklenir.
  Ay değiştirme ve "sıradaki son gün" tamamen istemcide; backend yok.
*/
export function TaxCalendarView({ t, initial }: { t: Dictionary; initial: { year: number; month: number } }) {
  const c = t.taxCalendar;
  const [view, setView] = useState(initial);
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    setToday(d);
    setView({ year: d.getFullYear(), month: d.getMonth() + 1 });
  }, []);

  const shift = (delta: number) =>
    setView(({ year, month }) => {
      const d = new Date(year, month - 1 + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() + 1 };
    });

  const items = deadlinesInMonth(view.year, view.month, t.locale);
  const isCurrent = today && view.year === today.getFullYear() && view.month === today.getMonth() + 1;

  // Sıradaki son gün: bugünden itibaren en yakını (bu ay yoksa sonraki aylara bakılır)
  let next: (ReturnType<typeof deadlinesInMonth>[number] & { days: number }) | null = null;
  if (today) {
    for (let i = 0; i < 3 && !next; i++) {
      const d = new Date(today.getFullYear(), today.getMonth() + i, 1);
      const hit = deadlinesInMonth(d.getFullYear(), d.getMonth() + 1, t.locale).find((x) => toDate(x.date) >= today);
      if (hit) next = { ...hit, days: Math.round((toDate(hit.date).getTime() - today.getTime()) / DAY_MS) };
    }
  }

  const status = (isoDate: string) => {
    if (!today) return null;
    const diff = Math.round((toDate(isoDate).getTime() - today.getTime()) / DAY_MS);
    if (diff < 0) return { label: c.passed, tone: styles.passed };
    if (diff === 0) return { label: c.today, tone: styles.today };
    return { label: `${diff} ${c.daysLeft}`, tone: styles.upcoming };
  };

  return (
    <div className={styles.view}>
      {next && (
        <p className={styles.next} aria-live="polite">
          <span className={`label ${styles.nextLabel}`}>{c.next}</span>
          <span className={styles.nextDate}>
            {toDate(next.date).getDate()} {monthName(toDate(next.date).getMonth() + 1, t.locale)}
          </span>
          <span className={styles.nextTitle}>{next.title}</span>
          <span className={styles.nextDays}>{next.days === 0 ? c.today : `${next.days} ${c.daysLeft}`}</span>
        </p>
      )}

      <div className={styles.toolbar}>
        <button type="button" className={styles.step} onClick={() => shift(-1)}>
          <span aria-hidden="true">←</span> <span className={styles.stepText}>{c.prev}</span>
        </button>
        <h2 className={styles.month} aria-live="polite">
          {monthName(view.month, t.locale)} {view.year}
          {isCurrent && <span className={styles.currentTag}>{c.current}</span>}
        </h2>
        <button type="button" className={styles.step} onClick={() => shift(1)}>
          <span className={styles.stepText}>{c.nextMonth}</span> <span aria-hidden="true">→</span>
        </button>
      </div>

      {items.length === 0 ? (
        <p className={styles.empty}>{c.empty}</p>
      ) : (
        <ol className={styles.list}>
          {items.map((d) => {
            const date = toDate(d.date);
            const st = status(d.date);
            return (
              <li key={`${d.id}-${d.date}`} className={`${styles.row}${st ? ` ${st.tone}` : ''}`}>
                <time className={styles.date} dateTime={d.date}>
                  <span className={styles.day}>{date.getDate()}</span>
                  <span className={styles.weekday}>{WEEKDAYS[t.locale][date.getDay()]}</span>
                </time>
                <div className={styles.body}>
                  <h3 className={styles.title}>{d.title}</h3>
                  <p className={styles.meta}>
                    {d.kind} · {c.period}: {d.period}
                    {d.shifted && <span className={styles.shifted}>{c.shifted}</span>}
                  </p>
                </div>
                {st && <span className={styles.status}>{st.label}</span>}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
