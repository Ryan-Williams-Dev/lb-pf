import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAboutPage, urlFor } from "@/sanity/sanity-utils";
import { AboutPage } from "@/types/AboutPage";
import Loading from "./Loading";

type Props = {};

function About({}: Props) {
  const [aboutPageData, setAboutPageData] = useState<AboutPage | null>(null);

  useEffect(() => {
    async function getAboutPageData() {
      const data = await getAboutPage();
      setAboutPageData({ ...data });
    }

    getAboutPageData();
  }, []);

  if (!aboutPageData) {
    return (
      <div className="h-screen w-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <Loading />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-standard-text text-2xl">
        About
      </h3>
      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mt-20 md:mt-0"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlFor(aboutPageData.image).url()}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          {aboutPageData.headerPreLine}{" "}
          <span className="underline decoration-highlight/50">
            {aboutPageData.headerUnderlined}
          </span>{" "}
          {aboutPageData.headerPostLine}
        </h4>
        <p className="text-base">{aboutPageData.bio}</p>
      </div>
    </motion.div>
  );
}

export default About;
