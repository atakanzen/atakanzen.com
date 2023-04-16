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
      className="group p-6 bg-miowhite-50 xl:hover:bg-cyan-50 dark:bg-miogray-100 dark:hover:xl:bg-miogray-50 rounded-xl"
    >
      <h5 className="text-l font-semibold">
        <span className="text-cyan-300 font-bold text-xl">MY</span> {title}
      </h5>
      <p>{description}</p>
    </Link>
  );
};

export default CardNavigation;
export type { CardNavigationProps };
