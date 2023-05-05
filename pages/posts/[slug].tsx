import { POST_PATHS, postFilePaths } from "@/utils/mdxUtils";
import fs from "fs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import React, { useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";

type Props = {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

// Injecting custom components for MDX Render Engine
const components = {
  a: (props: any) => <a {...props} target="_blank" rel="noreferrer" />,
};

const PostPage = ({
  mdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex flex-col items-start p-4 divide-y-2 gap-4 xl:max-w-4xl mx-auto">
      <div className="flex items-center gap-2 font-semibold">
        <Link
          href="/"
          className="underline underline-offset-2 decoration-sky-400"
        >
          Homepage
        </Link>
        <span>/</span>
        <Link
          href="/posts"
          className="underline underline-offset-2 decoration-sky-400"
        >
          Posts
        </Link>
      </div>
      <article className="prose sm:prose-lg max-w-none pt-4 dark:prose-invert  prose-a:underline  prose-a:dark:text-sky-400 prose-a:text-sky-500 prose-pre:max-w-xs prose-pre:sm:max-w-none">
        <MDXRemote {...mdxSource} components={components} lazy />
      </article>
      <div className="flex items-center w-full gap-2 font-semibold pt-4">
        <Link
          href="/"
          className="underline underline-offset-2 decoration-sky-400"
        >
          Homepage
        </Link>
        <span>/</span>
        <Link
          href="/posts"
          className="underline underline-offset-2 decoration-sky-400"
        >
          Posts
        </Link>
      </div>
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
