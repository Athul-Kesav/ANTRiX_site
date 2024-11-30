import type { NextConfig } from "next";

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
};

export default nextConfig;
