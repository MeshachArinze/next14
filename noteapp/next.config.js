/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  assetPrefix: isProd ? "https://cdn.mydomain.com" : undefined,
  reactStrictMode: true,
};

module.exports = nextConfig;
