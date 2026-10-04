import { getImageProps } from 'next/image';
import type { Dictionary } from '@/content/tr';
import { ArrowIcon } from './ArrowIcon';
import { HeroHud } from './HeroHud';
import { HeroMedia } from './HeroMedia';
import { HeroStage } from './HeroStage';
import styles from './Hero.module.css';

/*
  4.2 Hero — "Net Bakış". Tam ekran video yumuşak ve kısık bir zemindir; imleci izleyen
  dikdörtgen mercek içinde aynı video net ve gerçek renklidir (bkz. HeroMedia).
  Başlığın üç satırı videonun üç sahnesiyle sırayla yanar. Metin ve düzen sunucuda render
  edilir; poster SSR olduğu için LCP hidrasyona bağlı değildir.
*/
export function Hero({ t }: { t: Dictionary }) {
  // Poster = videonun ilk karesi. Yatay ve dikey ayrı çekim (art direction). Önceden
  // optimize edilmiş WebP olduğu için unoptimized: aynı URL zeminde ve mercek altında tek indirilir.
  const landscape = getImageProps({
    src: '/img/hero-l.webp',
    alt: '',
    width: 1280,
    height: 720,
    unoptimized: true,
    loading: 'eager',
    fetchPriority: 'high',
  }).props;
  const portrait = getImageProps({ src: '/img/hero-p.webp', alt: '', width: 540, height: 960, unoptimized: true }).props;
  const poster = (
    <picture>
      <source media="(max-aspect-ratio: 1/1)" srcSet={portrait.src} />
      <img {...landscape} />
    </picture>
  );

  return (
    <HeroStage id="hero" className={styles.hero} labelledBy="hero-title">
      {/* Yalnızca ekrana uyan poster erken yüklenir */}
      <link rel="preload" as="image" href="/img/hero-p.webp" media="(max-aspect-ratio: 1/1)" fetchPriority="high" />
      <link rel="preload" as="image" href="/img/hero-l.webp" media="(min-aspect-ratio: 1/1)" fetchPriority="high" />

      <HeroMedia poster={poster} sceneNames={t.hero.scenes} />

      <div className={`container ${styles.inner}`}>
        <h1 className={`t-display ${styles.title}`} id="hero-title">
          {t.hero.lines.map((line) => (
            <span className={styles.line} key={line}>
              <span className={styles.lineInner}>{line}</span>
            </span>
          ))}
        </h1>

        <div className={styles.lead}>
          <p>{t.hero.lead}</p>
          <a className="link-arrow" href={t.hero.cta.href}>
            <span>{t.hero.cta.label}</span>
            <ArrowIcon />
          </a>
        </div>

        <div className={styles.strip}>
          <p className={`label ${styles.tag}`}>
            <span className={styles.tagRule} aria-hidden="true" />
            {t.hero.tag}
          </p>
          {/* 1 px'lik scroll göstergesi (yalnızca masaüstü) */}
          <span className={styles.scroll} aria-hidden="true">
            <span />
          </span>
        </div>
      </div>

      <HeroHud
        sceneNames={t.hero.scenes}
        labels={{
          scene: t.hero.hud.scene,
          pause: t.hero.hud.pause,
          play: t.hero.hud.play,
          ariaPause: t.a11y.pauseVideo,
          ariaPlay: t.a11y.playVideo,
        }}
      />
    </HeroStage>
  );
}
