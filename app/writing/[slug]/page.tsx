import MdxClientRenderer from "@/components/MDXClientRenderer";
import { getPostSlug, postFilePaths } from "@/lib/mdx";
import { NextAppPage } from "@/types/next";
import "highlight.js/styles/github-dark.css";



const PostPage: NextAppPage<{ slug: string }> = async ({ params }) => {
  const { slug } = await params;
  return <MdxClientRenderer slug={slug} />
};

export async function generateStaticParams() {
  return postFilePaths.map((fp) => getPostSlug(fp)).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default PostPage;
