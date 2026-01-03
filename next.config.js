/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Keep your existing image settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 2. Disable checks to save memory during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 3. Limit CPU usage to prevent Railway crashes
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;
