import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="top-0 right-0 left-0 xl:left-auto xl:absolute xl:h-screen xl:bottom-0 xl:right-0 bg-gray-800 xl:w-80 p-4 xl:pb-9">
      <div className="flex flex-row-reverse xl:flex-col h-full items-center justify-between xl:justify-end gap-2">
        {/* Dynamic sized profile photo based on breakpoint */}
        <div>
          <div className="hidden xl:block">
            <Image
              src="/images/profile.png"
              alt="Atakan Zengin's Profile Logo"
              width={200}
              height={200}
              priority
            />
          </div>
          {/* TODO: This should be a menu trigger for mobile screen */}
          <div className="relative overflow-hidden p-2 w-14 h-14 xs:w-20 xs:h-20  border-double border-4 border-slate-500 rounded-full xl:hidden">
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
        <div className="flex xl:flex-col items-center justify-center  divide-x-2 xl:divide-x-0">
          <h1 className="text-base xs:text-xl xl:text-3xl font-bold pr-2">
            Atakan Zengin
          </h1>
          <h2 className="text-sm xs:text-base xl:text-xl text-slate-500 pl-2">
            Software Engineer
          </h2>
        </div>
      </div>
    </aside>
  );
}
