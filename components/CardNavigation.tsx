import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type CardNavigationProps = {
  href: Url;
  title: String;
  description: String;
};

const CardNavigation = ({ href, title, description }: CardNavigationProps) => {
  return (
    <Link
      href={href}
      className="p-6 cursor-pointer group xl:hover:bg-slate-100 dark:bg-slate-900 border dark:border-black xl:dark:hover:bg-slate-800 rounded-xl"
    >
      <h5 className="text-xl font-bold max-w-fit text-sky-500 dark:text-sky-300">
        MY {title}
        <span className="hidden xl:block max-w-0 xl:group-hover:max-w-full transition-all duration-500 -mt-1 h-0.5 bg-gradient-to-r from-cyan-300 to-sky-400"></span>
      </h5>
      <p>{description}</p>
    </Link>
  );
};

export default CardNavigation;
export type { CardNavigationProps };
