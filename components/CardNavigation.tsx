import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type CardNavigationProps = {
  href: Url;
  title: string;
  description?: string;
  date?: string;
  internal: boolean;
};

const CardNavigation = ({
  href,
  title,
  description,
  date,
  internal,
}: CardNavigationProps) => {
  return internal ? (
    <Link
      href={href}
      className="group xl:hover:text-current border-l xl:border-neutral-600 xl:hover:border-current text-current xl:text-neutral-600 pl-2 w-full"
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold ">{title}</h3>
      </div>
      {description ? <p>{description}</p> : null}
      {date ? <p className="text-sm">{date}</p> : null}
    </Link>
  ) : (
    <a
      href={href as string}
      target="_blank"
      rel="noopener noreferrer"
      className="group xl:hover:text-current border-l xl:border-neutral-600 xl:hover:border-current text-current xl:text-neutral-600 pl-2 w-full"
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold ">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="hidden xl:block text-transparent relative right-2 top-2 text-neutral-700 w-4 h-4 xl:group-hover:block xl:group-hover:text-current xl:group-hover:translate-x-2 xl:group-hover:-translate-y-2 transition-all duration-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
      {description ? <p>{description}</p> : null}
      {date ? <p className="text-sm">{date}</p> : null}
    </a>
  );
};

export default CardNavigation;
export type { CardNavigationProps };
