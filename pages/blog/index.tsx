import { POST_PATHS, getAllPosts, postFilePaths } from "@/lib/mdx";
import { GetStaticProps } from "next";
import fs from "fs";
import Link from "next/link";
import path from "path";

import matter from "gray-matter";
import { NextSeo } from "next-seo";
import { getOpenGraphImage } from "@/lib/opengraph";
import CardNavigation from "@/components/CardNavigation";

export type Post = {
  metadata: Record<string, any>;
  path: String;
};

type BlogProps = {
  posts: Post[];
};

const Posts = ({ posts }: BlogProps) => {
  return (
    <>
      <NextSeo
        title="Atakan Zengin - Blog"
        description="This is my blog which you can find my posts and notes about the things I'm working with or find interesting."
        canonical="https://atakanzen.com/posts"
        twitter={{
          handle: "@atakanzen_",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: "https://atakanzen.com/blog",
          title: "Atakan Zengin's Blog",
          site_name: "Blog - Atakan Zengin",
          description:
            "This is my blog which you can find my posts and notes about the things I'm working with or find interesting.",
          images: [getOpenGraphImage("Atakan Zengin's Blog")],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `Atakan Zengin Blog, Technology Blog, Software Blog, Blog Posts, Zengin Blog, Atakan Zengin's Blog`,
          },
        ]}
      ></NextSeo>
      <div className="flex flex-col items-start p-4 divide-y-2 gap-4 xl:max-w-4xl mx-auto">
        <div className="flex items-center gap-2 font-semibold">
          <Link href="/" className="underline underline-offset-2">
            Homepage
          </Link>
          <span>/</span>
          <h1>Blog</h1>
        </div>
        <div className="w-full pt-4">
          <div className="flex flex-col items-start gap-4 w-full">
            {posts.map((p, i) => (
              <CardNavigation
                key={i}
                internal
                title={p.metadata.title}
                href={`blog/${p.path}`}
                description={p.metadata.excerpt}
                date={new Date(p.metadata.date).toDateString()}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  let posts = getAllPosts();

  return { props: { posts } };
};

export default Posts;
