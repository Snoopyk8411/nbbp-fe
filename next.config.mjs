/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    targetProjectPhase: 'alpha',
  },
  images: {
    domains: ["localhost", "api.nasa.gov"],
    loader: "custom",
    path: "/",
  },
};

export default nextConfig;
