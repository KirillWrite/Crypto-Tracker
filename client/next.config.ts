import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com", // Добавляем этот хост
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com", // Можно оставить для старых ссылок
      },
    ],
  },
};

export default nextConfig;
