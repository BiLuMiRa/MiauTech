import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', // Permite todos os subdomínios do Supabase
      },
    ],
  },
};

export default nextConfig;
