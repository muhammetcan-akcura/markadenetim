'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

/*
  Görünürlük işaretçisi: öğe ekrana girince data-in="true" yazar, bir kez.
  Bölümler sunucu bileşeni kalır; hareketin kendisi CSS'te [data-in='true'] ile tanımlanır.
  Hareket azaltmada da işaret yazılır; CSS o durumda geçişi anlık yapar.
*/
export function InView({
  as: Tag = 'div',
  className,
  threshold = 0.25,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  threshold?: number;
  children: ReactNode;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.in = 'true';
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
