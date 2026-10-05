import type { Dictionary } from '@/content/tr';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Services.module.css';

function RightArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function Services({ t }: { t: Dictionary }) {
  const { services } = t;

  return (
    <section id="hizmetler" className={styles.services} aria-labelledby="services-title">
      <div className={`container ${styles.layout}`}>
        {/* Sol Kolon: Başlık, Anlatım, Anahtar Kavramlar & CTA */}
        <div className={styles.introCol}>
          <div className={styles.kicker}>
            <span className={styles.kickerLine} aria-hidden="true" />
            <span className={`label ${styles.kickerText}`}>{services.kicker}</span>
          </div>

          <h2 className={styles.title} id="services-title">
            <span>{services.titleLine1}</span>
            <em className={styles.italicTitle}>{services.titleEmphasis}</em>
            <span>{services.titleLine2}</span>
          </h2>

          <p className={styles.desc}>{services.intro}</p>

          <div className={styles.keywordsBlock}>
            <span className={styles.keywordsBorder} aria-hidden="true" />
            <div className={styles.keywordsList}>
              {services.keywords.map((kw) => (
                <span key={kw} className={styles.keywordItem}>
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <Link href="/#iletisim" className={styles.ctaLink}>
            <span className={styles.ctaIconWrap} aria-hidden="true">
              <RightArrow className={styles.ctaIcon} />
            </span>
            <span className={styles.ctaText}>{services.cta}</span>
          </Link>
        </div>



        {/* Sağ Kolon: 4 Uzmanlık Alanı Listesi */}
        <div className={styles.listCol}>
          <ol className={styles.serviceList}>
            {services.items.map((item) => (
              <li key={item.num} className={styles.serviceItem}>
                <Link href="/#iletisim" className={styles.serviceRow}>
                  {/* Sol Küçük Görsel */}
                  <div className={styles.thumbWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 160px, 120px"
                      className={styles.thumbImg}
                    />
                  </div>

                  {/* Metin İçeriği */}
                  <div className={styles.itemContent}>
                    <span className={styles.itemNum} aria-hidden="true">
                      {item.num}
                    </span>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.text}</p>
                  </div>

                  {/* Sağ Dairesel Ok Butonu */}
                  <div className={styles.circleBtn} aria-hidden="true">
                    <RightArrow className={styles.circleArrow} />
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
