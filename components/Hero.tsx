import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Larissa Baroboskin",
      "I'm a Generalist Designer",
      "I love to be creative!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#000000" />
      </h1>
    </div>
  );
}

export default Hero;
