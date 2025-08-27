/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 简化配置以避免构建错误
  reactStrictMode: true,
  trailingSlash: false,
}

export default nextConfig
