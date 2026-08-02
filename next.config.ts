import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "italki-lessons";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        basePath: `/${repositoryName}`,
        assetPrefix: `/${repositoryName}/`,
      }
    : {}),
};

export default nextConfig;
