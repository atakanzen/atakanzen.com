import dynamic from "next/dynamic";
import { Atkinson_Hyperlegible } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`absolute xl:hidden w-screen h-screen backdrop-blur-xl z-10 ${
          menuOpen ? "" : "-translate-y-full"
        } transition-all duration-500 flex flex-col items-center justify-center gap-4`}
      >
        <Link
          href={"/"}
          className="text-xl font-bold  dark:decoration-yellow-500 underline"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Home
        </Link>
        <Link
          href={"/blog"}
          className="text-xl font-bold  dark:decoration-yellow-500 underline"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Blog
        </Link>
        <Link
          href={"/contact"}
          className="text-xl font-bold  dark:decoration-yellow-500 underline"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Contact
        </Link>
        <Link
          href={"/my-journey"}
          className="text-xl font-bold dark:decoration-yellow-500 underline"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Journey
        </Link>
      </div>
      <aside className="relative p-4 xl:h-screen z-50">
        <div className="flex flex-row-reverse xl:flex-col h-full items-center justify-between xl:justify-between gap-2">
          {/* For laptops and bigger sizes */}
          <div className="hidden xl:flex xs:flex-col gap-2 items-center">
            <Link
              href={"/"}
              className="xs:text-xl font-semibold  dark:decoration-yellow-500 underline"
            >
              Home
            </Link>
            <Link
              href={"/blog"}
              className="xs:text-xl font-semibold  dark:decoration-yellow-500 underline"
            >
              Blog
            </Link>
            <Link
              href={"/contact"}
              className="xs:text-xl font-semibold  dark:decoration-yellow-500 underline"
            >
              Contact
            </Link>
            <Link
              href={"/my-journey"}
              className="xs:text-xl font-semibold dark:decoration-yellow-500 underline"
            >
              Journey
            </Link>
          </div>

          {/* For mobile */}
          <div className="xl:hidden">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col items-center justify-center gap-2 p-4"
            >
              <div
                className={`w-8 rounded bg-blue-500 dark:bg-yellow-500 h-0.5 transition-all ease-in-out duration-500 ${
                  menuOpen && "rotate-45 translate-y-2"
                }`}
              ></div>
              <div
                className={`w-8 rounded bg-blue-500 dark:bg-yellow-500 h-0.5 transition-all ease-in-out duration-500 ${
                  menuOpen && "opacity-0"
                }`}
              ></div>
              <div
                className={`w-8 rounded bg-blue-500 dark:bg-yellow-500 h-0.5 transition-all ease-in-out duration-500 ${
                  menuOpen && "-rotate-45 -translate-y-3"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex xl:flex-col xs:gap-2">
            {/* Dynamic sized profile photo based on breakpoint */}
            <div>
              {/* For laptops and bigger sizes */}
              <div className="hidden xl:block">
                <Image
                  src="/images/profile.png"
                  alt="Atakan Zengin's Profile Logo"
                  width={200}
                  height={200}
                  priority
                />
              </div>
              {/* For screens smaller than laptops */}
              <div className="relative overflow-hidden xs:p-2 w-14 h-14 xs:w-20 xs:h-20  border-double border-4  d rounded-full xl:hidden">
                <Image
                  src="/images/profile_close.png"
                  alt="Atakan Zengin's Profile Logo"
                  className="object-contain saturate-100 inline"
                  fill
                  sizes="30vw"
                  priority
                />
              </div>
            </div>
            {/* Title */}
            <div
              className={`flex flex-col items-center justify-center xs:divide-x-2 text-center ml-4 xl:ml-0 xl:flex-col xl:mb-4 xl:divide-x-0 ${atkinson.className}`}
            >
              <Link
                className="text-base xs:text-xl text-blue-500 dark:text-yellow-500 xl:text-2xl 2xl:text-3xl font-bold pl-1"
                href="/"
              >
                Atakan Zengin
              </Link>

              <p className="text-base xl:text-l 2xl:text-xl dark:text-neutral-300 pl-2">
                Software Engineer
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
