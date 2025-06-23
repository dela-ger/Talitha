import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'drive.google.com'],
  },
  
};

export default nextConfig;
