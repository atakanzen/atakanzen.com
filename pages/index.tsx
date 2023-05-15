import CardNavigation from "@/components/CardNavigation";
import { CardNavigationProps } from "@/components/CardNavigation";
import { getOpenGraphImage } from "@/lib/opengraph";
import { NextSeo } from "next-seo";
import { Atkinson_Hyperlegible } from "next/font/google";

const navigationCards: CardNavigationProps[] = [
  {
    href: "/blog",
    title: "Blog",
    // description: "You can read what I write, occasionally.",
    internal: true,
  },
  {
    href: "/my-journey",
    title: "Journey",
    // description: "Check my journey, in a timeline format!",
    internal: true,
  },
  // {
  //   href: "/projects",
  //   title: "Projects",
  //   description: "Making Sundays less depressive.",
  // },
  {
    href: "/contact",
    title: "Contact",
    // description: "Some useful links where I appear.",
    internal: true,
  },
];

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
});

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

      <div className="flex flex-col items-center justify-center md:h-full gap-10">
        <div className={`text-center xl:tracking-tight ${atkinson.className}`}>
          <h1 className="text-3xl xl:text-6xl font-bold mb-2">Hey there!</h1>
          <h2 className="text-2xl xl:text-5xl font-semibold">
            I help people by creating quality software.
          </h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-8 max-w-md w-full">
          {navigationCards.map((nc, i) => (
            <CardNavigation
              key={i}
              title={nc.title}
              // description={nc.description}
              internal
              href={nc.href}
            />
          ))}
        </div>
      </div>
    </>
  );
}
