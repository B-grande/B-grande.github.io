/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "",
};

export default nextConfig;
