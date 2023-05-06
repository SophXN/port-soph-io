/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIMATIQ_API: process.env.CLIMATIQ_API,
  },
};

module.exports = nextConfig;
