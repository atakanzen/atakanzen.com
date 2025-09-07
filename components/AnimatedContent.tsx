"use client";

import { useScroll, useSpring } from "motion/react";
import * as motion from "motion/react-client";
import { ReactNode } from "react";

type AnimatedContentProps = {
  children: ReactNode;
};

const AnimatedContent = ({ children }: AnimatedContentProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <motion.div
        id="scroll-progress"
        className="fixed h-2 top-0 left-0 right-0 bg-blue-600 origin-left"
        style={{
          scaleX,
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      />

      {children}
    </>
  );
};

export default AnimatedContent;
