import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/rakuda-research",
  trailingSlash: true,
};

export default nextConfig;
