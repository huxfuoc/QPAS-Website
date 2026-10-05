/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  experimental: {
    cpus: 1,
    workerThreads: true,
  },
};

export default nextConfig;
