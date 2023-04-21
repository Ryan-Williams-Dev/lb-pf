import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
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
        src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/59856227_2321474997918942_2071388290782593024_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8Rje5pPND3YAX9OrxlM&_nc_ht=scontent-sea1-1.xx&oh=00_AfCLoaXanC3sjczccpt6RoE6z-fgxzlIGkYASWfhfzpnJQ&oe=6468DFA3"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-main/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          error qui obcaecati molestias sequi provident ullam sit deserunt eaque
          placeat voluptatibus at eum officia perspiciatis consequuntur nostrum
          soluta, laudantium tempora. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi animi impedit perferendis eveniet
          laboriosam? Unde, dignissimos! Velit harum quod veniam, impedit rerum
          asperiores similique vitae voluptas delectus officia, sequi at! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Asperiores minus
          ducimus officia ea commodi autem ipsum doloremque sunt molestiae et
          repudiandae quam, explicabo id eum possimus eligendi! Numquam, veniam
          officia.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
