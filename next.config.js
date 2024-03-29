// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

module.exports = withMDX(nextConfig);
