'use client';

import { useEffect } from 'react';
import type { ChromeTexts } from '@/lib/chrome';
import { routes } from '@/lib/routes';
import { setConsent, useConsent } from '@/lib/consent';
import styles from './CookieNotice.module.css';
import { useChrome } from './useChrome';

/*
  Çerez bildirimi. Modal değil: sayfayı kilitlemez, okumayı engellemez; masaüstünde sol altta
  dar bir panel, mobilde alta yaslı tam genişlik şerit. Kabul ve ret aynı görsel ağırlıkta
  (KVKK: reddetmek kabul etmek kadar kolay). Tercih verilince kaybolur; footer'daki
  "Çerez tercihleri" ile yeniden açılır.
*/
export function CookieNotice({ texts }: { texts: ChromeTexts }) {
  const consent = useConsent();
  const open = consent === null;
  const t = useChrome(texts);
  const c = t.cookies;

  // Açıkken mobildeki hızlı iletişim çubuğu gizlenir: ikisi aynı alt kenarı paylaşır
  useEffect(() => {
    document.documentElement.classList.toggle('cookie-open', open);
    return () => document.documentElement.classList.remove('cookie-open');
  }, [open]);

  if (!open) return null;

  return (
    <section className={styles.notice} aria-labelledby="cookie-title" lang={t.locale}>
      <h2 className={`label ${styles.label}`} id="cookie-title">
        <span className={styles.rule} aria-hidden="true" />
        <span className="sr-only">{c.title}: </span>
        {c.label}
      </h2>
      <p className={styles.text}>
        {c.text}{' '}
        <a className={styles.policy} href={routes[t.locale].cookies}>
          {c.policy}
        </a>
      </p>
      <div className={styles.actions}>
        <button type="button" className={`btn-frame ${styles.btn}`} onClick={() => setConsent('all')}>
          {c.accept}
        </button>
        <button type="button" className={`btn-frame ${styles.btn}`} onClick={() => setConsent('necessary')}>
          {c.reject}
        </button>
      </div>
    </section>
  );
}

/** Footer'daki "Çerez tercihleri": tercihi silerek bildirimi yeniden açar */
export function CookieSettingsButton({ label, className }: { label: string; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => setConsent(null)}>
      {label}
    </button>
  );
}
