import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/content/tr';
import { teamMembers } from '@/content/team';
import { ArrowIcon } from './ArrowIcon';
import styles from './TeamSection.module.css';

/*
  Uzman Ekibimiz. Kart yok: sorumlu ortaklar büyük, yatay (portre + metin); ekip dörtlü,
  ince çizgilerle ayrılmış dizi. Portreler düşük doygunlukta (BRIEF §07), üzerine gelince
  gerçek renge döner ve hafif yakınlaşır. Her kişi kendi profil sayfasına bağlanır.
*/
export function TeamSection({ t }: { t: Dictionary }) {
  const leads = teamMembers.filter((m) => m.lead);
  const rest = teamMembers.filter((m) => !m.lead);

  return (
    <section id="ekip" className={styles.team} aria-labelledby="team-title">
      <div className="container">
        <header className={`grid ${styles.head}`}>
          <h2 className={`t-h2 ${styles.title}`} id="team-title">
            {t.team.title}
          </h2>
          <p className={styles.intro}>{t.team.intro}</p>
        </header>

        <h3 className={`label ${styles.groupLabel}`}>{t.team.leadLabel}</h3>
        <ul className={styles.leads}>
          {leads.map((m, i) => (
            <li key={m.slug}>
              <Link href={`/ekip/${m.slug}`} className={styles.lead}>
                <span className={styles.portrait}>
                  <Image
                    src={m.image}
                    alt={`${m.name} portresi`}
                    fill
                    sizes="(min-width: 1100px) 20vw, (min-width: 768px) 30vw, 45vw"
                    className={styles.img}
                  />
                </span>
                <span className={styles.leadText}>
                  <span className={styles.num} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.leadName}>{m.name}</span>
                  <span className={styles.titles}>
                    {m.titles.map((title) => (
                      <span key={title}>{title}</span>
                    ))}
                  </span>
                  <span className={`link-arrow ${styles.more}`}>
                    <span>{t.team.profile}</span>
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h3 className={`label ${styles.groupLabel}`}>{t.team.teamLabel}</h3>
        <ul className={styles.members}>
          {rest.map((m) => (
            <li key={m.slug}>
              <Link href={`/ekip/${m.slug}`} className={styles.member}>
                <span className={styles.portrait}>
                  <Image
                    src={m.image}
                    alt={`${m.name} portresi`}
                    fill
                    sizes="(min-width: 1100px) 22vw, 45vw"
                    className={styles.img}
                  />
                </span>
                <span className={styles.memberName}>{m.name}</span>
                <span className={styles.memberTitle}>{m.titles[0]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
