/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/services/:path*', destination: '/digital-marketing-services/', permanent: true },
    ];
  },
};
