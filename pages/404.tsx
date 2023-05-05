import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center  gap-8">
      <h3 className="text-5xl font-bold ">
        Error{" "}
        <span className="underline decoration-wavy underline-offset-8 decoration-orange-400">
          404
        </span>{" "}
        🫣
      </h3>
      <div className="text-center">
        <p className="text-xl">
          Seems like you tried to reach a page that does not exist!
        </p>
        <p className="dark:text-slate-400 ">
          If you think something is wrong,{" "}
          <a
            className="text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200 underline"
            href="mailto:atakanzzengin@gmail.com"
          >
            hit me up!
          </a>
        </p>
      </div>
      <Link href="/" className="p-4 hover:bg-cyan-50 rounded">
        Back to homepage
      </Link>
    </div>
  );
};

export default Custom404;
