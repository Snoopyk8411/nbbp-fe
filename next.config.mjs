/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'api.nasa.gov'],
    loader: 'custom',
    path: '/',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

export default nextConfig;
