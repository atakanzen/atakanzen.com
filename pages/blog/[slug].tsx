import { POST_PATHS, getPostSlug, postFilePaths } from "@/lib/mdx";
import fs from "fs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import React, { useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { getOpenGraphImage } from "@/lib/opengraph";

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
    <>
      <NextSeo
        title={mdxSource.frontmatter.title}
        titleTemplate="%s - Atakan Zengin - Blog"
        description={mdxSource.frontmatter.excerpt}
        openGraph={{
          type: "article",
          images: [getOpenGraphImage(mdxSource.frontmatter.title)],
          article: {
            publishedTime: new Date(mdxSource.frontmatter.date).toISOString(),
          },
        }}
        twitter={{
          handle: "@atakanzen_",
          cardType: "summary_large_image",
        }}
        canonical={`https://atakanzen.com/blog/${mdxSource.frontmatter.slug}`}
        additionalMetaTags={[
          {
            name: "date",
            content: new Date(mdxSource.frontmatter.date).toDateString(),
          },
        ]}
      ></NextSeo>
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
            href="/blog"
            className="underline underline-offset-2 decoration-sky-400"
          >
            Blog
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
            href="/blog"
            className="underline underline-offset-2 decoration-sky-400"
          >
            Blog
          </Link>
        </div>
      </div>
    </>
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
    .map((fp) => getPostSlug(fp))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
