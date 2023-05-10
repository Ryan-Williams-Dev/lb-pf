import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Header } from "@/types/Header";
import { getHeader } from "@/sanity/sanity-utils";
import Loading from "./Loading";

type Props = {};

function Header({}: Props) {
  const [headerData, setHeaderData] = useState<Header | null>(null);

  useEffect(() => {
    async function getHeaderData() {
      const data = await getHeader();
      setHeaderData(data);
    }

    getHeaderData();
  }, []);

  if (!headerData) {
    return <></>;
  }

  const socials = headerData.socialLinks.map((urlString, i) => {
    return (
      <SocialIcon
        key={i}
        url={urlString}
        fgColor="#184147"
        bgColor="transparent"
        target="_blank"
      />
    );
  });

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-standard-text cursor-pointer"
      >
        <SocialIcon
          url="#contactMe"
          className="cursor-pointer"
          network="email"
          fgColor="#184147"
          bgColor="transparent"
        />
        <Link
          href="#contactMe"
          className="uppercase hidden md:inline-flex text-sm  text-standard-text"
        >
          Get In Touch
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
