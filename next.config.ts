import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // Typically WordPress uses trailing slashes for URLs. This helps preserve SEO.
  async redirects() {
    return [
      // Add any specific old URLs that change structure here
      // {
      //   source: '/old-path/',
      //   destination: '/new-path/',
      //   permanent: true, // 301 redirect for SEO
      // },
    ];
  },
};

export default nextConfig;
