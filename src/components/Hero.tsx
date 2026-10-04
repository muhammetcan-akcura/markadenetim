import { preload } from 'react-dom';
import type { Dictionary } from '@/content/tr';
import { HeroStage } from './HeroStage';
import { HeroScenes, HeroVideo } from './HeroVideo';
import { ArrowIcon } from './ArrowIcon';
import styles from './Hero.module.css';

// Panelin üstündeki cephe kanatları: sağa doğru geometrik olarak sıklaşır (r = 0.86),
// video bir cephenin ardından izleniyormuş gibi durur. Değerler yüzde (0–100).
const FINS = [6, 20.6, 33.1, 43.9, 53.2, 61.2, 68.1, 74, 79.1, 83.4, 87.2, 90.4, 93.2, 95.6, 97.6];

/*
  4.2 Hero — bölünmüş editoryal kompozisyon.
  Sol: dev serif başlık, açıklama, iki CTA ve uzmanlık dizini.
  Sağ: ekranın üstünden altına, sağ kenara taşan dikey video paneli; üstünde cephe
  kanatları ve sahne göstergesi. Başlığın son satırı panelin üstüne taşar: çerçeveyi
  kıran tek jest. Altın: panele giren 1px "denetim izi" ve dizindeki numaralar.
*/
export function Hero({ t }: { t: Dictionary }) {
  // Video afişi ilk ekranın en büyük görseli: yüksek öncelikle erkenden yüklenir
  preload('/img/hero-poster.webp', { as: 'image', fetchPriority: 'high' });
  return (
    <HeroStage id="hero" className={styles.hero} enteredClassName={styles.entered} labelledBy="hero-title">
      <div className={styles.panel}>
        <div className={styles.panelInner}>
          <HeroVideo className={styles.video} />
          <span className={styles.veil} aria-hidden="true" />
          <svg className={styles.fins} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            {FINS.map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="100" />
            ))}
          </svg>
        </div>
        <HeroScenes
          t={t}
          classes={{
            root: styles.scenes,
            count: styles.count,
            name: styles.sceneName,
            bars: styles.bars,
            bar: styles.bar,
            fill: styles.fill,
            toggle: styles.toggle,
            pause: `${styles.glyph} ${styles.pause}`,
            play: `${styles.glyph} ${styles.play}`,
          }}
        />
        {/* İnce scroll göstergesi: panelin sol kenarında akan 1px çizgi */}
        <span className={styles.scroll} aria-hidden="true">
          <span />
        </span>
      </div>

      <div className={`container ${styles.inner}`}>
        <p className={`label ${styles.tag}`}>
          <span className={styles.tagRule} aria-hidden="true" />
          {t.hero.tag}
        </p>

        <h1 className={`t-display ${styles.title}`} id="hero-title">
          {t.hero.lines.map((line, i) => (
            <span className={styles.line} key={line}>
              <span className={styles.lineInner}>
                {line}
                {/* Altın "denetim izi": en kısa satırın (2.) bittiği yerden panele uzanır.
                    Metne bağlı olduğu için hiçbir genişlikte harflere değmez. */}
                {i === 1 && (
                  <span className={styles.trace} aria-hidden="true">
                    <span className={styles.traceMark} />
                  </span>
                )}
              </span>
            </span>
          ))}
        </h1>

        <div className={styles.lead}>
          <p>{t.hero.lead}</p>
          <div className={styles.actions}>
            <a className="btn-frame" href={t.hero.cta.href}>
              {t.hero.cta.label}
            </a>
            <a className="link-arrow" href={t.hero.link.href}>
              <span>{t.hero.link.label}</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Uzmanlık dizini: hero'dan doğrudan hizmetlere giden numaralı içindekiler */}
        <nav className={styles.index} aria-label={t.hero.indexLabel}>
          <ol>
            {t.services.items.map((item, i) => (
              <li key={item.title}>
                <a href={t.hero.link.href}>
                  <span className={styles.indexNum}>{String(i + 1).padStart(2, '0')}</span>
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </HeroStage>
  );
}
