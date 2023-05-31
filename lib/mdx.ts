import "fs";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const POST_PATHS = path.join(process.cwd(), "content");

export const postFilePaths = fs
  .readdirSync(POST_PATHS)
  .filter((fp) => /\.mdx?$/.test(fp));

export const getPostSlug = (filePath: string): string => {
  return filePath.replace(/\.mdx?$/, "");
};

export const getAllPosts = () => {
  let posts = postFilePaths.map((fp) => {
    const source = fs.readFileSync(path.join(POST_PATHS, fp));
    const { content, data } = matter(source);

    return {
      metadata: data,
      path: fp.replace(/\.mdx?$/, ""),
    };
  });

  posts = posts.filter((p) =>
    process.env.NODE_ENV === "development" ? p : p.metadata.published
  );

  posts = posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );

  return posts;
};
