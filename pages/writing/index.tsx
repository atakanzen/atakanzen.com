import { getAllPosts } from "@/lib/mdx";
import { GetStaticProps } from "next";
import Link from "next/link";

import { NextSeo } from "next-seo";
import { getOpenGraphImage } from "@/lib/opengraph";
import Navigation from "@/components/Navigation";

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
      <div className="flex flex-col items-start gap-4">
        <Navigation />
        <div className="w-full">
          <div className="flex flex-col items-start gap-y-2 w-full">
            {posts.map((p, i) => (
              <Link
                key={i}
                href={`writing/${p.path}`}
                className="flex w-full items-center justify-between hover:pl-4 focus:pl-4 transition-all duration-150"
              >
                <span className="hover:underline text-sm xs:text-base md:text-xl">
                  {p.metadata.title}
                </span>
                <span className="text-transparent text-start text-xs xs:text-base md:text-xl inline-block bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 bg-clip-text font-bold">
                  {new Date(p.metadata.date).toISOString().substring(0, 10)}
                </span>
              </Link>
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
