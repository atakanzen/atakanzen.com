import { POST_PATHS, getPostSlug, postFilePaths } from "@/lib/mdx";
import fs from "fs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { getOpenGraphImage } from "@/lib/opengraph";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

// Injecting custom components for MDX Render Engine
const components = {
  a: (props: any) => (
    <>
      <a {...props} target="_blank" rel="noreferrer" />
      <span className="inline-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-3.5 h-3.5 relative top-0 right-0 text-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </span>
    </>
  ),
  // p: (props: any) => <p {...props} className={`${inter.className}`}></p>,
  // li: (props: any) => <li {...props} className={`${inter.className}`}></li>,
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
      <div className="flex flex-col items-start px-4 py-8 divide-y-2 gap-4 xl:max-w-4xl mx-auto">
        <div className="flex items-center gap-2 font-semibold">
          <Link href="/" className="underline underline-offset-2">
            Homepage
          </Link>
          <span>/</span>
          <Link href="/blog" className="underline underline-offset-2">
            Blog
          </Link>
        </div>
        <article className="prose xl:prose-lg prose-blue dark:prose-amber max-w-none pt-4 dark:prose-invert prose-a:underline prose-pre:max-w-xs prose-pre:sm:max-w-none prose-pre:dark:bg-neutral-800 prose-pre:bg-neutral-900 prose-p:">
          <MDXRemote {...mdxSource} components={components} lazy />
        </article>
        <div className="flex items-center w-full gap-2 font-semibold pt-4">
          <Link href="/" className="underline underline-offset-2 ">
            Homepage
          </Link>
          <span>/</span>
          <Link href="/blog" className="underline underline-offset-2 ">
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
