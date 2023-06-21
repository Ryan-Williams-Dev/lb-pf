import { motion } from "framer-motion";
import React from "react";
import WorkCard from "./WorkCard";

type Props = {};

function Work({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-visable flex-col text-left md:flex-row px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-standard-text text-2xl">
        Work
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory px-[16vw] gap-[16vw] scrollbar-thin scrollbar-track-main/20 scrollbar-thumb-highlight/80">
        <WorkCard id="1" />
        <WorkCard id="2" />
        <WorkCard id="3" />
        <WorkCard id="4" />
        <WorkCard id="5" />
        <WorkCard id="6" />
      </div>
    </motion.div>
  );
}

export default Work;
