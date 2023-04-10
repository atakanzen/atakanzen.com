import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center xl:items-start gap-10">
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
        {/* TODO: Hover can apply underline instead of an animation, considering the click times */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          <Link
            href="/posts"
            className="group p-6 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl"
          >
            <h5 className="text-l font-semibold">
              <span className="group-hover:animate-pulse text-cyan-300 font-bold text-xl">
                MY
              </span>{" "}
              Posts
            </h5>
            <p>You can read what I write, occasionally.</p>
          </Link>
          <Link
            href="/my-journey"
            className="group p-6 dark:bg-gray-800 dark:hover:bg-gray-700  rounded-xl"
          >
            <h5 className="text-l font-semibold">
              <span className="group-hover:animate-pulse text-cyan-300 font-bold text-xl">
                MY
              </span>{" "}
              Journey
            </h5>
            <p>Check my journey, in a timeline format!</p>
          </Link>
          <Link
            href="/projects"
            className="group p-6 dark:bg-gray-800 dark:hover:bg-gray-700  rounded-xl"
          >
            <h5 className="text-l font-semibold">
              <span className="group-hover:animate-pulse text-cyan-300 font-bold text-xl">
                MY
              </span>{" "}
              Projects
            </h5>
            <p>These are the things that keep me sane.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
