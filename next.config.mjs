/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,      // Enables React's Strict Mode
  swcMinify: true,            // Enables faster SWC-based minification
  pageExtensions: ['mdx', 'tsx'], // Supports MDX and TypeScript files
};

export default nextConfig;
