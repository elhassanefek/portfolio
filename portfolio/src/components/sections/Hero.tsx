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
      <DecorativeShapes>
        <Shape1 />
        <Shape2 />
        <Shape3 />
        <Shape4 />
      </DecorativeShapes>
      
      <Container>
        <HeroContent>
         <TextContent>
  <Greeting>👋 Hey there, I'm</Greeting>
  <Title>FEKAIRI ELHASSANE</Title>
  <Subtitle>Web Developer & AI Enthusiast</Subtitle>
  <Description>
    I build powerful backend systems and explore the world of artificial intelligence to
    create smarter, more connected digital products. With a passion for clean architecture,
    scalable APIs, and a creative touch on the frontend, I love turning complex ideas into
    seamless experiences.
  </Description>
  <ButtonGroup>
    <PrimaryButton size="lg" onClick={() => scrollToSection("#projects")}>
      Explore My Projects
    </PrimaryButton>
    <SecondaryButton size="lg" onClick={() => scrollToSection("#contact")}>
      Let's Connect
    </SecondaryButton>
  </ButtonGroup>
</TextContent>


          <IllustrationWrapper>
            <IllustrationCard>
              <CodeBlock>
                <CodeLine $delay={0}>{'<div className="creative">'}</CodeLine>
                <CodeLine $delay={0.1}>{'  <AI Enthusiast />'}</CodeLine>
                <CodeLine $delay={0.2}>{'  <Web Developer />'}</CodeLine>
                <CodeLine $delay={0.3}>{'</div>'}</CodeLine>
              </CodeBlock>
            </IllustrationCard>
            <FloatingElement $index={0}>💻</FloatingElement>
            <FloatingElement $index={1}>⚡</FloatingElement>
           
          </IllustrationWrapper>
        </HeroContent>
      </Container>
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
  padding-top: calc(${({ theme }) => theme.spacing["4xl"]} + 80px);
  overflow: hidden;
  background: #F5F5F5;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["3xl"]} 0;
    padding-top: calc(${({ theme }) => theme.spacing["3xl"]} + 80px);
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
  right: 10%;
  width: 120px;
  height: 120px;
  background: #AEC6FF;
  border: 5px solid #000;
  border-radius: 50%;
  box-shadow: 8px 8px 0 #000;
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const Shape2 = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  width: 100px;
  height: 100px;
  background: #FFB5E8;
  border: 5px solid #000;
  transform: rotate(25deg);
  box-shadow: 8px 8px 0 #000;
  animation: float 7s ease-in-out infinite 1s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60px;
    height: 60px;
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const Shape3 = styled.div`
  position: absolute;
  bottom: 20%;
  right: 15%;
  width: 0;
  height: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 104px solid #B4E7CE;
  filter: drop-shadow(8px 8px 0 #000);
  animation: float 8s ease-in-out infinite 2s;
  
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: -60px;
    width: 0;
    height: 0;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 104px solid #000;
    z-index: -1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 61px solid #B4E7CE;
    
    &::after {
      left: -35px;
      border-left: 35px solid transparent;
      border-right: 35px solid transparent;
      border-bottom: 61px solid #000;
    }
  }
`;

const Shape4 = styled.div`
  position: absolute;
  top: 70%;
  left: 12%;
  width: 80px;
  height: 80px;
  background: #FFDEB4;
  border: 5px solid #000;
  border-radius: 50%;
  box-shadow: 6px 6px 0 #000;
  animation: float 5.5s ease-in-out infinite 1.5s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50px;
    height: 50px;
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  align-items: center;
  background: #fff;
  border: 5px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing["3xl"]};
  box-shadow: 12px 12px 0 #000;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 15px 15px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing["2xl"]};
    text-align: center;
    padding: ${({ theme }) => theme.spacing["2xl"]};
    border-width: 4px;
    box-shadow: 8px 8px 0 #000;
    
    &:hover {
      box-shadow: 10px 10px 0 #000;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xl};
    border-width: 3px;
    box-shadow: 6px 6px 0 #000;
  }
`;

const TextContent = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Greeting = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #000;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 800;
  display: inline-block;
  background: #FFFACD;
  border: 3px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  box-shadow: 4px 4px 0 #000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #000;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["7xl"]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.1;
  font-family: ${({ theme }) => theme.fonts.headingSerif};
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: #000;
  text-shadow: 4px 4px 0 #5dd0c0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
    text-shadow: 3px 3px 0 #5dd0c0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    text-shadow: 2px 2px 0 #5dd0c0;
  }
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: #000;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.fonts.body};
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: #000;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  font-weight: 500;

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

const PrimaryButton = styled(Button)`
  background-color: #FF6B9D;
  color: #000;
  border: 4px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-weight: 900;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 5px 5px 0 #000;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.base};

  &:hover:not(:disabled) {
    background-color: #FFB5E8;
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #000;
  }

  &:active:not(:disabled) {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #B4E7CE;
  color: #000;
  border: 4px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-weight: 900;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 5px 5px 0 #000;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.base};

  &:hover:not(:disabled) {
    background-color: #AEC6FF;
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #000;
  }

  &:active:not(:disabled) {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const IllustrationWrapper = styled.div`
  position: relative;
  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const IllustrationCard = styled.div`
  background: #1a1a1a;
  border: 5px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 8px 8px 0 #000;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 12px;
    width: 12px;
    height: 12px;
    background: #FF6B9D;
    border: 2px solid #000;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 12px;
    left: 32px;
    width: 12px;
    height: 12px;
    background: #FFFACD;
    border: 2px solid #000;
    border-radius: 50%;
  }
`;

const CodeBlock = styled.div`
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #B4E7CE;
  line-height: 1.8;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const CodeLine = styled.div<{ $delay: number }>`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out ${({ $delay }) => $delay}s forwards;
`;

const FloatingElement = styled.div<{ $index: number }>`
  position: absolute;
  font-size: 3rem;
  animation: bounce 2s ease-in-out infinite;
  animation-delay: ${({ $index }) => $index * 0.3}s;
  
  ${({ $index }) => {
    if ($index === 0) return 'top: -20px; right: -20px;';
    if ($index === 1) return 'bottom: -20px; left: -20px;';
    return 'top: 50%; right: -30px;';
  }}
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(10deg); }
  }
`;




