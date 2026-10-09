import Image from 'next/image';
import type { Dictionary } from '@/content/tr';
import { siteUrl } from '@/lib/site';
import styles from './Print.module.css';

/*
  Yalnızca kâğıtta görünen antet ve kaynak satırı (sirküler, rehber, makale).
  Müşteriler bu belgeleri yazdırıp dosyalar: sayfa, kurumun resmî yazısı gibi yatay logoyla
  açılır ve kaynak adresiyle kapanır. Ekranda gizlidir; yazdırma kuralları globals.css'te.
*/
export function PrintMasthead() {
  return (
    <div className={styles.masthead} aria-hidden="true">
      <Image
        src="/brand/markadenetim-yatay-acik-zemin.svg"
        alt=""
        width={555}
        height={100}
        className={styles.logo}
      />
    </div>
  );
}

export function PrintSource({ t, path }: { t: Dictionary; path: string }) {
  return (
    <p className={styles.source}>
      {t.print.source}: {siteUrl}
      {path}
    </p>
  );
}
