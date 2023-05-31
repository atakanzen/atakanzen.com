import CardNavigation, {
  CardNavigationProps,
} from "@/components/CardNavigation";
import { getOpenGraphImage } from "@/lib/opengraph";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";

const navigationCards: CardNavigationProps[] = [
  {
    href: "mailto:atakanzzengin@gmail.com",
    title: "E-mail",
    description: "Ask me anything you want.",
    internal: false,
    fromHomePage: false,
  },
  {
    href: "https://linkedin.com/in/atakanzen",
    title: "LinkedIn",
    description: "You can learn more about my career and interests here.",
    internal: false,
    fromHomePage: false,
  },
  {
    href: "https://github.com/atakanzen",
    title: "GitHub",
    description: "Everything about me and software.",
    internal: false,
    fromHomePage: false,
  },
  {
    href: "https://twitter.com/atakanzen_",
    title: "Twitter",
    description: "Sometimes I share my thoughts here too.",
    internal: false,
    fromHomePage: false,
  },
];

const ContactIndex = () => {
  return (
    <>
      <NextSeo
        title="Atakan Zengin - Contact"
        titleTemplate="%s"
        description="You can find useful links to connect with me here."
        canonical="https://atakanzen.com/contact"
        twitter={{
          handle: "@atakanzen_",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          url: "https://atakanzen.com/contact",
          title: "Atakan Zengin - Contact",
          description: "You can find useful links to connect with me here..",
          images: [getOpenGraphImage("Atakan Zengin - Contact")],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Atakan Zengin, Software Engineer, Zengin, Atakan, Personal Blog, Technology Blog, Contact, Contact Me",
          },
        ]}
      ></NextSeo>

      <div className="flex flex-col items-start justify-center gap-4 h-full max-w-xl mx-auto">
        <div className="flex items-center justify-start gap-2 font-semibold">
          <Link href="/" className="underline underline-offset-2 font-semibold">
            Homepage
          </Link>
          <span>/</span>
          <h2>Contact</h2>
        </div>
        {navigationCards.map((c, i) => (
          <CardNavigation key={i} {...c} />
        ))}
      </div>
    </>
  );
};

export default ContactIndex;
