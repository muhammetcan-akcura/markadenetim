'use client';

import { useRef, useState } from 'react';
import type { Dictionary } from '@/content/tr';
import { limits, validateContact, type ContactField, type ContactInput } from '@/lib/contact';
import styles from './Contact.module.css';

type Status = 'idle' | 'sending' | 'success' | 'error';
const FIELD_ORDER: ContactField[] = ['name', 'email', 'subject', 'message', 'consent'];

/*
  Alt çizgili alanlar (kutu yok), görünür etiketler, alan bazında hata mesajı.
  Gönderimde ilk hatalı alana odak gider; durum mesajları aria-live ile duyurulur.
*/
export function ContactForm({ t }: { t: Dictionary }) {
  const f = t.contactSection.form;
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ContactField[]>([]);
  const [status, setStatus] = useState<Status>('idle');

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
    setStatus('sending');
    try {
      const res = await fetch('/api/iletisim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus('success');
        form.reset();
        return;
      }
      if (json.error === 'validation' && Array.isArray(json.fields)) {
        setErrors(json.fields);
        setStatus('idle');
        focusFirst(json.fields);
        return;
      }
      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  const err = (k: ContactField) => errors.includes(k);
  const describedBy = (k: ContactField) => (err(k) ? `hata-${k}` : undefined);

  const field = (k: 'name' | 'email' | 'subject', type: string, autoComplete: string) => (
    <div className={`${styles.field}${err(k) ? ` ${styles.invalid}` : ''}`}>
      <label htmlFor={`f-${k}`}>{f.fields[k]}</label>
      <input
        id={`f-${k}`}
        name={k}
        type={type}
        autoComplete={autoComplete}
        maxLength={limits[k]}
        required
        aria-invalid={err(k) || undefined}
        aria-describedby={describedBy(k)}
      />
      {err(k) && (
        <p className={styles.error} id={`hata-${k}`}>
          {f.errors[k]}
        </p>
      )}
    </div>
  );

  return (
    <form ref={formRef} className={styles.form} id="iletisim-formu" noValidate onSubmit={onSubmit} aria-labelledby="form-title">
      <h3 className={`label ${styles.formTitle}`} id="form-title">
        {f.title}
      </h3>

      <div className={styles.fields}>
        {field('name', 'text', 'name')}
        <div className={styles.field}>
          <label htmlFor="f-company">
            {f.fields.company} <span className={styles.optional}>{f.optional}</span>
          </label>
          <input id="f-company" name="company" type="text" autoComplete="organization" maxLength={limits.company} />
        </div>
        {field('email', 'email', 'email')}
        {field('subject', 'text', 'off')}
        <div className={`${styles.field} ${styles.full}${err('message') ? ` ${styles.invalid}` : ''}`}>
          <label htmlFor="f-message">{f.fields.message}</label>
          <textarea
            id="f-message"
            name="message"
            rows={4}
            maxLength={limits.message}
            required
            aria-invalid={err('message') || undefined}
            aria-describedby={describedBy('message')}
          />
          {err('message') && (
            <p className={styles.error} id="hata-message">
              {f.errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot: ekranda ve odak sırasında yok; botlar doldurur, sunucu sessizce yok sayar */}
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
        />
        <label htmlFor="f-consent">
          {f.consentBefore}
          <a href="/kvkk" target="_blank" rel="noopener">
            {f.consentLink}
          </a>
          {f.consentAfter}
        </label>
        {err('consent') && (
          <p className={styles.error} id="hata-consent">
            {f.errors.consent}
          </p>
        )}
      </div>

      <div className={styles.actions}>
        <button type="submit" className="btn-frame" disabled={status === 'sending'}>
          {status === 'sending' ? f.sending : f.submit}
        </button>
        <div className={styles.status} aria-live="polite" role="status">
          {status === 'success' && <p className={styles.success}>{f.success}</p>}
          {status === 'error' && <p className={styles.error}>{f.errors.server}</p>}
          {status === 'idle' && errors.length > 0 && <p className={styles.error}>{f.errors.summary}</p>}
        </div>
      </div>
    </form>
  );
}
