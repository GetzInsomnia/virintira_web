import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.virintira.com" }],
        destination: "https://virintira.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          { type: "host", value: "virintira.com" },
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://virintira.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
