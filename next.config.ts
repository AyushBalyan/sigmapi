import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.amazonaws.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: process.env.NEXT_PUBLIC_S3_BUCKET_DOMAIN || '',
          port: '',
          pathname: '/**',
        }
      ],
},
};

export default nextConfig;
