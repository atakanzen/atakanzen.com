import { getPostBlocks, getSlugs } from "@/lib/notion";
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface PostPageProps {
  postBlocks: (PartialBlockObjectResponse | BlockObjectResponse)[];
  slug: string;
}

const PostPage = () => {
  return (
    <div className="flex flex-col items-start p-4 divide-y-2 gap-4 xl:max-w-4xl mx-auto"></div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let slugs = await getSlugs();

  const paths = slugs.map((s) => {
    return {
      params: {
        slug: s,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  let postBlocks = await getPostBlocks(slug);
  return {
    props: {
      postBlocks,
      slug,
    },
  };
};

export default PostPage;
