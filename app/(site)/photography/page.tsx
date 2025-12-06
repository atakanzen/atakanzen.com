import PadarDeers from "@/public//photographs/deers-in-padar.webp";
import Moon from "@/public//photographs/moon.webp";
import PadarIsland from "@/public//photographs/padar-island.webp";
import PaperLantern from "@/public//photographs/paper-lantern.webp";
import RiderOnSea from "@/public//photographs/rider-on-sea.webp";
import SametNangshe from "@/public//photographs/samet-nangshe.webp";
import GiliAir from "@/public/photographs/gili-air.webp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Image from "next/image";

const Photos: { src: StaticImport; alt: string }[] = [
  {
    src: PadarDeers,
    alt: "Deers in Padar Island.",
  },
  {
    src: GiliAir,
    alt: "Gili Air.",
  },
  {
    src: Moon,
    alt: "Moon.",
  },
  {
    src: PadarIsland,
    alt: "Padar Island.",
  },
  {
    src: PaperLantern,
    alt: "Paper Lantern.",
  },
  {
    src: RiderOnSea,
    alt: "Rider on Sea.",
  },
  {
    src: SametNangshe,
    alt: "Samet Nangshe.",
  },
];

export default function Photography() {
  return (
    <div className="max-w-4xl w-full mx-auto px-12 py-8">
      <h1 className="text-3xl font-bold mb-8">Photography</h1>
      <div className="grid grid-cols-1 gap-6">
        {Photos.map((p, i) => (
          <Image
            key={i}
            className="rounded-sm"
            src={p.src}
            alt={p.alt}
            quality={100}
          />
        ))}
      </div>
    </div>
  );
}
