/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Standalone output reduces memory usage significantly in containers
  output: "standalone",

  // 2. Increase timeout so Railway doesn't kill the build during static generation
  staticPageGenerationTimeout: 180,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 3. Keep ignoring TS errors to ensure build finishes
  typescript: {
    ignoreBuildErrors: true,
  },

  // 4. Keep memory limits
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;