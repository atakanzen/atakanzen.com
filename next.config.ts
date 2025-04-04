import createMDX from "@next/mdx";
import { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      [remarkFrontmatter],
      [remarkMdxFrontmatter, { name: "matter" }],
    ],
  },
});

export default withMDX(nextConfig);
