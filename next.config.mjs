/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository name is NOT 'username.github.io', 
  // uncomment the lines below and replace 'repository-name' with your repo name.
  basePath: '/portfolio',
};

export default nextConfig;
