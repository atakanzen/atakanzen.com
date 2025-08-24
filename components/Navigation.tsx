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
    <nav className="fixed border-b backdrop-blur-lg py-5 w-screen flex items-center justify-start text-lg md:text-2xl px-4 h-12 md:h-16">
      <div className="flex items-center justify-center gap-x-2 font-light">
        {links.map((li) => (
          <React.Fragment key={li.href}>
            <div className="relative">
              <Link
                className={`hover:text-blue-500 ${
                  isActive(li.href) && "text-blue-500"
                }`}
                href={li.href}
              >
                {li.title}
                <motion.div
                  key={li.href}
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-pink-500"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: isActive(li.href) ? 1 : 0,
                    transition: { duration: 0.2 },
                  }}
                />
              </Link>
            </div>

            <span>/</span>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
