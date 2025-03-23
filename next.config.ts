import createMDX from "@next/mdx";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
