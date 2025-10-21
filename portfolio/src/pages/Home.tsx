

import React from "react";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";
import { ProjectStories } from "../components/sections/ProjectStories";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";
import { Header } from "../components/layout/Header";


export const Home: React.FC = () => {
  return (
    <>
         <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ProjectStories />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
