import styles from './ImagePlaceholder.module.css';

/*
  Gerçek görsel gelene kadar kullanılan yer tutucu. Stok fotoğraf taklidi yerine sitenin çizgi
  diliyle (1px, navy) bir kompozisyon ve görünür üretim notu gösterir.
  Görsel geldiğinde next/image ile değiştirilir (alt, width/height, lazy).
*/
export function ImagePlaceholder({
  label,
  note,
  variant = 'stairs',
  compact = false,
}: {
  label: string;
  note: string;
  variant?: 'stairs' | 'grid' | 'arch';
  /** Küçük kutularda yalnızca etiket görünür; üretim notu aria-label'da kalır */
  compact?: boolean;
}) {
  return (
    <div className={styles.box} role="img" aria-label={`${label} ${note}`}>
      <svg className={styles.art} viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        {variant === 'stairs' && (
          <>
            {/* Beton merdiven: basamak profili + korkuluk */}
            <path d="M0 470 H60 V430 H120 V390 H180 V350 H240 V310 H300 V270 H360 V230 H400" />
            <path d="M0 500 L400 260" className={styles.faint} />
            <line x1="40" y1="0" x2="40" y2="500" className={styles.faint} />
            <path d="M30 380 L400 158" />
          </>
        )}
        {variant === 'grid' && (
          <>
            {/* Cam cephe: düzensiz aralıklı dikmeler ve kat çizgileri */}
            {[50, 120, 170, 260, 300, 370].map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="500" />
            ))}
            {[90, 210, 330, 450].map((y) => (
              <line key={y} x1="0" y1={y} x2="400" y2={y} className={styles.faint} />
            ))}
          </>
        )}
        {variant === 'arch' && (
          <>
            {/* Arşiv rafı: klasör sırtları */}
            {[30, 70, 95, 140, 175, 230, 255, 300, 340, 365].map((x) => (
              <line key={x} x1={x} y1="80" x2={x} y2="420" />
            ))}
            <line x1="0" y1="80" x2="400" y2="80" className={styles.faint} />
            <line x1="0" y1="420" x2="400" y2="420" className={styles.faint} />
          </>
        )}
      </svg>
      <span className={`${styles.caption}${compact ? ` ${styles.compact}` : ''}`} aria-hidden="true">
        <span className="label">{label}</span>
        {!compact && <span className={styles.note}>{note}</span>}
      </span>
    </div>
  );
}
