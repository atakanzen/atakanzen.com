import GlitchText from "@/components/GlitchText";
import { getOpenGraphImage } from "@/lib/opengraph";
import { NextSeo } from "next-seo";
import Link from "next/link";

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

      <div className="flex flex-col h-full w-full items-center justify-center gap-y-2 ">
        <Link
          title="writing"
          className="absolute top-2 underline"
          href="/writing"
        >
          writing
        </Link>
        <h1 className="text-xl sm:text-3xl md:text-6xl tracking-tighter">
          atakan zengin
        </h1>
        {/* <h2 className="text-xl text-blue-500">a generalist.</h2> */}
        <GlitchText />
      </div>
    </>
  );
}
