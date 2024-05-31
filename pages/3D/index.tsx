import Navigation from "@/components/Navigation";
import Render from "@/components/Render";
import React from "react";

const renders = [
  {
    imageId: "1jRFbjn7edpH-4MZ09NuRBMWdvEvQL0tn",
    alt: "Donuts, Blender",
  },
  {
    imageId: "1np4V0XoWutV61poWa8gA8Wg78R_vmL9B",
    alt: "Søborg Chair, Blender",
  },
];

const ThreeD = () => {
  return (
    <>
      <Navigation />
      <div className="flex py-5 flex-col items-center justify-center gap-y-5  lg:gap-y-14">
        <h2 className="text-xl sm:text-3xl">Renders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {renders.map((re) => (
            <Render key={re.imageId} alt={re.alt} imageID={re.imageId} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ThreeD;
