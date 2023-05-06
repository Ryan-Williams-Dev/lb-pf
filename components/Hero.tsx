import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { client, getLandingPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import { LandingPage } from "@/types/LandingPage";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Props = {};

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

function Hero({}: Props) {
  const [landingPageData, setLandingPageData] = useState<LandingPage | null>(
    null
  );

  const [text, count] = useTypewriter({
    words: landingPageData ? landingPageData.typewriter : [""],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    async function getLandingPageData() {
      const data = await getLandingPage();
      console.log(data);
      setLandingPageData({ ...data });
    }

    getLandingPageData();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      {landingPageData && (
        <Image
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          // src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/59856227_2321474997918942_2071388290782593024_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8Rje5pPND3YAX9OrxlM&_nc_ht=scontent-sea1-1.xx&oh=00_AfCLoaXanC3sjczccpt6RoE6z-fgxzlIGkYASWfhfzpnJQ&oe=6468DFA3"
          src={urlFor(landingPageData.image)
            .width(300)
            .height(300)
            .fit("max")
            .url()}
          alt="Profile pic"
          height={128}
          width={128}
        />
      )}

      <div className="z-20">
        <h2 className="text-xs uppercase text-standard-text pb-2 px-4 tracking-[15px] sm:text-sm">
          Genralist Designer
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
