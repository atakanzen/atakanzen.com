import React from "react";
import ProfileImage from "../components/ProfileImage";
import { useRouter } from "next/router";

const OG = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div className="flex flex-col items-center pt-28">
      <ProfileImage size={200}></ProfileImage>
      <h1 className="text-7xl text-center font-extrabold text-gray-800 dark:text-chromeYellow robotoSlab">
        {title}
      </h1>
      <h2 className="text-4xl font-medium text-gray-400 dark:text-gray-200 mt-8">
        atakanzen.com
      </h2>
    </div>
  );
};

export default OG;
