// src/pages/Home.tsx

import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
// import { Projects } from '../components/sections/Projects';
// import { Skills } from '../components/sections/Skills';
import { Contact } from "../components/sections/Contact";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Projects />
        <Skills /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};
