import GlitchText from "@/components/GlitchText";
import { getOpenGraphImage } from "@/lib/opengraph";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { IBM_Plex_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";

const ibmPlexMono = IBM_Plex_Mono({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NextSeo
        title="Atakan Zengin - Software Engineer"
        titleTemplate="%s"
        description="Hey I'm Atakan! I'm a full-stack software engineer. You can find more information about me here, and read about my thoughts on certain things I'm working on."
        canonical="https://atakanzen.com"
        twitter={{
          handle: "@atakanzen_",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          url: "https://atakanzen.com",
          title: "Atakan Zengin - Software Engineer",
          description:
            "Hey I'm Atakan! I'm a full-stack software engineer. You can find more information about me here, and read about my thoughts on certain things I'm working on.",
          images: [getOpenGraphImage("Atakan Zengin - Software Engineer")],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Atakan Zengin, Software Engineer, Zengin, Atakan, Personal Blog, Technology Blog",
          },
        ]}
      ></NextSeo>
      <Navigation />
      <div className="flex flex-col mt-5 items-center justify-center gap-y-5">
        <div className={`${ibmPlexMono.className} flex flex-col items-center`}>
          <h1 className={`text-xl sm:text-3xl md:text-6xl tracking-tighter`}>
            atakan zengin
          </h1>
          <GlitchText />
        </div>
      </div>
    </>
  );
}
