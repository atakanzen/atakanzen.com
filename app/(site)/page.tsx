import GlitchText from "@/components/GlitchText";
import { PAGE_APPEAR_ANIMATION } from "@/lib/constants";
import { getOpenGraphImage } from "@/lib/opengraph";
import { ibmPlexMono } from "@/styles/fonts";
import * as motion from "motion/react-client";
import { Metadata } from "next";

const LINKS_ANIMATION = {
  initial: {
    color: "oklch(54.6% 0.245 262.881)",
  },
  whileHover: {
    scale: 1.05,
    color: "oklch(65.6% 0.241 354.308)",
  },
  whileTap: {
    scale: 1.05,
    color: "oklch(65.6% 0.241 354.308)",
  },
};

export const metadata: Metadata = {
  title: "Atakan Zengin - Software Engineer",
  description:
    "Hey I'm Atakan! I'm a full-stack software engineer. You can find more information about me here, and read about my thoughts on certain things I'm working on.",
  twitter: {
    creator: "@atakanzen_",
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    title: "Atakan Zengin",
    description:
      "Hey I'm Atakan! I'm a full-stack software engineer. You can find more information about me here, and read about my thoughts on certain things I'm working on.",
    images: getOpenGraphImage("Atakan Zengin - Software Engineer"),
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
  },
  keywords:
    "Atakan Zengin, Software Engineer, Zengin, Atakan, Personal Blog, Technology Blog",
};

export default function Home() {
  return (
    <motion.div
      initial={PAGE_APPEAR_ANIMATION.initial}
      animate={PAGE_APPEAR_ANIMATION.animate}
      className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-2"
    >
      <div className="flex flex-col w-full md:w-1/2 gap-4 md:items-end items-center justify-end select-none">
        <h1 className="text-5xl md:text-8xl tracking-tighter text-end">
          Atakan Zengin
        </h1>
        <div className="flex text-xl lg:text-2xl items-center justify-center md:self-end self-center gap-x-4 text-(--foreground-rgb)">
          <motion.a
            initial={LINKS_ANIMATION.initial}
            whileHover={LINKS_ANIMATION.whileHover}
            className="underline"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/atakanzen"
          >
            GitHub
          </motion.a>
          <motion.a
            initial={LINKS_ANIMATION.initial}
            whileHover={LINKS_ANIMATION.whileHover}
            whileTap={LINKS_ANIMATION.whileTap}
            className="underline"
            rel="noreferrer"
            target="_blank"
            href="https://linkedin.com/in/atakanzen"
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
      <div
        className={`${ibmPlexMono.className} w-full md:w-1/2 select-none flex justify-center md:justify-end`}
      >
        <div className="w-full flex justify-center">
          <GlitchText />
        </div>
      </div>
    </motion.div>
  );
}
