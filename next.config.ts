import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    formats: ['image/webp'],
  },

}

export default nextConfig;
