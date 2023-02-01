/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL
  },
  images: {
    domains: ['185.46.9.157'],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://185.46.9.157:4200/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: 'http://185.46.9.157:4200/uploads/:path*'
      }
    ]
  }
}

module.exports = nextConfig
