import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Required for modern module handling
    // esmExternals: 'loose',
    // Optional but recommended
    externalDir: true
  }
};

export default nextConfig;
