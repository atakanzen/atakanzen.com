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

export const getPostMetadata = async (filePath: string) => {
  const { matter } = await import(`@/content/${filePath}`);

  return {
    matter,
  };
};

export const getAllPosts = async () => {
  let posts = await Promise.all(
    postFilePaths.map(async (fp) => {
      const { matter } = await import(`@/content/${fp}`);
      return {
        metadata: matter,
        path: fp.replace(/\.mdx?$/, ""),
      };
    })
  );

  posts = posts.filter((p) =>
    process.env.NODE_ENV === "development" ? p : p.metadata.published
  );

  posts = posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );

  return posts;
};

export const getPinnedPosts = async () => {
  let posts = await getAllPosts();

  posts = posts.filter((p) => p.metadata.pinned);

  return posts;
};
