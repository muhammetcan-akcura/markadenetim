import type { Dictionary } from '@/content/tr';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

// 4.10 İletişim: güçlü kapanış. Dev başlık, tek ana CTA, iki kolonda bilgiler ve form.
// Sağ üstte hero'daki cephe kanatlarının yankısı: sayfa açıldığı gibi kapanır.
const FINS = [6, 20.6, 33.1, 43.9, 53.2, 61.2, 68.1, 74, 79.1, 83.4, 87.2, 90.4, 93.2, 95.6, 97.6];
export function Contact({ t }: { t: Dictionary }) {
  const c = t.contactSection;
  return (
    <section id="iletisim" className={styles.contact} aria-labelledby="contact-title">
      <svg className={styles.fins} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        {FINS.map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="100" />
        ))}
      </svg>
      <div className={`container grid ${styles.layout}`}>
        <div className={styles.head}>
          <h2 className={`t-statement ${styles.title}`} id="contact-title">
            {c.title}
          </h2>
          <a className={`btn-frame ${styles.cta}`} href={c.cta.href}>
            {c.cta.label}
          </a>
        </div>

        <dl className={styles.details}>
          {c.details.map((d) => (
            <div key={d.label}>
              <dt className="label">{d.label}</dt>
              <dd>{d.value}</dd>
            </div>
          ))}
        </dl>

        <ContactForm t={t} />
      </div>
    </section>
  );
}
