/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      "links.papareact.com",
      "firebasestorage.googleapis.com",
      "platform-lookaside.fbsbx.com"
    ],
  }

}

module.exports = nextConfig
