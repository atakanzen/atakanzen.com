import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type CardNavigationProps = {
  href: Url;
  title: string;
  description?: string;
  date?: string;
  internal: boolean;
  className?: string;
};

const CardNavigation = ({
  href,
  title,
  description,
  date,
  internal,
  className,
}: CardNavigationProps) => {
  return internal ? (
    <Link
      href={href}
      className={`p-4 rounded dark:bg-yellow-500 bg-blue-500 bg-opacity-5 dark:bg-opacity-25 group w-full xl:hover:dark:bg-opacity-30 xl:hover:bg-opacity-20 ${className}`}
    >
      <div className="flex justify-between gap-4">
        <h3 className={`text-l xl:text-xl font-bold `}>{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="hidden xl:block text-transparent relative right-2 top-2 text-neutral-700 w-4 h-4 xl:group-hover:block xl:group-hover:text-current xl:group-hover:translate-x-2 xl:group-hover:-translate-y-2 transition-all duration-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>

      {description ? (
        <p className="text-sm xs:text-base">{description}</p>
      ) : null}
      {date ? <p className="text-sm">{date}</p> : null}
    </Link>
  ) : (
    <a
      href={href as string}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-4 rounded dark:bg-yellow-500 bg-blue-500 bg-opacity-5 dark:bg-opacity-25 group w-full xl:hover:dark:bg-opacity-30 xl:hover:bg-opacity-20 ${className}`}
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold ">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="hidden xl:block text-transparent relative right-2 top-2 text-neutral-700 w-4 h-4 xl:group-hover:block xl:group-hover:text-current xl:group-hover:translate-x-2 xl:group-hover:-translate-y-2 transition-all duration-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
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
