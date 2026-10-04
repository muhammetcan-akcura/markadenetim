// İnce ok: metin bağlantılarında ve hizmet satırlarında aynı çizgi kalınlığıyla kullanılır
export function ArrowIcon({ className = 'link-arrow__icon' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 10" aria-hidden="true" focusable="false">
      <path d="M0 5h47M42 1l5 4-5 4" />
    </svg>
  );
}
