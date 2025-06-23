import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Add this for static export
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'drive.google.com'],
  },
};

export default nextConfig;