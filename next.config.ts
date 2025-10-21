import path from "path";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // ⚙️ Optimasi gambar (aman untuk Vercel dan local)
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
    formats: ["image/avif", "image/webp"],
  },

  // ⚙️ Output tracing agar tidak men-scan folder sistem Windows
  outputFileTracingRoot: path.resolve("./"),
  outputFileTracingExcludes: {
    "*": [
      "C:\\Users\\azami\\Application Data",
      "C:\\Users\\azami\\Cookies",
      "C:\\Users\\azami\\AppData",
      "C:\\ProgramData",
      "C:\\Windows",
      "C:\\Program Files",
      "C:\\Program Files (x86)",
    ],
  },

  // 🧹 Optimasi build untuk production
  productionBrowserSourceMaps: false, // nonaktifkan source map agar bundle lebih kecil
  reactStrictMode: true, // rekomendasi untuk debugging dan performa
  compress: true, // aktifkan kompresi gzip
  poweredByHeader: false, // hilangkan header "x-powered-by: Next.js"

  // ⚙️ Atur lint dan typescript agar build stabil
  eslint: {
    ignoreDuringBuilds: true, // biar build nggak gagal karena warning lint
  },
  typescript: {
    ignoreBuildErrors: false, // tetap stop kalau error TS serius
  },

  // 🧭 Redirect / rewrite opsional
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // ⚙️ Output folder untuk Vercel dan manual deploy
  output: isProd ? "standalone" : undefined,
};

export default nextConfig;
