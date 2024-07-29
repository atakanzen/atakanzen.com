import React from "react";
import { IBM_Plex_Mono } from "next/font/google";
import GlitchText from "./GlitchText";
const ibmPlexMono = IBM_Plex_Mono({ weight: "500", subsets: ["latin"] });

const Title = () => {
  return (
    <div
      className={`${ibmPlexMono.className} flex flex-col items-center select-none`}
    >
      <h1 className={`text-3xl md:text-8xl tracking-tighter`}>atakan zengin</h1>
      <GlitchText />
    </div>
  );
};

export default Title;
