import { POST_PATHS, postFilePaths } from "@/utils/mdxUtils";
import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";

type Props = {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

// const components = {
//   Link,
// };

const PostPage = ({ mdxSource }: Props) => {
  return (
    <div className="flex flex-col items-start p-4 divide-y-2 gap-4 xl:max-w-4xl mx-auto">
      <div className="">
        <Link
          href="/posts"
          className="p-2 rounded-md bg-miowhite-50 hover:bg-cyan-50 dark:bg-miogray-100 dark:hover:bg-miogray-50"
        >
          Back to posts
        </Link>
      </div>
      <article className="prose pt-4 dark:prose-invert prose-l max-w-none prose-a:text-sky-500 prose-a:underline">
        <h3 className="text-2xl font-bold">
          {mdxSource.frontmatter.title as String}
        </h3>
        <MDXRemote {...mdxSource} />
      </article>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POST_PATHS, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const mdxSource = await serialize(source, { parseFrontmatter: true });

  return {
    props: {
      mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = (context) => {
  const paths = postFilePaths
    .map((fp) => fp.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
