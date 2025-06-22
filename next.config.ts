import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  // ป้องกัน build error บน Vercel
  experimental: {
    optimizePackageImports: ['next-intl']
  },
  // รองรับ static export ถ้าต้องการ
  // output: 'export',
  // trailingSlash: true,
};

export default withNextIntl(nextConfig);
