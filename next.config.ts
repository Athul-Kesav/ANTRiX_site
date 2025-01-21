import { NextConfig } from "next";

// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow any hostname
      },
      {
        protocol: 'http',
        hostname: '**', // Allow any hostname (for HTTP)
      },
    ],
  },

  middleware: true,
};

export default nextConfig;
