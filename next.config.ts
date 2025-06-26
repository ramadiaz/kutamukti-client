import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://placehold.co/**"), new URL("https://cdn.xann.my.id/**")],
  },
};

export default nextConfig;
