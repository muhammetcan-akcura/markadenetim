import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/content/tr';
import { teamMembers } from '@/content/team';
import { ArrowIcon } from './ArrowIcon';
import styles from './TeamSection.module.css';

/*
  Uzman Ekibimiz. Ekip, sayfanın ana anlatısını bölmemesi için kompakt tutulur:
  masaüstünde tek satırlık editoryal şerit (6 portre), mobilde küçük portreli
  dizin listesi. Yapıyı kartlar değil 1px çizgiler kurar; numara küçük altın etiket.
  Ayrıntı her kişinin profil sayfasında (/ekip/[slug]).
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

        <ul className={styles.list}>
          {teamMembers.map((m, i) => (
            <li key={m.slug} className={styles.item}>
              <Link href={`/ekip/${m.slug}`} className={styles.member}>
                <div className={styles.portrait}>
                  <Image
                    src={m.image}
                    alt={`${m.name} portresi`}
                    fill
                    sizes="(min-width: 1024px) 16vw, 88px"
                    className={styles.img}
                  />
                </div>
                <div className={styles.info}>
                  <span className={`label ${styles.num}`} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={styles.name}>{m.name}</h3>
                  <p className={styles.titles}>
                    {m.titles.map((title) => (
                      <span key={title} className={styles.titleItem}>
                        {title}
                      </span>
                    ))}
                  </p>
                </div>
                <span className="sr-only">{t.team.profile}</span>
                <ArrowIcon className={`link-arrow__icon ${styles.arrow}`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
