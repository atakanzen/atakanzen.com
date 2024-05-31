import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo } from "react";

type Link = {
  href: string;
  title: string;
};

const links: Link[] = [
  {
    href: "/",
    title: "home",
  },
  {
    href: "/writing",
    title: "writing",
  },
  {
    href: "/3D",
    title: "3D",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky border-b backdrop-blur-lg py-5 w-full top-0 flex items-center justify-start gap-x-2 text-lg md:text-xl">
      <div className="flex items-center justify-center gap-x-2 font-semibold">
        {links.map((li) => (
          <React.Fragment key={li.href}>
            <Link
              className={`hover:text-blue-500 ${
                pathname === li.href && "text-blue-500 underline"
              }`}
              href={li.href}
            >
              {li.title}
            </Link>
            <span>/</span>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
