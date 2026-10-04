import { NextResponse } from 'next/server';
import { limits, validateContact, type ContactInput } from '@/lib/contact';

/*
  İletişim formu uç noktası.
  - Sunucu tarafı doğrulama (istemciyle aynı kurallar), KVKK onayı zorunlu, honeypot.
  - E-POSTA HENÜZ GÖNDERİLMİYOR: e-posta servisi (ör. Resend) seçimi onay bekliyor.
    TODO: Servis onaylanınca anahtar .env.local'e (CONTACT_* değişkenleri) yazılır, koda gömülmez;
    gönderim aşağıdaki "deliver" noktasına eklenir ve basit bir hız sınırı konur.
  - Servis yapılandırılmamışken üretimde 503 döner: mesaj sessizce kaybolmaz, kullanıcı hata
    durumunu ve alternatif iletişim yolunu görür. Geliştirmede mesaj yalnızca konsola yazılır.
*/
export async function POST(request: Request) {
  let body: Partial<Record<keyof ContactInput, unknown>>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const str = (v: unknown, max: number) => (typeof v === 'string' ? v.slice(0, max + 1) : '');
  const input: ContactInput = {
    name: str(body.name, limits.name),
    company: str(body.company, limits.company),
    email: str(body.email, limits.email),
    subject: str(body.subject, limits.subject),
    message: str(body.message, limits.message),
    consent: body.consent === true,
    website: str(body.website, 200),
  };

  // Bot: başarılı gibi yanıt ver, hiçbir şey yapma
  if (input.website) return NextResponse.json({ ok: true });

  const errors = validateContact(input);
  if (errors.length) return NextResponse.json({ ok: false, error: 'validation', fields: errors }, { status: 422 });

  const configured = Boolean(process.env.CONTACT_DELIVERY);
  if (!configured) {
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });
    }
    console.info('[iletisim] (geliştirme) e-posta servisi yok; mesaj gönderilmedi:', {
      subject: input.subject,
      at: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  // deliver: onaylanan e-posta servisi buraya bağlanır
  return NextResponse.json({ ok: false, error: 'not_implemented' }, { status: 501 });
}
