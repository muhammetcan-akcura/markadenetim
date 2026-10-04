import type { Dictionary } from '@/content/tr';
import { ApproachSteps } from './ApproachSteps';
import styles from './Approach.module.css';

// 4.7 Yaklaşımımız. Kart ve zaman çizelgesi yok: dört aşama dev tipografiyle.
export function Approach({ t }: { t: Dictionary }) {
  return (
    <section id="yaklasim" className={styles.approach} aria-labelledby="approach-title">
      <ApproachSteps title={t.approach.title} steps={t.approach.steps} />
    </section>
  );
}
