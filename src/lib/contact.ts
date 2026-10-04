// İletişim formu doğrulaması: istemci ve sunucu aynı kuralları kullanır.

export type ContactInput = {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
  website: string; // honeypot: insan kullanıcı bu alanı görmez ve boş bırakır
};

export type ContactField = 'name' | 'email' | 'subject' | 'message' | 'consent';

export const limits = { name: 120, company: 160, email: 200, subject: 160, message: 4000 };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(input: ContactInput): ContactField[] {
  const errors: ContactField[] = [];
  if (!input.name.trim() || input.name.length > limits.name) errors.push('name');
  if (!EMAIL.test(input.email.trim()) || input.email.length > limits.email) errors.push('email');
  if (!input.subject.trim() || input.subject.length > limits.subject) errors.push('subject');
  if (input.message.trim().length < 10 || input.message.length > limits.message) errors.push('message');
  if (!input.consent) errors.push('consent');
  return errors;
}
