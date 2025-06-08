
// app/page.tsx
'use client';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import { initGsap } from "@/lib/gsap";
import Qualifications from "@/components/Qualification";
// import { initLocomotive } from "@/lib/locomotive-scroll";

export default function Home() {
  useEffect(() => {
    initGsap();
    // initLocomotive();
  }, []);

  return (
    <main id="smooth-scroll pt-16 md:pt-16 ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Qualifications/>
      <Contact />
    </main>
  );
}
