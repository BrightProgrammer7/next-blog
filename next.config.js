/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
//   },
// };
// module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  reactScriptMode: true,
  experimental: {
    appDir: true,
  }
};
