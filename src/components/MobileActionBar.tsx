'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './MobileActionBar.module.css';

export function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      // Eğer sayfada hero bölümü yoksa (alt sayfalar vs.), bar direkt görünür olsun
      if (!hero) {
        setIsVisible(true);
        return;
      }

      const rect = hero.getBoundingClientRect();
      // Hero'nun alt kenarı ekranın üst yarısını terk edip bir alt bölüme geçildiğinde göster
      const shouldShow = rect.bottom <= window.innerHeight * 0.35;
      setIsVisible(shouldShow);
    };

    // İlk yüklemede ve sayfa geçişlerinde kontrol et
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  return (
    <nav
      className={`${styles.barWrapper} ${isVisible ? styles.visible : styles.hidden}`}
      aria-label="Hızlı İletişim"
      aria-hidden={!isVisible}
    >
      <div className={styles.bar}>
        {/* 1. WHATSAPP */}
        <a
          href="https://wa.me/905350297913?text=Merhaba%2C%20MarkaDenetim%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
          tabIndex={isVisible ? 0 : -1}
          aria-label="WhatsApp ile iletişime geçin"
        >
          <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
          <span className={styles.btnText}>WHATSAPP</span>
          <svg className={styles.chevron} viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m1 1 4 4-4 4" />
          </svg>
        </a>

        {/* Ara Çizgi 1 */}
        <span className={styles.divider} aria-hidden="true" />

        {/* 2. BİLGİ AL */}
        <a
          href="/#iletisim"
          className={styles.actionBtn}
          tabIndex={isVisible ? 0 : -1}
          aria-label="Bilgi almak için iletişim formuna gidin"
        >
          <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="20" height="15" x="2" y="4.5" rx="2" />
            <path d="m22 6.5-10 6.5L2 6.5" />
          </svg>
          <span className={styles.btnText}>BİLGİ AL</span>
          <svg className={styles.chevron} viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m1 1 4 4-4 4" />
          </svg>
        </a>

        {/* Ara Çizgi 2 */}
        <span className={styles.divider} aria-hidden="true" />

        {/* 3. ARA */}
        <a
          href="tel:+905350297913"
          className={styles.actionBtn}
          tabIndex={isVisible ? 0 : -1}
          aria-label="Telefonla arayın: +90 535 029 79 13"
        >
          <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className={styles.btnText}>ARA</span>
          <svg className={styles.chevron} viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m1 1 4 4-4 4" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
