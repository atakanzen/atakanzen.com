import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

export type Post = {
  metadata: Record<string, any>;
  path: String;
};

export type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  alternates?: {
    languages?: Languages<string>;
  };
}>;
