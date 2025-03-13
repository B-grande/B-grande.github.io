import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables a static export
  basePath: "/B-grande.github.io", // Only my github repo
  assetPrefix: "/B-grande.github.io/", //match repo name
};

export default nextConfig;
