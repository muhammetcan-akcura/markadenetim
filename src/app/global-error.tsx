'use client'; // Hata sınırları istemci bileşeni olmak zorunda

// Global stiller bileşen import'undan önce (layout.tsx'teki sıra kuralı)
import '@/styles/tokens.css';
import './globals.css';
import { StatusPage } from '@/components/StatusPage';
import { tr } from '@/content/tr';
import { fontClassName } from '@/lib/fonts';

/*
  Kök layout'un kendisi çöktüğünde devreye girer ve layout'un yerine geçer: bu yüzden
  <html>/<body>, stiller ve fontlar burada yeniden verilir. Header bilerek yok (o da
  çökmüş olabilir); sayfa yalnızca ana sayfaya dönüş ve yeniden deneme sunar.
*/
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const e = tr.status.error;
  return (
    <html lang="tr" className={fontClassName}>
      <body>
        <title>{`${e.label} | MarkaDenetim`}</title>
        <main id="main">
          <StatusPage
            t={tr}
            kind="error"
            brand
            note={error.digest ? `${e.digest}: ${error.digest}` : undefined}
            actions={
              <button type="button" className="btn-frame" onClick={() => retry()}>
                {e.retry}
              </button>
            }
          />
        </main>
      </body>
    </html>
  );
}
