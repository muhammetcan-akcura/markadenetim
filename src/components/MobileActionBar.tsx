'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { ChromeTexts } from '@/lib/chrome';
import styles from './MobileActionBar.module.css';
import { useChrome } from './useChrome';

/*
  Mobil hızlı iletişim şeridi (<768px). Sitenin diliyle: ekranın alt kenarına oturan köşesiz
  lacivert şerit, üstte 1px altın çizgi, üç eşit hücre ve aralarında 1px ayraç. İkon, hap biçimi,
  gölge ve bulanıklık yok (BRIEF §02). Hero geçilene kadar gizli: ilk ekranı kalabalıklaştırmaz.
*/
export function MobileActionBar({ texts }: { texts: ChromeTexts }) {
  const t = useChrome(texts);
  const m = t.mobileBar;
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const hero = document.getElementById('hero');
    // Hero yoksa (alt sayfalar) şerit doğrudan görünür
    if (!hero) {
      setIsVisible(true);
      return;
    }
    // Hero'nun alt kenarı ekranın üst %35'inin üstüne çıkınca göster (scroll'da DOM ölçülmez)
    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { rootMargin: '0px 0px -65% 0px' },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  const tab = isVisible ? 0 : -1;

  return (
    <nav
      className={`${styles.bar}${isVisible ? ` ${styles.visible}` : ''}`}
      aria-label={m.label}
      aria-hidden={!isVisible}
    >
      <a className={styles.cell} href={m.whatsapp.href} target="_blank" rel="noopener noreferrer" tabIndex={tab}>
        {m.whatsapp.label}
        <span className="sr-only">{t.contactSection.newTab}</span>
      </a>
      <a className={`${styles.cell} ${styles.primary}`} href={m.form.href} tabIndex={tab}>
        {m.form.label}
      </a>
      <a className={styles.cell} href={m.call.href} tabIndex={tab}>
        {m.call.label}
      </a>
    </nav>
  );
}
