import React from "react";
import styled from "styled-components";
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
      
      <HeroContainer>
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
      </HeroContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
  }
  position: relative;
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  padding-top: calc(${({ theme }) => theme.spacing["4xl"]} + 80px);
  overflow: hidden;
  background: #F5F5F5;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
    padding-top: calc(${({ theme }) => theme.spacing["3xl"]} + 60px);
    overflow-x: hidden;
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

const HeroContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  box-sizing: border-box;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1200px;
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  overflow: hidden;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.2fr 1fr;
    gap: ${({ theme }) => theme.spacing["3xl"]};
  }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  overflow: hidden;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
  }
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
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  line-height: 1.2;
  font-family: ${({ theme }) => theme.fonts.headingSerif};
  word-break: break-word;
  hyphens: auto;
  max-width: 100%;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSizes["7xl"]};
  }
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
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.6;
  color: #000;
  margin: 0 auto ${({ theme }) => theme.spacing.lg} auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding: 0;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    max-width: 90%;
    text-align: left;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 600px;
  }
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.xl} auto 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.md};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;
  }
  
  & > * {
    flex: 1 1 100%;
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex: 1 1 calc(50% - ${({ theme }) => theme.spacing.md});
      min-width: 0;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      flex: 0 1 auto;
      min-width: 200px;
    }
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #FF6B9D;
  color: #000;
  border: 3px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-weight: 900;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.15s ease;
  box-shadow: 5px 5px 0 #000;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  width: 100%;
  max-width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: visible;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  line-height: 1.2;
  min-height: 44px;
  position: relative;
  z-index: 1;

  &:hover:not(:disabled) {
    background-color: #FFB5E8;
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #000;
  }

  &:active:not(:disabled) {
    transform: translate(1px, 1px);
    box-shadow: 3px 3px 0 #000;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
    min-height: 48px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    min-height: 40px;
    box-shadow: 3px 3px 0 #000;
    
    &:hover:not(:disabled) {
      box-shadow: 5px 5px 0 #000;
    }
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #B4E7CE;
  color: #000;
  border: 3px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-weight: 900;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.15s ease;
  box-shadow: 5px 5px 0 #000;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  width: 100%;
  max-width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: visible;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  line-height: 1.2;
  min-height: 44px;
  position: relative;
  z-index: 1;

  &:hover:not(:disabled) {
    background-color: #AEC6FF;
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #000;
  }

  &:active:not(:disabled) {
    transform: translate(1px, 1px);
    box-shadow: 3px 3px 0 #000;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
    min-height: 48px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    min-height: 40px;
    box-shadow: 3px 3px 0 #000;
    
    &:hover:not(:disabled) {
      box-shadow: 5px 5px 0 #000;
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




