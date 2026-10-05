import type { Dictionary } from '@/content/tr';
import { ArrowIcon } from './ArrowIcon';
import { HeroHud } from './HeroHud';
import { HeroMedia } from './HeroMedia';
import { HeroStage } from './HeroStage';
import styles from './Hero.module.css';

/*
  4.2 Hero — "Net Bakış". Tam ekran video yumuşak ve kısık bir zemindir (bkz. HeroMedia).
  Başlığın üç satırı videonun üç sahnesiyle sırayla yanar. Metin ve düzen sunucuda render
  edilir; poster SSR olduğu için LCP hidrasyona bağlı değildir.
*/
export function Hero({ t }: { t: Dictionary }) {
  return (
    <HeroStage id="hero" className={styles.hero} labelledBy="hero-title">
      <HeroMedia />

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
