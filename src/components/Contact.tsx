import type { Dictionary } from '@/content/tr';
import { routes } from '@/lib/routes';
import { ArrowIcon } from './ArrowIcon';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

// 4.10 İletişim: güçlü kapanış. Üstte dev başlık + kısa giriş; altta iki eşit olmayan kolon:
// solda tek dokunuşla çalışan doğrudan kanallar, sağda çerçeveli form paneli.
// Adresler burada tekrar edilmez; haritalarıyla birlikte hemen alttaki ofis bloğunda yer alır.
// Sağ üstte hero'daki cephe kanatlarının yankısı: sayfa açıldığı gibi kapanır.
const FINS = [6, 20.6, 33.1, 43.9, 53.2, 61.2, 68.1, 74, 79.1, 83.4, 87.2, 90.4, 93.2, 95.6, 97.6];
export function Contact({ t }: { t: Dictionary }) {
  const c = t.contactSection;
  return (
    <section id={routes[t.locale].ids.contact} className={styles.contact} aria-labelledby="contact-title">
      <svg className={styles.fins} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        {FINS.map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="100" />
        ))}
      </svg>
      <div className={`container grid ${styles.layout}`}>
        <header className={styles.head}>
          <p className={`label ${styles.kicker}`}>{c.kicker}</p>
          <h2 className={`t-statement ${styles.title}`} id="contact-title">
            {c.title}
          </h2>
        </header>
        <p className={styles.lead}>{c.lead}</p>

        <aside className={styles.direct} aria-labelledby="contact-direct">
          <h3 className={`label ${styles.directLabel}`} id="contact-direct">
            {c.channelsLabel}
          </h3>
          <ul className={styles.channels}>
            {c.channels.map((ch) => (
              <li key={ch.href}>
                <a
                  className={styles.channel}
                  href={ch.href}
                  {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className={styles.channelLabel}>{ch.label}</span>
                  <span className={styles.channelValue}>{ch.value}</span>
                  <ArrowIcon className={`link-arrow__icon ${styles.channelArrow}`} />
                  {ch.external && <span className="sr-only">{c.newTab}</span>}
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.hours}>
            <span className={styles.channelLabel}>{c.hours.label}</span>
            <span>{c.hours.value}</span>
          </p>
        </aside>

        <ContactForm t={t} />
      </div>
    </section>
  );
}
