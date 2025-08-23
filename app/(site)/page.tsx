import GlitchText from "@/components/GlitchText";
import { getOpenGraphImage } from "@/lib/opengraph";
import { ibmPlexMono } from "@/styles/fonts";
import * as motion from "motion/react-client";
import { Metadata } from "next";

const SWEEP_IN_ANIMATION = {
  initial: { x: -1000 },
  animate: { x: 0 },
  transition: {
    type: "spring" as const,
    stiffness: 50,
    damping: 20,
  },
};

// const HOVER_ANIMATION = {
//   whileHover: {
//     scale: 1.05,
//     y: -2,
//     transition: {
//       type: false as const,
//       duration: 0.1,
//       stiffness: 100,
//       damping: 10,
//     },
//   },
// };

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
    <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-2">
      <div
        className={`flex flex-col w-full md:w-1/2 gap-4 md:items-end items-center justify-end select-none`}
      >
        <motion.h1
          initial={SWEEP_IN_ANIMATION.initial}
          animate={SWEEP_IN_ANIMATION.animate}
          transition={SWEEP_IN_ANIMATION.transition}
          className="text-3xl md:text-8xl tracking-tighter text-end"
        >
          Atakan Zengin
        </motion.h1>
        <div className="flex text-xl lg:text-2xl items-center justify-center md:self-end self-center gap-x-4 text-(--foreground-rgb)">
          <motion.a
            // whileHover={HOVER_ANIMATION.whileHover}
            initial={SWEEP_IN_ANIMATION.initial}
            animate={SWEEP_IN_ANIMATION.animate}
            transition={{
              ...SWEEP_IN_ANIMATION.transition,
              delay: 0.5,
            }}
            className="underline"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/atakanzen"
          >
            GitHub
          </motion.a>
          <motion.a
            // whileHover={HOVER_ANIMATION.whileHover}
            initial={SWEEP_IN_ANIMATION.initial}
            animate={SWEEP_IN_ANIMATION.animate}
            transition={{
              ...SWEEP_IN_ANIMATION.transition,
              delay: 0.2,
            }}
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
    </div>
  );
}
