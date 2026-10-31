// src/components/sections/Projects.tsx

import React from "react";
import styled from "styled-components";
import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import { archiveProjects, featuredProjects } from "../../data/projects";
import { FeaturedProjectCard } from "../projects/FeaturedProjectCard";
import { ArchiveProjectCard } from "../projects/ArchiveProjectCard";

export const Projects: React.FC = () => (
  <Section
    id="projects"
    index={3}
    label="Projects"
    title="Selected work"
    intro="Four projects I'd show first, each with a full write-up."
  >
    <FeaturedGrid>
      {featuredProjects.map((project, i) => (
        <li key={project.slug}>
          <Reveal delay={(i % 2) * 0.08}>
            <FeaturedProjectCard project={project} index={i} />
          </Reveal>
        </li>
      ))}
    </FeaturedGrid>
  </Section>
);

export const Archive: React.FC = () => (
  <Section
    id="archive"
    index={4}
    label="Archive"
    title="Earlier projects"
    intro="Smaller and older builds, each with its own page."
  >
    <ArchiveGrid>
      {archiveProjects.map((project, i) => (
        <li key={project.slug}>
          <Reveal delay={(i % 3) * 0.06}>
            <ArchiveProjectCard project={project} />
          </Reveal>
        </li>
      ))}
    </ArchiveGrid>
  </Section>
);

const FeaturedGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ArchiveGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  > li > div {
    height: 100%;
  }
`;

export default Projects;
