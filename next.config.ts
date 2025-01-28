/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"], // Add your external image domain here
  },
};

module.exports = nextConfig;
