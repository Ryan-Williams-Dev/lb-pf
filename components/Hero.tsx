import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Larissa Baroboskin",
      "I'm a Generalist Designer from Sao Paulo",
      "I love to be creative!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/59856227_2321474997918942_2071388290782593024_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8Rje5pPND3YAX9OrxlM&_nc_ht=scontent-sea1-1.xx&oh=00_AfCLoaXanC3sjczccpt6RoE6z-fgxzlIGkYASWfhfzpnJQ&oe=6468DFA3"
        alt="Profile pic"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] xs:text-xs">
          Genralist Designer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#000000" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#Experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#Skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#Work">
            <button className="heroButton">Work</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
