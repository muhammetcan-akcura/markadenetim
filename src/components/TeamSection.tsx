import type { Dictionary } from '@/content/tr';
import { teamMembers } from '@/content/team';
import { TeamIndex } from './TeamIndex';
import styles from './TeamSection.module.css';

/*
  Uzman Ekibimiz — etkileşimli dizin. Başlık ve giriş sunucuda; isim listesi ve
  portre sahnesi TeamIndex'te (aktif kişi durumu için client). Kart yok: yapıyı
  1px çizgiler ve büyük serif isimler kurar. Ayrıntı profil sayfasında (/ekip/[slug]).
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

        <TeamIndex members={teamMembers} profileLabel={t.team.profile} />
      </div>
    </section>
  );
}
