/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.myanimelist.net', 'img.youtube.com', 'i.ytimg.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.jikan.moe/v4/:path*',
      },
    ];
  },
  basePath: process.env.NODE_ENV === 'production' ? '/aniwebs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aniwebs/' : '',
};

module.exports = nextConfig; 