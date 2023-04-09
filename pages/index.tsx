import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-between gap-4">
      <Link
        href="/posts"
        className="underline p-5 bg-gray-800 text-center w-48 rounded-lg"
      >
        My Posts
      </Link>
      <Link
        href="#"
        className="underline p-5 bg-gray-800  text-center w-48 rounded-lg"
      >
        My Journey
      </Link>
      <Link
        href="#"
        className="underline p-5 bg-gray-800 text-center w-48 rounded-lg"
      >
        My Projects
      </Link>
    </div>
  );
}
