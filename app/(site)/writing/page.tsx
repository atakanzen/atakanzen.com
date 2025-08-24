import { Metadata } from "next";
import { getDocuments } from "outstatic/server";

import { PostLink } from "@/components/PostLink";
import { PAGE_APPEAR_ANIMATION, POSTS_COLLECTION } from "@/lib/constants";
import { getOpenGraphImage } from "@/lib/opengraph";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
  title: "Atakan Zengin - Blog",
  description:
    "This is my blog which you can find my posts and notes about the things I'm working with or find interesting.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/writing`,
  },
  twitter: {
    creator: "@atakanzen_",
    card: "summary_large_image",
  },
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/writing`,
    title: "Atakan Zengin's Blog",
    siteName: "Blog - Atakan Zengin",
    description:
      "This is my blog which you can find my posts and notes about the things I'm working with or find interesting.",
    images: [getOpenGraphImage("Atakan Zengin's Blog")],
  },
  keywords:
    "Atakan Zengin Blog, Technology Blog, Software Blog, Blog Posts, Zengin Blog, Atakan Zengin's Blog",
};

const Posts = async () => {
  const posts = getDocuments(POSTS_COLLECTION, [
    "title",
    "slug",
    "description",
    "coverImage",
    "publishedAt",
  ]);

  return (
    <motion.div
      initial={PAGE_APPEAR_ANIMATION.initial}
      animate={PAGE_APPEAR_ANIMATION.animate}
      className="max-w-4xl px-4 py-8"
    >
      <h1 className="text-4xl mb-8 text-(--foreground-rgb)">Writing</h1>
      <div className="flex flex-col items-left gap-y-8">
        {posts.map((p, i) => (
          <PostLink key={`post-${i}`} post={p} />
        ))}
      </div>
    </motion.div>
  );
};

export default Posts;
