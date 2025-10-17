import path from 'path';
import type { NextConfig } from 'next';
import type { WebpackConfigContext } from 'next/dist/build/webpack-config';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL('https://lh3.googleusercontent.com/**/**')],
	},
	reactStrictMode: true,

  webpack(config: any, context: WebpackConfigContext) {
    // Tambahkan pengecualian agar Webpack tidak scan folder yang bermasalah
    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      exclude: [
        path.resolve('C:\\Users\\azami\\Application Data') // Exclude path bermasalah
      ],
    });

    return config;
  },
};

export default nextConfig;
