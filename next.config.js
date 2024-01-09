/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "jc-full.local",
      },
    ],
  },
};

module.exports = nextConfig;
