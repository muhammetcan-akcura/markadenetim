import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowIcon } from './ArrowIcon';
import styles from './Doc.module.css';

/*
  Belge sayfalarının koyu başlık bandı (sirküler, rehber, kalite). Geri bağlantısı, küçük etiket,
  serif başlık ve tek paragraf giriş; children bandın altına ek bilgi (ör. örnek uyarısı) koyar.
  side verilirse masaüstünde sağ sütunda durur (rehberde görsel, sirkülerde künye paneli);
  başlık 7 kolona daralır. Mobilde başlığın altına iner.
*/
export function DocHeader({
  back,
  kicker,
  title,
  lead,
  children,
  side,
}: {
  back?: { href: string; label: string };
  kicker: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  side?: ReactNode;
}) {
  return (
    <header className={styles.intro}>
      <div className={`container grid ${styles.introGrid}${side ? ` ${styles.withSide}` : ''}`}>
        {back && (
          <Link href={back.href} className={`link-arrow link-arrow--plain ${styles.back}`}>
            <ArrowIcon className={`link-arrow__icon ${styles.backIcon}`} />
            <span>{back.label}</span>
          </Link>
        )}
        <div className={styles.heading}>
          <p className={`label ${styles.kicker}`}>{kicker}</p>
          <h1 className={styles.title} id="doc-title">
            {title}
          </h1>
          {lead && <p className={styles.lead}>{lead}</p>}
          {children}
        </div>
        {side && <div className={styles.side}>{side}</div>}
      </div>
    </header>
  );
}
