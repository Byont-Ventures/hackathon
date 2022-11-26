/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx'],
  compiler: {
    // https://nextjs.org/docs/advanced-features/compiler#remove-react-properties
    // Removes data-testid for production builds
    reactRemoveProperties: true,
  },
};

export default nextConfig;
