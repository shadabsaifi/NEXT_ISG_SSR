/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig:{
    // will only be available on the server side
  },
  publicRuntimeConfig:{
    // will only be available on on both server and client
  }
  
  
}

module.exports = nextConfig