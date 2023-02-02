/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL
  },
  images: {
    domains: ['194.67.87.12'],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://194.67.87.12/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: 'https://194.67.87.12/uploads/:path*'
      }
    ]
  }
}

module.exports = nextConfig
