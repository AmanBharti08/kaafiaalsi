import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      new URL('https://i.scdn.co/image/ab67616d0000b273e1c8a9f2c5e7b1a3c8e8f4'),
    ],
  },
};

export default nextConfig;
