import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="h-screen fixed top-0 bottom-0 right-0 bg-gray-800 lg:w-80 flex flex-col items-center justify-end pb-9">
      <Image
        src="/images/profile.png"
        alt="Atakan Zengin's Profile Logo"
        width={200}
        height={200}
        priority
      />
      <h1 className="text-3xl font-bold">Atakan Zengin</h1>
      <h2 className="text-xl">Software Engineer</h2>
      <div className="w-full flex items-center justify-center gap-2">
        <a
          className="text-[#5cdff0] underline"
          href="https://github.com/atakanzen"
          target="_blank"
        >
          Github
        </a>
        <a
          className="text-[#5cdff0] underline"
          href="https://linkedin.com/in/atakanzen"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </aside>
  );
}
