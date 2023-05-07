import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Opengraph = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <>
      <NextSeo nofollow noindex></NextSeo>
      <div
        data-testid="opengraph-img"
        className="flex flex-col h-full justify-center items-center gap-4"
      >
        <Image
          src="/images/profile.png"
          alt="Atakan Zengin's Profile Logo"
          width={200}
          height={200}
          priority
        ></Image>
        <h1 className="text-7xl text-center font-extrabold">{title}</h1>
        <h2 className="text-4xl">atakanzen.com</h2>
      </div>
    </>
  );
};

export default Opengraph;
