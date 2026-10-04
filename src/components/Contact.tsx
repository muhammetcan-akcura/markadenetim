import type { Dictionary } from '@/content/tr';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

// 4.10 İletişim: güçlü kapanış. Dev başlık, tek ana CTA, iki kolonda bilgiler ve form.
export function Contact({ t }: { t: Dictionary }) {
  const c = t.contactSection;
  return (
    <section id="iletisim" className={styles.contact} aria-labelledby="contact-title">
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
