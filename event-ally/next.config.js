/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Custom webpack configurations
    // Make sure it doesn't interfere with font loading

    return config;
  },
};

module.exports = nextConfig
