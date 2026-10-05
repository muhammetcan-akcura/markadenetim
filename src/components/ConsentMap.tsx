'use client';

import { useState } from 'react';
import { useConsent } from '@/lib/consent';
import styles from './Footer.module.css';

/*
  Google Haritalar gömmesi yalnızca çerez onayıyla yüklenir. Onay yoksa aynı oranda sessiz bir
  yer tutucu durur; ziyaretçi tek haritayı kendi isteğiyle açabilir (genel onay vermeden).
  Tercih henüz bilinmiyorken (hidrasyon öncesi) de yer tutucu çizilir: harita onaysız yüklenmez.
*/
export function ConsentMap({
  src,
  title,
  blockedText,
  loadLabel,
}: {
  src: string;
  title: string;
  blockedText: string;
  loadLabel: string;
}) {
  const consent = useConsent();
  const [forced, setForced] = useState(false);

  if (consent === 'all' || forced) {
    return <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />;
  }

  return (
    <div className={styles.mapBlocked}>
      <p>{blockedText}</p>
      <button type="button" className={`btn-frame ${styles.mapLoad}`} onClick={() => setForced(true)}>
        {loadLabel}
      </button>
    </div>
  );
}
