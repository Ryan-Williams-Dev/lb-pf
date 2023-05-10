import React from "react";
import { motion } from "framer-motion";

type Props = {};

function WorkCard({}: Props) {
  return (
    <article
      className={`
        flex 
        flex-col 
        rounded-lg 
        items-center 
        space-y-7 
        flex-shrink-0 
        w-[500px] 
        md:w-[600px] 
        xl:w-[900px] 
        snap-center 
        bg-main/20 
        p-10 
        hover:opacity-100 
        opacity-40 
        cursor-pointer 
        transition-opacity 
        duration-200 
        overflow-hidden
      `}
    >
      <h2>2D Work</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
        doloribus illum, debitis eaque deleniti nobis beatae autem maxime ex
        exercitationem fugiat fuga est sapiente quam quod. Asperiores maxime
        quod perferendis?
      </p>
      <div>
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
      </div>
    </article>
  );
}

export default WorkCard;
