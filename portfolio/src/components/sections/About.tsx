// src/components/sections/About.tsx

import React from "react";
import styled from "styled-components";
import { Container } from "../common/Container";
import { fadeInUp, slideInLeft, slideInRight } from "../../styles/animations";

export const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <ContentWrapper>
          <ImageColumn>
            <ImagePlaceholder>
              {/* Add your image here */}
              <svg viewBox="0 0 400 500" fill="none">
                <rect
                  width="400"
                  height="500"
                  fill="currentColor"
                  opacity="0.1"
                  rx="20"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  fill="currentColor"
                  opacity="0.3"
                  fontSize="48"
                >
                  Your Photo
                </text>
              </svg>
            </ImagePlaceholder>
          </ImageColumn>

          <TextColumn>
            <SectionTitle>About Me</SectionTitle>
            <AboutText>
              I'm a passionate developer and designer with a love for creating
              beautiful, functional digital experiences. With several years of
              experience in web development, I specialize in building modern,
              responsive applications that users love.
            </AboutText>
            <AboutText>
              My journey in tech started with a curiosity about how websites
              work, and it has evolved into a career focused on crafting
              seamless user experiences and writing clean, maintainable code.
            </AboutText>
            <AboutText>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community.
            </AboutText>

            <StatsGrid>
              <StatItem>
                <StatNumber>50+</StatNumber>
                <StatLabel>Projects Completed</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>5+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>30+</StatNumber>
                <StatLabel>Happy Clients</StatLabel>
              </StatItem>
            </StatsGrid>
          </TextColumn>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing["5xl"]} 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing["2xl"]};
  }
`;

const ImageColumn = styled.div`
  animation: ${slideInLeft} 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius["2xl"]};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  color: ${({ theme }) => theme.colors.primary};

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const TextColumn = styled.div`
  animation: ${slideInRight} 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }
`;

const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.accent.blue};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  animation: ${fadeInUp} 0.8s ease-out;
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
