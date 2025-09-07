"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { OstDocument } from "outstatic";

const POST_LINK_ANIMATIONS = {
  transition: { duration: 0.25 },
  chevron: {
    initial: { opacity: 0, rotate: 90, x: -20 },
    hover: { opacity: 1, rotate: 0, x: 0 },
    tap: { opacity: 1, rotate: 0, x: 0 },
  },
  content: {
    initial: { x: 0 },
    hover: { x: 8 },
    tap: { x: 8 },
  },
} as const;

export const PostLink = ({ post }: { post: OstDocument }) => {
  return (
    <Link href={`/writing/${post.slug}`} className="block">
      <motion.div initial="initial" whileHover="hover" whileTap="tap">
        {post.coverImage ? (
          <div
            className="h-48 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${post.coverImage})` }}
          ></div>
        ) : null}
        <div className="flex items-center justify-start relative">
          <motion.div
            className="flex flex-col items-start"
            variants={POST_LINK_ANIMATIONS.content}
            transition={POST_LINK_ANIMATIONS.transition}
          >
            <h2 className="text-lg md:text-2xl mb-2 text-(--foreground-rgb)">
              {post.title}
            </h2>

            {post.description ? (
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {post.description}
              </p>
            ) : null}
            <div className="text-sm text-gray-500">
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};
