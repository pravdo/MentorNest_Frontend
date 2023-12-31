/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // This can be set to false if it's not a permanent redirect
      },
    ];
  },
  images: {
    domains: ["cdn.builder.io"],
  },
};

module.exports = nextConfig;
