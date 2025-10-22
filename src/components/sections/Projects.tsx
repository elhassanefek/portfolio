// src/components/sections/Projects.tsx

import React from "react";
import styled from "styled-components";
import { Button } from "../common/Button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  ProjectCarouselPrevious,
  ProjectCarouselNext,
} from "../ui/Carousel";
import { projects } from "../../data/projects";
import { fadeInUp } from "../../styles/animations";

// Shared text styles for consistent text wrapping
const textStyles = `
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: none;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  word-break: break-word;
`;

export const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <DecorativeShapes>
        <Shape1 />
        <Shape2 />
        <Shape3 />
      </DecorativeShapes>

      <SectionHeader>
        <SectionTitle>MY PROJECTS</SectionTitle>
        <TitleUnderline />
        <SectionDescription>
          Explore my latest work and side projects
        </SectionDescription>
      </SectionHeader>

      <CarouselWrapper>
        <StyledCarousel>
          <ProjectCarouselPrevious />
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={project.id}>
                <ProjectCard $color={project.color}>
                  <CardContent>
                    <ProjectHeader>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectSubtitle>Web Application</ProjectSubtitle>
                    </ProjectHeader>
                    <ArtworkWrapper>
                      {project.image ? (
                        <img src={project.image} alt={project.title} />
                      ) : (
                        getProjectArtwork(index)
                      )}
                    </ArtworkWrapper>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>

                    <TagsContainer>
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </TagsContainer>

                    <ProjectActions>
                      <Link to={`/projects/${project.id}`}>
                        <Button size="md">View Details</Button>
                      </Link>
                      {project.github && (
                        <Button 
                          variant="outline" 
                          size="md" 
                          as="a" 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </Button>
                      )}
                    </ProjectActions>
                  </CardContent>
                </ProjectCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <ProjectCarouselNext />
        </StyledCarousel>
      </CarouselWrapper>

      <GridWrapper>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} $color={project.color}>
            <CardContent>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>Web Application</ProjectSubtitle>
              </ProjectHeader>
              <ArtworkWrapper>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  getProjectArtwork(index)
                )}
              </ArtworkWrapper>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TagsContainer>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsContainer>
              <ProjectActions>
                <Link to={`/projects/${project.id}`}>
                  <Button size="md">View Details</Button>
                </Link>
                {project.github && (
                  <Button 
                    variant="outline" 
                    size="md"
                    as="a" 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                )}
              </ProjectActions>
            </CardContent>
          </ProjectCard>
        ))}
      </GridWrapper>
    </ProjectsSection>
  );
};

const getProjectArtwork = (index: number) => {
  const scene1 = (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="360" height="180" stroke="currentColor" strokeWidth="4" fill="none"/>
      <rect x="40" y="40" width="120" height="80" stroke="currentColor" strokeWidth="4" fill="none"/>
      <rect x="180" y="40" width="160" height="120" stroke="currentColor" strokeWidth="4" fill="none"/>
      <line x1="40" y1="65" x2="160" y2="65" stroke="currentColor" strokeWidth="3"/>
      <line x1="40" y1="85" x2="130" y2="85" stroke="currentColor" strokeWidth="3"/>
      <circle cx="60" cy="140" r="18" stroke="currentColor" strokeWidth="4" fill="none"/>
      <circle cx="95" cy="140" r="18" stroke="currentColor" strokeWidth="4" fill="none"/>
    </svg>
  );

  const scene2 = (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="340" height="160" stroke="currentColor" strokeWidth="4" fill="none"/>
      <polyline points="40,150 100,110 160,130 220,90 280,100 340,70" stroke="currentColor" strokeWidth="4" fill="none"/>
      <circle cx="320" cy="55" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
    </svg>
  );

  const scene3 = (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="50" width="320" height="120" stroke="currentColor" strokeWidth="4" fill="none"/>
      <line x1="60" y1="80" x2="320" y2="80" stroke="currentColor" strokeWidth="3"/>
      <rect x="60" y="95" width="100" height="20" stroke="currentColor" strokeWidth="3" fill="none"/>
      <rect x="60" y="120" width="180" height="20" stroke="currentColor" strokeWidth="3" fill="none"/>
    </svg>
  );

  const scenes = [scene1, scene2, scene3];
  return scenes[index % scenes.length];
};

const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.spacing["5xl"]} 0;
  background-color: #FFFACD;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  }
`;

const DecorativeShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const Shape1 = styled.div`
  position: absolute;
  top: 15%;
  left: 5%;
  width: 100px;
  height: 100px;
  background: #B4D4FF;
  border: 5px solid #000;
  transform: rotate(45deg);
  box-shadow: 8px 8px 0 #000;
  animation: float 7s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: rotate(45deg) translateY(0px); }
    50% { transform: rotate(45deg) translateY(-20px); }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60px;
    height: 60px;
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const Shape2 = styled.div`
  position: absolute;
  bottom: 20%;
  right: 8%;
  width: 90px;
  height: 90px;
  background: #FFB5E8;
  border: 5px solid #000;
  border-radius: 50%;
  box-shadow: 7px 7px 0 #000;
  animation: float 6s ease-in-out infinite 1s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 55px;
    height: 55px;
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const Shape3 = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 87px solid #B4E7CE;
  filter: drop-shadow(7px 7px 0 #000);
  animation: float 8s ease-in-out infinite 2s;
  
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: -50px;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 87px solid #000;
    z-index: -1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 52px solid #B4E7CE;
    
    &::after {
      left: -30px;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 52px solid #000;
    }
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  }
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: inline-block;
  background: #B4D4FF;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border: 5px solid #000;
  box-shadow: 8px 8px 0 #000;
  border-radius: 0;
  animation: ${fadeInUp} 0.8s ease-out;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    border-width: 4px;
    box-shadow: 6px 6px 0 #000;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.lg}`};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const TitleUnderline = styled.div`
  width: 120px;
  height: 6px;
  background: #000;
  margin: ${({ theme }) => theme.spacing.md} auto 0;
  border-radius: 0;
`;

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #000;
  font-weight: 600;
  ${textStyles}
  text-align: center;
  max-width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing["2xl"]} ${({ theme }) => theme.spacing["4xl"]};
  overflow: visible;
  --carousel-arrow-extra-left: 12px;
  --carousel-arrow-extra-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const StyledCarousel = styled(Carousel)`
  position: relative;
  width: 100%;
 

  --carousel-item-basis: 32;
  --carousel-gap: 72px;
  --carousel-arrows-top: 58%;
  --carousel-arrow-size: 52px;
  --carousel-arrow-extra-left: 16px;
  --carousel-arrow-extra-right: 16px;
  --carousel-edge-offset: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    --carousel-item-basis: 46;
    --carousel-gap: 56px;
    --carousel-arrows-top: 56%;
    --carousel-arrow-size: 50px;
    --carousel-edge-offset: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    --carousel-item-basis: 85;
    --carousel-gap: 32px;
    --carousel-arrows-top: 54%;
    --carousel-arrow-size: 46px;
    --carousel-edge-offset: 24px;
  }
`;

const GridWrapper = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing["2xl"]};
    max-width: 1200px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const ProjectCard = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color || "#FFF"};
  border: 5px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  min-height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 0 #000;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 13px 13px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 450px;
    padding: ${({ theme }) => theme.spacing.xl};
    border-width: 4px;
    box-shadow: 7px 7px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ProjectHeader = styled.div``;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: 900;
  color: #000;
  ${textStyles}
  line-height: 1.2;
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  letter-spacing: -0.01em;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

const ProjectSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  text-transform: uppercase;
  ${textStyles}
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  color: #555;
  color: #000;
  opacity: 0.6;
  letter-spacing: 0.5px;
`;

const ArtworkWrapper = styled.div`
  height: 220px;
  border: 4px solid #000;
  border-radius: 0;
  background: #FFF;
  box-shadow: 6px 6px 0 #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #000;
  }

  svg {
    width: 85%;
    height: 85%;
    color: #000;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 180px;
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: #000;
  ${textStyles}
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  max-width: 100%;
  font-weight: 500;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Tag = styled.span`
  background-color: #FFF;
  color: #000;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border: 3px solid #000;
  border-radius: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 3px 3px 0 #000;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 #000;
  }
`;

const ProjectActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
`;