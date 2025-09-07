"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";

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
];

const Navigation = () => {
  const pathname = usePathname();

  const isActive = useCallback(
    (href: string) => {
      return pathname === href;
    },
    [pathname]
  );

  return (
    <nav className="fixed border-b bg-[var(--background-rgb)] py-5 w-screen flex items-center justify-start text-lg md:text-2xl px-8 h-12 md:h-16">
      <div className="flex items-center justify-center gap-x-2 font-light">
        {links.map((li) => (
          <React.Fragment key={li.href}>
            <div className="relative hover:text-blue-600 hover:cursor-pointer">
              <Link href={li.href}>{li.title}</Link>
              {isActive(li.href) ? (
                <motion.div
                  key="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600"
                  initial={false}
                  transition={{ duration: 0.25 }}
                  layoutId="underline"
                />
              ) : null}
            </div>

            <span>|</span>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
