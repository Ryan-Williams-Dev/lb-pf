import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import ContactMe from "@/components/ContactMe";
import BackToTopButton from "@/components/BackToTopButton";
import { SetStateAction, useState } from "react";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event: {
    currentTarget: { scrollTop: SetStateAction<number> };
  }) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <div
      onScroll={handleScroll}
      className="bg-main-bg text-standard-text h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-thin sm:scrollbar scrollbar-track-main/20 scrollbar-thumb-highlight/80"
    >
      <Head>
        <title>{`Larissa Baroboskin's Portfolio`}</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Work */}
      <section id="work" className="snap-center">
        <Work />
      </section>

      {/* Contact Me */}
      <section id="contactMe" className="snap-start">
        <ContactMe />
      </section>

      {scrollTop > 100 ? (
        <BackToTopButton isVisible={true} />
      ) : (
        <BackToTopButton isVisible={false} />
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
