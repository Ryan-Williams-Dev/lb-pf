import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { getLandingPage, urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";
import { LandingPage } from "@/types/LandingPage";
import Loading from "./Loading";

type Props = {};

function Hero({}: Props) {
  const [landingPageData, setLandingPageData] = useState<LandingPage | null>(
    null
  );

  const [text, count] = useTypewriter({
    words: landingPageData ? landingPageData.typewriter : ["Hi, I'm Larissa!"],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    async function getLandingPageData() {
      const data = await getLandingPage();
      setLandingPageData({ ...data });
    }

    getLandingPageData();
  }, []);

  if (!landingPageData) {
    return (
      <div className="h-screen w-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <Loading />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      {landingPageData && (
        <Image
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src={urlFor(landingPageData.image).width(300).height(300).url()}
          alt="Profile pic"
          height={128}
          width={128}
        />
      )}

      <div className="z-20">
        <h2 className="text-xs uppercase text-standard-text pb-2 px-4 tracking-[15px] sm:text-sm">
          {landingPageData?.jobTitle}
        </h2>
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#000000" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#work">
            <button className="heroButton">Work</button>
          </Link>
          <Link href="#contactMe">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
