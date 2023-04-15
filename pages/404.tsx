import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <h3 className="text-5xl font-bold ">
        Error{" "}
        <span className="underline decoration-wavy underline-offset-8 decoration-orange-600">
          404
        </span>{" "}
        🫣
      </h3>
      <div className="text-center">
        <p className="text-xl">
          Seems like you try to reached a page that does not exist!
        </p>
        <p className="text-slate-400 ">
          If you think something is wrong,{" "}
          <a
            className="text-cyan-300 hover:text-cyan-200 underline"
            href="mailto:atakanzzengin@gmail.com"
          >
            hit me up!
          </a>
        </p>
      </div>
      <Link href="/" className="p-4 bg-miogray-100 hover:bg-miogray-50 rounded">
        Back to homepage
      </Link>
    </div>
  );
};

export default Custom404;
