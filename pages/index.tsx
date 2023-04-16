import CardNavigation from "@/components/CardNavigation";
import { CardNavigationProps } from "@/components/CardNavigation";
import Link from "next/link";

const navigationCards: CardNavigationProps[] = [
  {
    href: "/posts",
    title: "Posts",
    description: "You can read what I write, occasionally.",
  },
  {
    href: "/my-journey",
    title: "Journey",
    description: "Check my journey, in a timeline format!",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Making Sundays less depressive.",
  },
  {
    href: "/contact",
    title: "Contacts",
    description: "Some useful links where I appear.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center  xl:items-start gap-10">
      <div>
        <div className="group">
          <h3 className="text-3xl xl:text-4xl font-semibold">
            Hey there{" "}
            <span className="group-hover:rotate-45 duration-500 inline-block">
              👋
            </span>
          </h3>
        </div>
        <h4 className="text-2xl xl:text-3xl underline decoration-cyan-300 underline-offset-8 decoration-solid">
          I help people by creating quality software.
        </h4>
      </div>
      <div className="flex flex-col gap-4">
        <p>Here are some useful pages, if you would like to know me better.</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {navigationCards.map((nc, i) => (
            <CardNavigation
              key={i}
              title={nc.title}
              description={nc.description}
              href={nc.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
