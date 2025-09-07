import { PAGE_APPEAR_ANIMATION, POSTS_COLLECTION } from "@/lib/constants";
import * as motion from "motion/react-client";
import { getDocumentBySlug } from "outstatic/server";

export default async function MdxLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getDocumentBySlug(POSTS_COLLECTION, slug, ["publishedAt"]);
  if (!post) {
    throw new Error("No post found");
  }
  const publishedAt = new Date(post.publishedAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={PAGE_APPEAR_ANIMATION.initial}
      animate={PAGE_APPEAR_ANIMATION.animate}
      className="container flex flex-col justify-center pb-8 max-w-md sm:max-w-lg md:max-w-2xl xl:max-w-full xl:items-center mx-auto"
    >
      <span className="text-slate-500 text-base md:text-xl">{publishedAt}</span>
      <article className="prose text-pretty xl:prose-xl prose-blue prose-a:underline xs:prose-pre:max-w-xs sm:prose-pre:max-w-lg md:prose-pre:max-w-none prose-a:text-blue-600 prose-pre:bg-slate-900">
        {children}
      </article>
    </motion.div>
  );
}
