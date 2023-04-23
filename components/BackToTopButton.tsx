import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

type Props = {};

function BackToTopButton({}: Props) {
  return (
    <Link href="#hero">
      <motion.div
        className="fixed bottom-10 right-10 bg-main h-12 w-12 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 hover:-scale-150"
        initial={{ scale: 0 }}
        animate={{
          rotate: 180,
          scale: 1,
          borderRadius: ["20%", "20%", "100%"],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <FaArrowDown className="fill-main-bg" />
      </motion.div>
    </Link>
  );
}

export default BackToTopButton;
