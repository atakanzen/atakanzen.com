import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import React from "react";
import Link from "next/link";

// const components = {
//   Link,
// };

const PostPage = () => {
  return (
    <div className="flex flex-col items-start p-4 divide-y-2 gap-4 xl:max-w-4xl mx-auto"></div>
  );
};

export default PostPage;
