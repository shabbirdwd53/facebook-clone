/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "avatars.dicebear.com"],
  },
};

module.exports = nextConfig;
