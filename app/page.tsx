import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nabvar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nabvar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
