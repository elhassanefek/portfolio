import React from "react";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Archive, Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export const Home: React.FC = () => {
  useDocumentTitle();

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Archive />
      <Skills />
      <Contact />
    </>
  );
};
