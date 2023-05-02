import { GetStaticProps } from "next";
import fs from "fs";
import Link from "next/link";
import path from "path";
import { Post, getPosts } from "@/lib/notion";

interface PostsProps {
  posts: Post[];
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
      <Link href="/" className="underline mb-5">
        Back to homepage
      </Link>
      <h3 className="text-4xl my-3">Posts 🖨️</h3>
      <ul className="flex flex-col items-start gap-4 w-full">
        {posts.map((p, i) => (
          <Link
            key={i}
            href={`/posts/${p.slug}`}
            className="w-full border-solid p-4 max-w-2xl bg-miowhite-50 dark:bg-miogray-100 rounded-lg rounded-l-none"
          >
            <h4 className="text-cyan-500 dark:text-cyan-300 font-extrabold text-2xl">
              {p.title}
            </h4>
            <p>{p.excerpt}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
