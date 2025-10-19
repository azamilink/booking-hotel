import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "q8qcqktyq7o1ni37.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,

  // 🚫 Pastikan Next.js tidak men-scan folder sistem
  webpack(config) {
    config.watchOptions = {
      ignored: [
        "**/node_modules/**",
        "**/.next/**",
        "C:/Users/ASPIRE/Application Data/**",
        "C:/Users/ASPIRE/AppData/**",
        "C:/Windows/**",
        "C:/ProgramData/**",
        "C:/Program Files/**",
        "C:/Program Files (x86)/**",
      ],
    };
    return config;
  },

  // ✅ Tambahan untuk Windows
  outputFileTracingRoot: __dirname,

  // ✅ Ignor hal-hal yang bisa bikin crash di build worker
  experimental: {
    esmExternals: "loose",
    webpackBuildWorker: false,
  },
};

export default nextConfig;
