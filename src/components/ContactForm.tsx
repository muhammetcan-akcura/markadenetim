'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/content/tr';
import { limits, validateContact, type ContactField, type ContactInput } from '@/lib/contact';
import { ArrowIcon } from './ArrowIcon';
import styles from './Contact.module.css';

type Status = 'idle' | 'sending' | 'success' | 'error';
const FIELD_ORDER: ContactField[] = ['name', 'email', 'subject', 'message', 'consent'];
// public/__forms.html içindeki form adı ve dosya yolu; ikisi birlikte değişir
const FORM_NAME = 'iletisim';
const FORM_ENDPOINT = '/';

/*
  Çerçeveli form paneli. Alanlar alt çizgili (kutu yok); etiket alanın içinde durur,
  odakta ya da doluyken yukarı süzülür ama hiçbir zaman kaybolmaz.
  Konu, yazmak yerine dokunarak seçilen bir radyo grubudur.
  Gönderimde ilk hatalı alana odak gider; başarıda panel teşekkür ekranına döner
  ve odak onun başlığına taşınır.
*/
export function ContactForm({ t }: { t: Dictionary }) {
  const f = t.contactSection.form;
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);
  const [errors, setErrors] = useState<ContactField[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [msgLen, setMsgLen] = useState(0);

  useEffect(() => {
    if (status === 'success') doneRef.current?.focus();
  }, [status]);

  const read = (form: HTMLFormElement): ContactInput => {
    const data = new FormData(form);
    const s = (k: string) => String(data.get(k) ?? '');
    return {
      name: s('name'),
      company: s('company'),
      email: s('email'),
      subject: s('subject'),
      message: s('message'),
      consent: data.get('consent') === 'on',
      website: s('website'),
    };
  };

  const focusFirst = (list: ContactField[]) => {
    const first = FIELD_ORDER.find((k) => list.includes(k));
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = read(form);
    const found = validateContact(input);
    setErrors(found);
    if (found.length) {
      setStatus('idle');
      focusFirst(found);
      return;
    }
    // Bot honeypot'u doldurduysa gönderme; başarılı gibi davran ki bot tekrar denemesin
    if (input.website) {
      setStatus('success');
      return;
    }
    setStatus('sending');
    try {
      // Netlify Forms: gönderim, formun statik tanımının (public/__forms.html) adresine
      // urlencoded olarak yapılır. Mesajlar Netlify panelinde saklanır, bildirim e-postası oradan gider.
      const body = new URLSearchParams({
        'form-name': FORM_NAME,
        name: input.name.trim(),
        email: input.email.trim(),
        company: input.company.trim(),
        subject: input.subject,
        message: input.message.trim(),
        consent: 'KVKK aydınlatma metni okundu, onaylandı',
        website: input.website,
      });
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setMsgLen(0);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  // Kullanıcı düzelttikçe ilgili alanın hata mesajı kalkar; bütün formu yeniden doğrulamaya gerek yok
  const clear = (k: ContactField) => {
    if (errors.includes(k)) setErrors((prev) => prev.filter((x) => x !== k));
  };

  const err = (k: ContactField) => errors.includes(k);
  const describedBy = (k: ContactField) => (err(k) ? `hata-${k}` : undefined);
  const fieldClass = (k: ContactField | null, extra = '') =>
    [styles.field, extra, k && err(k) ? styles.invalid : ''].filter(Boolean).join(' ');

  const errorText = (k: ContactField) =>
    err(k) && (
      <p className={styles.error} id={`hata-${k}`}>
        {f.errors[k]}
      </p>
    );

  const field = (k: 'name' | 'email', type: string, autoComplete: string) => (
    <div className={fieldClass(k)}>
      <input
        id={`f-${k}`}
        name={k}
        type={type}
        autoComplete={autoComplete}
        maxLength={limits[k]}
        placeholder=" "
        required
        aria-invalid={err(k) || undefined}
        aria-describedby={describedBy(k)}
        onInput={() => clear(k)}
      />
      <label htmlFor={`f-${k}`}>{f.fields[k]}</label>
      {errorText(k)}
    </div>
  );

  if (status === 'success') {
    return (
      <div className={`${styles.panel} ${styles.done}`} id="iletisim-formu">
        <span className={styles.doneRule} aria-hidden="true" />
        <h3 className={styles.doneTitle} ref={doneRef} tabIndex={-1}>
          {f.successTitle}
        </h3>
        <p className={styles.doneText} role="status">
          {f.success}
        </p>
        <button type="button" className={`link-arrow ${styles.again}`} onClick={() => setStatus('idle')}>
          <span>{f.again}</span>
          <ArrowIcon />
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className={styles.panel}
      id="iletisim-formu"
      noValidate
      onSubmit={onSubmit}
      aria-labelledby="form-title"
      aria-describedby="form-note"
    >
      <div className={styles.panelHead}>
        <h3 className={styles.formTitle} id="form-title">
          {f.title}
        </h3>
        <p className={styles.note} id="form-note">
          {f.note}
        </p>
      </div>

      <fieldset
        className={`${styles.topics}${err('subject') ? ` ${styles.invalid}` : ''}`}
        aria-describedby={describedBy('subject')}
      >
        <legend className={styles.legend}>{f.fields.subject}</legend>
        <div className={styles.chips}>
          {f.topics.map((topic) => (
            <label className={styles.chip} key={topic}>
              <input type="radio" name="subject" value={topic} required onChange={() => clear('subject')} />
              <span>{topic}</span>
            </label>
          ))}
        </div>
        {errorText('subject')}
      </fieldset>

      <div className={styles.fields}>
        {field('name', 'text', 'name')}
        {field('email', 'email', 'email')}
        <div className={fieldClass(null, styles.full)}>
          <input
            id="f-company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={limits.company}
            placeholder=" "
          />
          <label htmlFor="f-company">
            {f.fields.company} <span className={styles.optional}>{f.optional}</span>
          </label>
        </div>
        <div className={fieldClass('message', styles.full)}>
          <textarea
            id="f-message"
            name="message"
            rows={4}
            maxLength={limits.message}
            placeholder=" "
            required
            aria-invalid={err('message') || undefined}
            aria-describedby={['f-message-count', describedBy('message')].filter(Boolean).join(' ')}
            onInput={(e) => {
              setMsgLen(e.currentTarget.value.length);
              clear('message');
            }}
          />
          <label htmlFor="f-message">{f.fields.message}</label>
          <p className={styles.counter} id="f-message-count">
            {msgLen} / {limits.message} {f.counter}
          </p>
          {errorText('message')}
        </div>
      </div>

      {/* Honeypot: ekranda ve odak sırasında yok; botlar doldurur, gönderim sessizce yapılmaz
          (Netlify ayrıca netlify-honeypot ile aynı alanı süzer) */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="f-website">{f.honeypot}</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`${styles.consent}${err('consent') ? ` ${styles.invalid}` : ''}`}>
        <input
          id="f-consent"
          name="consent"
          type="checkbox"
          required
          aria-invalid={err('consent') || undefined}
          aria-describedby={describedBy('consent')}
          onChange={() => clear('consent')}
        />
        <label htmlFor="f-consent">
          {f.consentBefore}
          <a href="/kvkk" target="_blank" rel="noopener">
            {f.consentLink}
          </a>
          {f.consentAfter}
        </label>
        {errorText('consent')}
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={status === 'sending'}>
          <span>{status === 'sending' ? f.sending : f.submit}</span>
          <ArrowIcon />
        </button>
        <div className={styles.status} aria-live="polite" role="status">
          {status === 'error' && <p className={styles.error}>{f.errors.server}</p>}
          {status === 'idle' && errors.length > 0 && <p className={styles.error}>{f.errors.summary}</p>}
        </div>
      </div>
    </form>
  );
}
