/** @type {import('next').NextConfig} */
// next.config.js



module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net',
        port: '',
      },
    ],
  },
}