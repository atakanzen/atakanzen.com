import "fs";
import fs from "fs";
import path from "path";

export const POST_PATHS = path.join(process.cwd(), "posts");

export const postFilePaths = fs
  .readdirSync(POST_PATHS)
  .filter((fp) => /\.mdx?$/.test(fp));
