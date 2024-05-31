import { POST_PATHS, getPostSlug, postFilePaths } from "@/lib/mdx";
import fs from "fs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import { getOpenGraphImage } from "@/lib/opengraph";
import Navigation from "@/components/Navigation";

type Props = {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  readableDate: string;
};

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
  // p: (props: any) => <p {...props} className={`${inter.className}`}></p>,
  // li: (props: any) => <li {...props} className={`${inter.className}`}></li>,
};

const PostPage = ({
  mdxSource,
  readableDate,
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
      <Navigation />
      <div className="flex flex-col items- justify-center  py-8 divide-y-2 gap-4 xs:max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
        <article className="prose xl:prose-2xl prose-blue  pt-4 dark:prose-invert prose-a:underline prose-pre:xs:max-w-sm prose-pre:sm:max-w-md prose-pre:md:max-w-none  prose-a:text-blue-500 prose-pre:dark:bg-neutral-800 prose-pre:bg-neutral-900">
          <MDXRemote {...mdxSource} components={components} lazy />
        </article>
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
