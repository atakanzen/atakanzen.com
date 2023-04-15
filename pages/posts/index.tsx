import { NextPage } from "next";
import Link from "next/link";

const Posts = () => {
  return (
    <>
      {/* For now let's put it here, the Hyde theme doesn't really supports navigation items in the sidebar, and to be honest I don't want to put them there as well. */}
      <Link href="/" className="underline mb-5">
        Back to homepage
      </Link>
      <h3 className="text-4xl my-3">Posts 🖨️</h3>
      <ul className="flex flex-col items-start gap-4">
        <li className="max-w-4xl border-solid p-4 bg-miogray-100 rounded-lg rounded-l-none">
          <h4 className=" text-cyan-300 font-extrabold text-2xl">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            labore porro qui corrupti quo doloremque quae similique deserunt
            provident, blanditiis nisi? Fugiat, illo voluptatum. Quibusdam
            temporibus quo rem voluptates omnis.
          </p>
        </li>
      </ul>
    </>
  );
};

export default Posts;
