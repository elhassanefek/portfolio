import React from "react";

import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";
import { ProjectStories } from "../components/sections/ProjectStories";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";
import { Header } from "../components/layout/Header";
import styled from "styled-components";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Hero />
        
        <About />
      
        <Projects />
       
        <Skills />
      
        <ProjectStories />
      

        <Contact />
      </StyledMain>
      <Footer />
    </>
  );
};

const StyledMain = styled.main`
 
  
  & > section {
    margin-top: 2.5rem;
    padding-top: 6rem;
    padding-bottom: 0;
  }
  
`