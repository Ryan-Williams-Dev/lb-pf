import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import ContactMe from "@/components/ContactMe";
import BackToTopButton from "@/components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-main-bg text-standard-text h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
      <Head>
        <title>Larissa Baroboskin{`'`}s Portfolio</title>
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
      <section id="contactMe" className="snap-center">
        <ContactMe />
      </section>

      <BackToTopButton />
    </div>
  );
}
