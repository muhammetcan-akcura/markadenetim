'use client';

import { useId, useMemo, useState, type ReactNode } from 'react';
import type { Dictionary } from '@/content/tr';
import { DocList, type DocListItem } from './DocList';
import styles from './Doc.module.css';

export type FinderItem = DocListItem & { topic: string; /** Başlık + özet + gövde: aranan metin */ search: string };

/** Türkçe duyarsız karşılaştırma: küçük harf (tr) + aksan/nokta farklarını eşitler (ş→s, ı→i, ö→o…) */
const norm = (s: string) =>
  s
    .toLocaleLowerCase('tr')
    .replace(/ı/g, 'i')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

/*
  Arama ve konu filtresi (backend yok). Tüm içerik küçük bir dizi olarak sayfaya gömülür.
  Filtre boşken sunucunun sayfalı listesi (children) olduğu gibi gösterilir: SSG çıktısı ve
  sayfalama bozulmaz. Arama ya da konu seçilince tüm sayfalar taranır ve sonuçlar tek listede gelir.
  Kelimelerin hepsi geçmeli (VE araması).
*/
export function DocFinder({
  t,
  items,
  topics,
  readLabel,
  children,
}: {
  t: Dictionary;
  items: FinderItem[];
  topics: string[];
  readLabel: string;
  children: ReactNode;
}) {
  const f = t.finder;
  const inputId = useId();
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState<string | null>(null);

  const active = query.trim() !== '' || topic !== null;
  const results = useMemo(() => {
    if (!active) return [];
    const words = norm(query).split(/\s+/).filter(Boolean);
    return items.filter((it) => {
      if (topic && it.topic !== topic) return false;
      const hay = norm(it.search);
      return words.every((w) => hay.includes(w));
    });
  }, [items, query, topic, active]);

  const clear = () => {
    setQuery('');
    setTopic(null);
  };

  return (
    <>
      <div className={styles.finder} role="search">
        <div className={styles.searchField}>
          <label htmlFor={inputId} className="sr-only">
            {f.label}
          </label>
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={f.placeholder}
            autoComplete="off"
          />
        </div>
        <div className={styles.chips} role="group" aria-label={f.topics}>
          <button type="button" className={styles.chip} aria-pressed={topic === null} onClick={() => setTopic(null)}>
            {f.all}
          </button>
          {topics.map((tp) => (
            <button
              key={tp}
              type="button"
              className={styles.chip}
              aria-pressed={topic === tp}
              onClick={() => setTopic(topic === tp ? null : tp)}
            >
              {tp}
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div aria-live="polite">
          <p className={styles.resultCount}>
            {results.length} {f.results}
            <button type="button" className={styles.clear} onClick={clear}>
              {f.clear}
            </button>
          </p>
          {results.length > 0 ? (
            <DocList items={results} readLabel={readLabel} />
          ) : (
            <p className={styles.noResults}>{f.none}</p>
          )}
        </div>
      ) : (
        children
      )}
    </>
  );
}
