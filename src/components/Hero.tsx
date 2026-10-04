import type { Dictionary } from '@/content/tr';
import { HeroStage } from './HeroStage';
import { HeroVideo, HeroVideoToggle } from './HeroVideo';
import { ArrowIcon } from './ArrowIcon';
import styles from './Hero.module.css';

// Cephe kanatlarının x konumları: sağa doğru geometrik olarak sıklaşır (r = 0.86),
// perspektifte geri çekilen bir cephe hissi verir.
const FINS = [24, 117.8, 198.4, 267.7, 327.4, 378.7, 422.8, 460.7, 493.3, 521.4, 545.5, 566.3, 584.1, 599.5, 612.6, 624];
const SLABS = [296, 404, 620, 728];

export function Hero({ t }: { t: Dictionary }) {
  return (
    <HeroStage id="hero" className={styles.hero} enteredClassName={styles.entered} labelledBy="hero-title">
      {/*
        Görsel kompozisyon: bir cephe kesiti. Dikey kanatlar ve kesişen düzlem SVG ile çizilir;
        cephenin "penceresinden" renklendirilmiş video görünür. Kanatlar videonun üstünden
        kayıt gibi geçer, tek altın çizgi yapının içinden "denetim izi" olarak uzanır.
        SVG preserveAspectRatio="none": cephe her oranda kutuyu doldurur, çizgiler 1px kalır.
      */}
      <div className={styles.art}>
        <div className={styles.window}>
          <div className={styles.windowInner}>
            <HeroVideo className={styles.video} />
          </div>
        </div>
        <svg viewBox="0 0 640 820" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <polygon className={styles.plane} points="300,118 600,176 600,592 300,520" />
          <g className={styles.slabs}>
            {SLABS.map((y) => (
              <line key={y} x1="24" y1={y} x2="624" y2={y} />
            ))}
          </g>
          <g className={styles.fins}>
            {FINS.map((x) => (
              <line key={x} x1={x} y1="72" x2={x} y2="820" />
            ))}
          </g>
          {/* Sayfadaki altının büyük kısmı: 1px çizgi ve 5px'lik işaret. Çizgi yalnızca
              cephenin sağ yarısında; hiçbir kırılımda başlığın altından geçmez. */}
          <g className={styles.trace}>
            <line x1="300" y1="380" x2="640" y2="380" />
            <rect x="458.2" y="377.5" width="5" height="5" />
          </g>
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <h1 className={`t-display ${styles.title}`} id="hero-title">
          {t.hero.lines.map((line) => (
            <span className={styles.line} key={line}>
              <span className={styles.lineInner}>{line}</span>
            </span>
          ))}
        </h1>

        <div className={`grid ${styles.foot}`}>
          <p className={`label ${styles.tag}`}>{t.hero.tag}</p>
          <div className={styles.lead}>
            <p>{t.hero.lead}</p>
            <a className="link-arrow" href={t.hero.link.href}>
              <span>{t.hero.link.label}</span>
              <ArrowIcon />
            </a>
          </div>
          <HeroVideoToggle
            t={t}
            className={styles.toggle}
            glyphClassNames={{ pause: `${styles.glyph} ${styles.pause}`, play: `${styles.glyph} ${styles.play}` }}
          />
          <span className={styles.scroll} aria-hidden="true">
            <span />
          </span>
        </div>
      </div>
    </HeroStage>
  );
}
