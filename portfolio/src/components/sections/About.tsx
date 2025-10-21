import React from "react";
import styled from "styled-components";
import { Container } from "../common/Container";
import { fadeInUp, slideInLeft, slideInRight } from "../../styles/animations";

export const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <DecorativeShapes>
        <Shape1 />
        <Shape2 />
        <Shape3 />
      </DecorativeShapes>
      
      <Container>
        <SectionHeader>
          <SectionTitle>ABOUT ME</SectionTitle>
          <TitleUnderline />
        </SectionHeader>
        
        <ContentWrapper>
          <ImageColumn>
            <ImageCard>
              <ImagePlaceholder>
                                  <img src="./illustrations/me.png" alt ='me'/>

              </ImagePlaceholder>
              <ImageBadge>
                <BadgeIcon>🧑‍💻</BadgeIcon>
                <BadgeText>Full-Stack Dev</BadgeText>
              </ImageBadge>
            </ImageCard>
          </ImageColumn>

          <TextColumn>
            <AboutCard>
              <AboutText>
                I'm <Highlight>Elhassane Fekairi</Highlight>, a passionate{" "}
                <Highlight>Full-Stack Developer</Highlight> and{" "}
                <Highlight>Machine Learning enthusiast</Highlight> who loves crafting
                clean, interactive, and scalable digital experiences. I combine a
                strong frontend focus, building smooth UI/UX with React,
                TypeScript, and styled-components, with solid backend knowledge
                using Node.js and Python.
              </AboutText>

              <AboutText>
                When I'm not coding, I'm probably experimenting with new tech,
                improving my MLOps workflow (Docker, MLflow, Airflow, GCP), or
                sharing what I learn through open-source. I aim to
                keep learning, keep shipping, and keep inspiring.
              </AboutText>
            </AboutCard>

            <StatsGrid>
              <StatItem $color="#5dd0c0">
                <StatNumber>6+</StatNumber>
                <StatLabel>Full Projects</StatLabel>
              </StatItem>
              <StatItem $color="#B4E7CE">
                <StatNumber>10+</StatNumber>
                <StatLabel>Tech Stacks</StatLabel>
              </StatItem>
              <StatItem $color="#AEC6FF">
                <StatNumber>∞</StatNumber>
                <StatLabel>Ideas in Progress</StatLabel>
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
  background-color: #F5F5F5;
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
  top: 10%;
  right: 5%;
  width: 100px;
  height: 100px;
  background: #FFDEB4;
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
  bottom: 15%;
  left: 8%;
  width: 90px;
  height: 90px;
  background: #E7B4E7;
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
  top: 60%;
  right: 10%;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 87px solid #B4D4FF;
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
    border-bottom: 52px solid #B4D4FF;
    
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
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: inline-block;
  background: #AEC6FF;
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  align-items: start;
  position: relative;
  z-index: 1;

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

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  border: 5px solid #000;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 10px 10px 0 #000;
  background: #fff;
  color: #000;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 13px 13px 0 #000;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-width: 4px;
    box-shadow: 7px 7px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const ImageBadge = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: #FFFACD;
  border: 4px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  box-shadow: 6px 6px 0 #000;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
    bottom: -15px;
    right: -15px;
  }
`;

const BadgeIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const BadgeText = styled.span`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  color: #000;
  letter-spacing: 0.5px;
`;

const TextColumn = styled.div`
  animation: ${slideInRight} 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

const AboutCard = styled.div`
  background: #fff;
  border: 5px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  box-shadow: 10px 10px 0 #000;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 13px 13px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
    border-width: 4px;
    box-shadow: 7px 7px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.lg};
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: #000;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 500;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const Highlight = styled.strong`
  color: #000;
  font-weight: 800;
  background: linear-gradient(180deg, transparent 60%, #5dd0c0 60%);
  padding: 0 4px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const StatItem = styled.div<{ $color: string }>`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ $color }) => $color};
  border: 5px solid #000;
  border-radius: 0;
  box-shadow: 6px 6px 0 #000;
  animation: ${fadeInUp} 0.8s ease-out;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
    border-width: 4px;
    box-shadow: 5px 5px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  font-weight: 900;
  color: #000;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;