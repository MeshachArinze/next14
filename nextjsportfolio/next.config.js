/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.course-api.com",
        port: "",
        pathname: "/images/tours/**",
      },
    ],
  },
};

module.exports = nextConfig;
