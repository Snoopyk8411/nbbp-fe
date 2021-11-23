/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'api.nasa.gov'],
    loader: 'custom',
    path: '/',
  },
};

export default nextConfig;
