/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    targetProjectPhase: 'alpha',
    apiKey: 'musopXnASrDXLrAcjqs4aSU3Fd9pXF9nYnFsCh5a',
  },
  images: {
    domains: ['localhost', 'api.nasa.gov'],
    loader: 'custom',
    path: '/',
  },
};

export default nextConfig;
