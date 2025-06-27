import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  // ป้องกัน build error บน Vercel
  experimental: {
    optimizePackageImports: ['next-intl']
  },
  // เพิ่มการตั้งค่าเพื่อป้องกัน caching
  generateEtags: false,
  // รองรับ static export ถ้าต้องการ
  // output: 'export',
  // trailingSlash: true,
};

export default withNextIntl(nextConfig);
