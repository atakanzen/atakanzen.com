import { Client, isFullPage, isNotionClientError } from "@notionhq/client";
import {
  CheckboxPropertyItemObjectResponse,
  DatePropertyItemObjectResponse,
  MultiSelectPropertyItemObjectResponse,
  RichTextPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_KEY });

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}

const getPosts = async (): Promise<Post[]> => {
  try {
    let posts: Post[] = [];

    const blogDB = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID!,
      filter:
        process.env.NODE_ENV === "development"
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
    });

    for (const page of blogDB.results) {
      if (!isFullPage(page)) {
        continue;
      }

      // console.log(page.properties);

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

export { getPosts };
