import { randomElement, randomInt } from "@/lib/util";
import React, { useCallback, useEffect, useState } from "react";

const GlitchText = () => {
  const title = "a generalist.";
  const junk = [
    "#",
    "@",
    "%",
    "*",
    "&",
    "<",
    ">",
    "_",
    "=",
    "+",
    "[",
    "]",
    "|",
    "-",
    "!",
    "?",
    "X",
  ];
  const [glitchText, setGlitchText] = useState("?????????????");

  const handleHoverOnGlitch = () => {
    const junkDuration = 5;
    const titleDuration = 6;

    const glitchInterval = setInterval(() => {
      for (let i = 0; i < title.length; i++) {
        for (let j = 0; j < junk.length; j++) {
          setTimeout(() => {
            setGlitchText((prevText) => {
              let chars = prevText.split("");
              chars[i] = junk[j];
              return chars.join("");
            });
          }, junkDuration * (i * junk.length + j));
        }

        setTimeout(() => {
          setGlitchText((prevText) => {
            let chars = prevText.split("");
            chars[i] = title[i];
            return chars.join("");
          });
        }, titleDuration * (i * junk.length + junk.length));
      }

      clearInterval(glitchInterval);
    }, 1 * title.length * junk.length);
  };

  return (
    <div
      onMouseOver={() => handleHoverOnGlitch()}
      onClick={() => handleHoverOnGlitch()}
      id="glitch-text"
      className={`lg:hover:text-blue-500 sm:text-2xl lg:hover:cursor-help duration-500 select-none`}
    >
      {glitchText}
    </div>
  );
};

export default GlitchText;
