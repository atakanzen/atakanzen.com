import { Client, isFullPage, isNotionClientError } from "@notionhq/client";
import { DatePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_KEY });

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}

export interface PostContent {}

const getPosts = async (): Promise<Post[]> => {
  try {
    let posts: Post[] = [];

    const postsTable = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID!,
      filter:
        process.env.NODE_ENV === "production"
          ? {
              and: [
                {
                  property: "published",
                  checkbox: {
                    equals: true,
                  },
                },
              ],
            }
          : undefined,
      sorts: [
        {
          property: "date",
          direction: "descending",
        },
      ],
    });

    for (const page of postsTable.results) {
      if (!isFullPage(page)) {
        continue;
      }

      const post: Post = {
        id: page.id,
        title: (page.properties.title as any).title[0].plain_text,
        excerpt: (page.properties.excerpt as any).rich_text[0].plain_text,
        slug: (page.properties.slug as any).rich_text[0].plain_text,
        date: (page.properties.date as DatePropertyItemObjectResponse).date
          ?.start!,
      };

      posts.push(post);
    }

    return posts;
  } catch (error: unknown) {
    if (isNotionClientError(error)) {
      console.error("Notion Error: ", error.message);
    }
    return [];
  }
};

const getSlugs = async (): Promise<string[]> => {
  let posts = await getPosts();

  return posts.map((p) => p.slug);
};

const getPostBlocks = async (slug: string) => {
  try {
    const filteredPostWithSlug = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID!,
      filter: {
        and: [
          {
            property: "slug",
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
      page_size: 1,
    });

    const pageId = filteredPostWithSlug.results[0].id;

    const pageContent = await notion.blocks.children.list({
      block_id: pageId,
    });

    return pageContent.results;
  } catch (error: unknown) {
    if (isNotionClientError(error)) {
      console.error("Notion Error: ", error.message);
    }
    return [];
  }
};

export { getPosts, getPostBlocks, getSlugs };
