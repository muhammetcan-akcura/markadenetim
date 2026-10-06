import type { ReactNode } from 'react';
import type { Dictionary } from '@/content/tr';
import { routes } from '@/lib/routes';
import { ArrowIcon } from './ArrowIcon';
import styles from './StatusPage.module.css';

/*
  404 ve hata sayfalarının ortak gövdesi. Hook içermez: hem sunucu (not-found) hem
  istemci (error, global-error) bileşeninden çağrılabilir.
  Kompozisyon hero'nun sessiz bir yankısı: koyu zemin, solda büyük serif ifade, sağda
  1px çizgilerle ayrılmış kısa bir "devam" listesi. Görsel, ikon, animasyon yok;
  ziyaretçi kaybolduğu anda sayfa ona yalnızca bir sonraki adımı gösterir.
*/
export function StatusPage({
  t,
  kind,
  actions,
  note,
}: {
  t: Dictionary;
  kind: 'notFound' | 'error';
  /** Ana sayfa bağlantısının yanına eklenecek ek eylem (hata sayfasında "Yeniden dene") */
  actions?: ReactNode;
  /** Başlığın altında küçük gri satır (hata kodu gibi) */
  note?: ReactNode;
}) {
  const s = t.status;
  const c = s[kind];
  return (
    <section className={styles.page} aria-labelledby="status-title">
      <div className={`container ${styles.inner}`}>
        <p className={styles.head}>
          <span className={`label ${styles.code}`}>{c.code}</span>
          <span className={`label ${styles.label}`}>{c.label}</span>
          <span className={styles.rule} aria-hidden="true" />
        </p>

        <div className={styles.grid}>
          <div className={styles.main}>
            <h1 className={`t-display ${styles.title}`} id="status-title">
              {c.title}
            </h1>
            <p className={styles.text}>{c.text}</p>
            {note && <p className={styles.note}>{note}</p>}
            <div className={styles.actions}>
              {/* Tam sayfa yüklemesi: hata durumunda istemci yönlendiricisine güvenilmez */}
              <a className="link-arrow" href={routes[t.locale].home}>
                <span>{s.home}</span>
                <ArrowIcon />
              </a>
              {actions}
            </div>
          </div>

          <nav className={styles.links} aria-labelledby="status-links">
            <p className={`label ${styles.linksLabel}`} id="status-links">
              {s.linksLabel}
            </p>
            <ul>
              {s.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>
                    <span>{l.label}</span>
                    <ArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
