import CardNavigation from "@/components/CardNavigation";
import { CardNavigationProps } from "@/components/CardNavigation";
import { getPinnedPosts } from "@/lib/mdx";
import { getOpenGraphImage } from "@/lib/opengraph";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Atkinson_Hyperlegible } from "next/font/google";
import { useEffect, useState } from "react";
import { Post } from "./blog";
import Link from "next/link";

// const navigationCards: CardNavigationProps[] = [
//   {
//     href: "/blog",
//     title: "Blog",
//     // description: "You can read what I write, occasionally.",
//     internal: true,
//     fromHomePage: true,
//   },
//   {
//     href: "/my-journey",
//     title: "Journey",
//     // description: "Check my journey, in a timeline format!",
//     internal: true,
//     fromHomePage: true,
//   },
//   // {
//   //   href: "/projects",
//   //   title: "Projects",
//   //   description: "Making Sundays less depressive.",
//   // },
//   {
//     href: "/contact",
//     title: "Contact",
//     // description: "Some useful links where I appear.",
//     internal: true,
//     fromHomePage: true,
//   },
// ];

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
});

type HomeProps = {
  pinnedPosts: Post[];
};

export default function Home({ pinnedPosts }: HomeProps) {
  return (
    <>
      <NextSeo
        title="Atakan Zengin - Software Engineer"
        titleTemplate="%s"
        description="Hey I'm Atakan! I'm a full-stack software engineer. You can find more information about me here, and read about my thoughts on certain things I'm working on."
        canonical="https://atakanzen.com"
        twitter={{
          handle: "@atakanzen_",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          url: "https://atakanzen.com",
          title: "Atakan Zengin - Software Engineer",
          description:
            "Hey I'm Atakan! I'm a full-stack software engineer. You can find more information about me here, and read about my thoughts on certain things I'm working on.",
          images: [getOpenGraphImage("Atakan Zengin - Software Engineer")],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Atakan Zengin, Software Engineer, Zengin, Atakan, Personal Blog, Technology Blog",
          },
        ]}
      ></NextSeo>

      <div className="flex flex-col xl:max-w-5xl mx-auto gap-10">
        <div className={`xl:tracking-tight ${atkinson.className}`}>
          <h1 className="text-3xl xl:text-6xl font-bold">Atakan Zengin;</h1>
          <h2 className={`text-2xl xl:text-5xl font-semibold`}>
            helps people by{" "}
            <span className="text-blue-500 dark:text-yellow-500  underline">
              writing quality software.
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h3 className="text-xl font-semibold float-left">Pinned Posts</h3>
          <div className="flex flex-col gap-2">
            {pinnedPosts.map((p, i) => (
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
}

export const getStaticProps: GetStaticProps = (context) => {
  let pinnedPosts = getPinnedPosts();
  return {
    props: {
      pinnedPosts,
    },
  };
};
