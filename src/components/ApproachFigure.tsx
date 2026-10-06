import type { CSSProperties } from 'react';
import styles from './Approach.module.css';

/*
  Yaklaşım diyagramı: "aynı veriye her aşamada daha net bakmak".
  16 nokta dört aşama boyunca yer değiştirir; biri (altın) kritik bulgudur ve hep izlenebilir.
    Analiz        → dağınık veri, inceleme alanının köşeleri
    Değerlendirme → risk düzeyine göre üç satır
    Strateji      → öncelik sırasına dizilmiş basamaklar
    Sonuç         → çerçeveye oturmuş düzenli yapı
  Yalnızca transform (nokta kayması) ve opacity (yardımcı çizgiler). Görsel dekoratiftir.
*/

const W = 480;
const H = 240;
const COUNT = 16;
type Pt = readonly [number, number];

// Analiz: elle yerleştirilmiş dağınık noktalar (0. nokta kritik bulgu)
const scattered: Pt[] = [
  [270, 138], [52, 58], [118, 170], [160, 92], [204, 198], [238, 46], [312, 74], [356, 182],
  [392, 110], [430, 52], [84, 120], [146, 210], [330, 214], [418, 196], [190, 140], [286, 30],
];

// Değerlendirme: yüksek / orta / düşük risk satırları; kritik bulgu en üst satırın başında
const ROWS = [64, 120, 176] as const;
const rowSizes = [4, 6, 6];
const rows: Pt[] = [];
rowSizes.forEach((size, r) => {
  for (let k = 0; k < size; k++) rows.push([132 + k * 34, ROWS[r]]);
});

// Strateji: dört basamak; kritik bulgu en üst basamağın sonunda (varılacak nokta)
const TREADS = [200, 150, 100, 50] as const;
const stairSlots: Pt[] = [];
TREADS.forEach((y, k) => {
  for (const dx of [20, 40, 60, 80]) stairSlots.push([40 + k * 100 + dx, y - 12]);
});
const stairs: Pt[] = [stairSlots[COUNT - 1], ...stairSlots.slice(0, COUNT - 1)];

// Sonuç: 4×4 düzenli yapı; kritik bulgu sağ üst köşede
const gridSlots: Pt[] = [];
for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) gridSlots.push([204 + c * 24, 84 + r * 24]);
const grid: Pt[] = [gridSlots[3], ...gridSlots.filter((_, i) => i !== 3)];

const stages = [scattered, rows, stairs, grid] as const;

// Sabit çizgiler tek path verisi olarak (modül yüklenirken bir kez hesaplanır)
const GRID_PATH = Array.from({ length: 11 }, (_, i) => `M${40 + i * 40} 0V${H}`).join(' ');
const ROWS_PATH = ROWS.map((y) => `M116 ${y}H452`).join(' ');

type Props = {
  stage: number;
  total: number;
  caption: string;
  /** Masaüstü sahnesinde dört alt yazı üst üste durur, yalnızca aktif olan görünür */
  captions?: readonly string[];
  /** Değerlendirme aşamasındaki risk satırı etiketleri (dile göre) */
  riskLevels: readonly string[];
  className?: string;
};

export function ApproachFigure({ stage, total, caption, captions, riskLevels, className }: Props) {
  const pts = stages[stage];
  const guide = (i: number) => `${styles.guide}${i === stage ? ` ${styles.guideOn}` : ''}`;
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <figure className={`${styles.figure}${className ? ` ${className}` : ''}`} aria-hidden="true">
      {/* Üst satır: aşama sayacı ve diyagramın ne gösterdiği */}
      <div className={styles.figHead}>
        <span className={`label ${styles.figCount}`}>
          {pad(stage + 1)} <span className={styles.figTotal}>/ {pad(total)}</span>
        </span>
        <figcaption className={styles.figCaption}>
          {captions ? (
            captions.map((c, i) => (
              <span key={c} className={`${styles.capItem}${i === stage ? ` ${styles.capOn}` : ''}`}>
                {c}
              </span>
            ))
          ) : (
            <span>{caption}</span>
          )}
        </figcaption>
      </div>
      <div className={styles.figPlate}>
        <svg viewBox={`0 0 ${W} ${H}`} className={styles.figSvg} focusable="false" preserveAspectRatio="xMidYMid meet">
          {/* Defter çizgisi: sabit, çok kısık dikey ızgara. Tek path: diyagram sayfada beş kez
              render edildiği için ayrı <line> öğeleri DOM'u gereksiz büyütür. */}
          <path className={styles.figGrid} d={GRID_PATH} />

          {/* Analiz: inceleme alanının köşe işaretleri */}
          <path
            className={guide(0)}
            d="M28 36V22H42 M438 22H452V36 M28 204V218H42 M438 218H452V204"
          />
          {/* Değerlendirme: risk satırları ve etiketleri */}
          <g className={guide(1)}>
            <path d={ROWS_PATH} />
            {riskLevels.map((t, i) => (
              <text key={t} x={28} y={ROWS[i] + 3} className={styles.figText}>
                {t}
              </text>
            ))}
          </g>
          {/* Strateji: basamaklı yol */}
          <path className={guide(2)} d="M40 200H140V150H240V100H340V50H440" />
          {/* Sonuç: yapıyı çevreleyen çerçeve ve iki yana bağlayan çizgi */}
          <path className={guide(3)} d="M184 64H296V176H184Z M40 120H184 M296 120H440" />

          {Array.from({ length: COUNT }, (_, i) => (
            <circle
              key={i}
              r={i === 0 ? 5.5 : 3.5}
              className={`${styles.dot}${i === 0 ? ` ${styles.dotKey}` : ''}`}
              style={{ transform: `translate(${pts[i][0]}px, ${pts[i][1]}px)`, '--i': i } as CSSProperties}
            />
          ))}
        </svg>
      </div>
    </figure>
  );
}
