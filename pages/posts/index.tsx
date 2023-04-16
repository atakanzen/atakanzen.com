import { POST_PATHS, postFilePaths } from "@/utils/mdxUtils";
import { GetStaticProps, NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import Link from "next/link";
import path from "path";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
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
    <div className="w-full">
      <Link href="/" className="underline mb-5">
        Back to homepage
      </Link>
      <h3 className="text-4xl my-3">Posts 🖨️</h3>
      <ul className="flex flex-col items-start gap-4">
        {posts.map((p, i) => (
          <Link
            key={i}
            href={`/posts/${p.path}`}
            className="max-w-4xl border-solid p-4 bg-miowhite-50 dark:bg-miogray-100 rounded-lg rounded-l-none"
          >
            <h4 className="text-cyan-500 dark:text-cyan-300 font-extrabold text-2xl">
              {p.metadata.title}
            </h4>
            <p>{p.metadata.description}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = postFilePaths.map((fp) => {
    const source = fs.readFileSync(path.join(POST_PATHS, fp));
    const { content, data } = matter(source);

    return {
      metadata: data,
      path: fp.replace(/\.mdx?$/, ""),
    };
  });

  return { props: { posts } };
};

export default Posts;
