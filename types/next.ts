import { FC } from "react";

export type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export type NextAppPage<T = undefined> = T extends undefined
  ? FC<{
      searchParams?: Promise<SearchParams>;
    }>
  : FC<{
      params: Promise<T>;
      searchParams?: Promise<SearchParams>;
    }>;
