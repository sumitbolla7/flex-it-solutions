/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'www.choicetime.in' },
      { protocol: 'https', hostname: 'nalvik.com' },
      { protocol: 'https', hostname: 'thetoppercentile.co.in' },
    ],
  },
}

module.exports = nextConfig
