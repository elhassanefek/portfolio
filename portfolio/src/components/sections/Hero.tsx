// src/components/sections/Hero.tsx

import React from "react";
import styled from "styled-components";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { fadeInUp, fadeIn } from "../../styles/animations";

export const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <TextContent>
            <Greeting>Hi there, I'm</Greeting>
            <Title>Your Name</Title>
            <Subtitle>Creative Developer & Designer</Subtitle>
            <Description>
              I craft beautiful digital experiences that combine elegant design
              with powerful functionality. Let's build something amazing
              together.
            </Description>
            <ButtonGroup>
              <Button size="lg" onClick={() => scrollToSection("#projects")}>
                View My Work
              </Button>
              <Button size="lg" onClick={() => scrollToSection("#contact")}>
                Get In Touch
              </Button>
            </ButtonGroup>
          </TextContent>

          <IllustrationWrapper>
            <DottedPathSVG viewBox="0 0 400 300">
              <path
                d="M 50 150 Q 100 50, 200 150 T 350 150"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </DottedPathSVG>
          </IllustrationWrapper>
        </HeroContent>
      </Container>

      <ScrollIndicator onClick={() => scrollToSection("#about")}>
        <span>Scroll</span>
        <ArrowDown>↓</ArrowDown>
      </ScrollIndicator>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing["2xl"]};
    text-align: center;
  }
`;

const TextContent = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Greeting = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["7xl"]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

const IllustrationWrapper = styled.div`
  position: relative;
  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const DottedPathSVG = styled.svg`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.3;
`;

const ScrollIndicator = styled.button`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing["2xl"]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  background: none;
  border: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const ArrowDown = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
`;
