import GlitchText from "@/components/GlitchText";
import { PAGE_APPEAR_ANIMATION } from "@/lib/constants";
import { getOpenGraphImage } from "@/lib/opengraph";
import { ibmPlexMono } from "@/styles/fonts";
import * as motion from "motion/react-client";
import { Metadata } from "next";

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
      className="flex flex-col items-center h-full justify-center gap-1 md:gap-2 select-none "
    >
      <div className={`${ibmPlexMono.className}`}>
        <GlitchText />
      </div>
      <h1 className="text-2xl md:text-4xl text-end">Atakan Zengin</h1>
      <div className="flex text-xl lg:text-2xl items-center justify-center gap-x-4 text-(--foreground-rgb)">
        <a
          className="underline hover:text-blue-600"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/atakanzen"
        >
          github
        </a>
        <a
          className="underline hover:text-blue-600"
          rel="noreferrer"
          target="_blank"
          href="https://linkedin.com/in/atakanzen"
        >
          linkedin
        </a>
      </div>
    </motion.div>
  );
}
