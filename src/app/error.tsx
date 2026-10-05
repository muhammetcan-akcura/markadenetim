'use client'; // Hata sınırları istemci bileşeni olmak zorunda

import { useEffect } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { StatusPage } from '@/components/StatusPage';
import { tr } from '@/content/tr';

/*
  Sayfa içinde beklenmeyen hata. Kök layout (fontlar, çerez bandı) ayakta kalır;
  yalnızca sayfa gövdesi bu ekranla değişir. Hata kodu (digest) sunucu kaydıyla
  eşleştirmek için gösterilir; hata mesajının kendisi gösterilmez.
*/
export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const e = tr.status.error;
  return (
    <>
      <title>{`${e.label} | MarkaDenetim`}</title>
      <SiteHeader t={tr} />
      <main id="main">
        <StatusPage
          t={tr}
          kind="error"
          note={error.digest ? `${e.digest}: ${error.digest}` : undefined}
          actions={
            <button type="button" className="btn-frame" onClick={() => retry()}>
              {e.retry}
            </button>
          }
        />
      </main>
    </>
  );
}
