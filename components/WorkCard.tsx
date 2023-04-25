import React from "react";
import { motion } from "framer-motion";

type Props = {};

function WorkCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-main/5 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      Work
    </article>
  );
}

export default WorkCard;