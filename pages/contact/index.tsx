import CardNavigation, {
  CardNavigationProps,
} from "@/components/CardNavigation";
import Link from "next/link";
import React from "react";

const navigationCards: CardNavigationProps[] = [
  {
    href: "mailto:atakanzzengin@gmail.com",
    title: "E-mail",
    description: "Ask me anything you want.",
    internal: false,
  },
  {
    href: "https://linkedin.com/in/atakanzen",
    title: "LinkedIn",
    description: "You can learn more about my career and interests here.",
    internal: false,
  },
  {
    href: "https://github.com/atakanzen",
    title: "GitHub",
    description: "Everything about me and software.",
    internal: false,
  },
  {
    href: "https://twitter.com/atakanzen_",
    title: "Twitter",
    description: "Sometimes I share my thoughts here too.",
    internal: false,
  },
];

const ContactIndex = () => {
  return (
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
  );
};

export default ContactIndex;
