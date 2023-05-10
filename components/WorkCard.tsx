import React from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
};

function WorkCard({ id }: Props) {
  const handleClickScroll = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <article
      onClick={handleClickScroll}
      id={id}
      className={`
        flex 
        flex-col 
        rounded-lg 
        items-center 
        space-y-7 
        flex-shrink-0
        w-[300px]
        sm:w-[500px] 
        md:w-[600px] 
        xl:w-[900px]
        h-[500px]
        sm:h-[500px] 
        md:h-[600px] 
        xl:h-[900px]
        snap-center 
        bg-main/20 
        p-10 
        hover:opacity-100 
        opacity-40 
        cursor-pointer 
        transition-opacity 
        duration-200 
        overflow-y-scroll
        overflow-x-hidden
        scroll-smooth
        scrollbar-thin
        sm:scrollbar
        scrollbar-track-main/20
        scrollbar-thumb-highlight/80
      `}
    >
      <h2>2D Work</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
        doloribus illum, debitis eaque deleniti nobis beatae autem maxime ex
        exercitationem fugiat fuga est sapiente quam quod. Asperiores maxime
        quod perferendis?
      </p>
      <div className="">
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
        <img src="https://cdnb.artstation.com/p/assets/images/images/038/682/967/large/larissa-baroboskin-shooter-girl.jpg?1623770894" />
      </div>
    </article>
  );
}

export default WorkCard;
