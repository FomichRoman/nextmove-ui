/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL
  },
  images: {
    domains: ['next-move.ru'],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://next-move.ru/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: 'https://next-move.ru/uploads/:path*'
      }
    ]
  }
}

module.exports = nextConfig
