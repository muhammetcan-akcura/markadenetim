import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/content/tr';
import { teamMembers } from '@/content/team';
import { ArrowIcon } from './ArrowIcon';
import styles from './TeamSection.module.css';

/*
  Uzman Ekibimiz. Tüm ekip tek ve dengeli bir ızgarada bir arada gösterilir.
  Portreler hafif desatüre, üzerine gelince canlanır ve hafif yakınlaşır.
*/
export function TeamSection({ t }: { t: Dictionary }) {
  return (
    <section id="ekip" className={styles.team} aria-labelledby="team-title">
      <div className="container">
        <header className={`grid ${styles.head}`}>
          <h2 className={`t-h2 ${styles.title}`} id="team-title">
            {t.team.title}
          </h2>
          <p className={styles.intro}>{t.team.intro}</p>
        </header>

        <ul className={styles.teamGrid}>
          {teamMembers.map((m, i) => (
            <li key={m.slug} className={styles.item}>
              <Link href={`/ekip/${m.slug}`} className={styles.card}>
                <span className={styles.portrait}>
                  <Image
                    src={m.image}
                    alt={`${m.name} portresi`}
                    fill
                    sizes="(min-width: 1100px) 30vw, (min-width: 768px) 45vw, 90vw"
                    className={styles.img}
                  />
                  <span className={styles.num} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>
                <div className={styles.info}>
                  <h3 className={styles.name}>{m.name}</h3>
                  <div className={styles.titles}>
                    {m.titles.map((title) => (
                      <span key={title} className={styles.titleItem}>
                        {title}
                      </span>
                    ))}
                  </div>
                  <span className={`link-arrow ${styles.more}`}>
                    <span>{t.team.profile}</span>
                    <ArrowIcon className="link-arrow__icon" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
