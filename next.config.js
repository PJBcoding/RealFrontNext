/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    /* domains: ['images.unsplash.com'], */
    domains: ['mypjbckt.s3.amazonaws.com'],
  },
}

module.exports = nextConfig

/* module.exports = {
  images: {
    domains: ['mypjbckt.s3.amazonaws.com'],
    domains: ['mypjbckt.s3.amazonaws.com'],
  },
} */


