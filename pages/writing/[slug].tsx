import { POST_PATHS, getPostSlug, postFilePaths } from "@/lib/mdx";
import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import { getOpenGraphImage } from "@/lib/opengraph";
import Image, { ImageProps } from "next/image";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

// Injecting custom components for MDX Render Engine
const components = {
  a: (props: any) => (
    <>
      <a {...props} target="_blank" rel="noreferrer" />
      <span className="inline-flex -z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-3.5 h-3.5 relative top-0 right-0 text-current -z-50"
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
  img: (props: any) => (
    <Image
      className="w-full h-auto"
      width={0}
      height={0}
      sizes="100vw"
      {...(props as ImageProps)}
    />
  ),
};

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

const PostPage = ({ mdxSource }: Props) => {
  return (
    <>
      <NextSeo
        title={mdxSource.frontmatter.title as string}
        titleTemplate="%s - Atakan Zengin - Blog"
        description={mdxSource.frontmatter.excerpt as string}
        openGraph={{
          type: "article",
          images: [getOpenGraphImage(mdxSource.frontmatter.title as string)],
          article: {
            publishedTime: new Date(
              mdxSource.frontmatter.date as string
            ).toISOString(),
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
            content: new Date(
              mdxSource.frontmatter.date as string
            ).toDateString(),
          },
        ]}
      ></NextSeo>
      <div className="flex flex-col justify-center py-8 gap-4 xs:max-w-xs sm:max-w-xl md:max-w-2xl xl:max-w-full xl:items-center mx-auto">
        <span className="text-blue-500 text-base md:text-xl font-bold">
          {mdxSource.frontmatter.date as string}
        </span>
        <article className="prose xl:prose-xl 2xl:prose-2xl prose-blue pt-4 dark:prose-invert prose-a:underline xs:prose-pre:max-w-sm sm:prose-pre:max-w-md md:prose-pre:max-w-none prose-a:text-blue-500 prose-pre:bg-[#0D1117]">
          <MDXRemote {...mdxSource} components={components} lazy />
        </article>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async ({ params }) => {
  const postFilePath = path.join(POST_PATHS, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

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
