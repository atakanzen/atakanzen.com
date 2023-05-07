import "fs";
import fs from "fs";
import path from "path";

export const POST_PATHS = path.join(process.cwd(), "content");

export const postFilePaths = fs
  .readdirSync(POST_PATHS)
  .filter((fp) => /\.mdx?$/.test(fp));

export const getPostSlug = (filePath: string): string => {
  return filePath.replace(/\.mdx?$/, "");
};
