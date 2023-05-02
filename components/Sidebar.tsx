import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="backdrop-blur-xl bg-gradient-to-b from-cyan-100 dark:from-miogray-100 xl:from-miowhite-50 xl:bg-miowhite-50 xl:dark:bg-miogray-100 xl:dark:from-miogray-100 p-4 xl:h-screen">
      <div className="flex flex-row-reverse xl:flex-col h-full items-center justify-between xl:justify-end gap-2">
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
          <div className="relative overflow-hidden p-2 w-14 h-14 xs:w-20 xs:h-20  border-double border-4 border-miogray-100 dark:border-miowhite-50 rounded-full xl:hidden">
            <Image
              src="/images/profile_close.png"
              alt="Atakan Zengin's Profile Logo"
              className="object-contain saturate-100 inline"
              fill
              priority
            />
          </div>
        </div>
        {/* Title */}
        <div className="flex items-center justify-center divide-x-2 divide-miogray-100 dark:divide-miowhite-50 text-center xl:flex-col xl:mb-4 xl:divide-x-0">
          <Link href="/">
            {" "}
            <h1 className="text-base xs:text-xl  xl:text-2xl 2xl:text-3xl font-bold pr-2 xl:pr-0">
              Atakan Zengin
            </h1>
          </Link>

          <h2 className="text-sm xs:text-base xl:text-l 2xl:text-xl text-mioblack dark:text-slate-500 pl-2">
            Software Engineer
          </h2>
        </div>
      </div>
    </aside>
  );
}
