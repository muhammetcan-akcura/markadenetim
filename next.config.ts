import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // next/image önce AVIF, desteklenmezse WebP sunar
  images: { formats: ['image/avif', 'image/webp'] },
  experimental: {
    // CSS (~17 KB) HTML ile birlikte <style> olarak gelir: render'ı bloklayan iki ayrı
    // stil isteği ortadan kalkar, FCP/LCP kısalır. Tek sayfalık sitede önbellek kaybı önemsiz.
    inlineCss: true,
  },
};

export default nextConfig;
