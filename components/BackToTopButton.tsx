import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

type Props = { isVisible: boolean };

function BackToTopButton({ isVisible }: Props) {
  // implement scroll logic here

  return (
    <Link href="#hero">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-highlight h-12 w-12 rounded-full flex items-center justify-center opacity-100 hover:opacity-90"
            initial={{ scale: 0 }}
            exit={{
              scale: 0,
            }}
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowDown className="fill-main-bg" />
          </motion.button>
        )}
      </AnimatePresence>
    </Link>
  );
}

export default BackToTopButton;
