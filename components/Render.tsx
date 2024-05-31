import React from "react";
import Image from "next/image";

type RenderProps = {
  imageID: string;
  alt: string;
};

const Render = ({ imageID, alt }: RenderProps) => {
  return (
    <div className="relative flex items-center justify-center lg:hover:scale-110 transition-transform duration-150 select-none">
      <Image
        quality={100}
        className="relative rounded-md  "
        src={`https://drive.google.com/thumbnail?id=${imageID}&sz=w5000`}
        alt={alt}
        width={393}
        height={898}
      />
      <span className="absolute bottom-0 opacity-80">{alt}</span>
    </div>
  );
};

export default Render;
