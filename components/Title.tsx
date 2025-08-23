import { ibmPlexMono } from "@/fonts";
import GlitchText from "./GlitchText";

const Title = () => {
  return (
    <div
      className={`${ibmPlexMono.className} flex flex-col space-y-2 xl:space-y-4 items-center select-none`}
    >
      <h1 className={`text-3xl md:text-8xl tracking-tighter`}>Atakan Zengin</h1>
      <GlitchText />
    </div>
  );
};

export default Title;
