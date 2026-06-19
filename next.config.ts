import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz del workspace a este proyecto (evita que Next detecte
  // el lockfile del directorio padre).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
