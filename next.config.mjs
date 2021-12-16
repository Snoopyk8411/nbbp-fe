/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @type {import('next').NextConfig} */
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'api.nasa.gov'],
    loader: 'custom',
    path: '/',
  },
  webpack(config, options) {
    const { dev, isServer } = options;
    // prevent twice typechecking
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
        }
      }));
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

export default nextConfig;
