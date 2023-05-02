import { POST_PATHS, postFilePaths } from "@/utils/mdxUtils";
import { GetStaticProps } from "next";
import fs from "fs";
import Link from "next/link";
import path from "path";

import matter from "gray-matter";

type Post = {
  metadata: Record<string, any>;
  path: String;
};

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <div className="flex flex-col items-start p-4 divide-y-2 gap-4 xl:max-w-4xl mx-auto">
      <Link
        href="/"
        className="p-2 rounded-md bg-miowhite-50 hover:bg-cyan-50 dark:bg-miogray-100 dark:hover:bg-miogray-50"
      >
        Homepage
      </Link>
      <div className="w-full">
        <h3 className="text-4xl my-3">Posts 🖨️</h3>
        <ul className="flex flex-col items-start gap-4 w-full">
          {posts.map((p, i) => (
            <Link
              key={i}
              href={`/posts/${p.path}`}
              className="w-full border-solid p-4 bg-miowhite-50 dark:bg-miogray-100 rounded-lg rounded-l-none"
            >
              <h4 className="text-cyan-500 dark:text-cyan-300 font-extrabold text-2xl">
                {p.metadata.title}
              </h4>
              <p>{p.metadata.excerpt}</p>
              <p className="text-sm">
                {new Date(p.metadata.date).toDateString()}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let posts = postFilePaths.map((fp) => {
    const source = fs.readFileSync(path.join(POST_PATHS, fp));
    const { content, data } = matter(source);

    return {
      metadata: data,
      path: fp.replace(/\.mdx?$/, ""),
    };
  });
  posts = posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
  return { props: { posts } };
};

export default Posts;
