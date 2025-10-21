import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { projects } from "../../data/projects";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { DottedCurveLR } from "../ui/DottedCurveLR";
import { DottedCurveRL } from "../ui/DottedCurveRL";

export const ProjectStories: React.FC = () => {
  const [active, setActive] = useState(0);
  return (
    <Section id="project-stories">
      <DecorativeShapes>
        <Shape1 />
        <Shape2 />
        <Shape3 />
      </DecorativeShapes>

      <SectionHeader>
        <SectionTitle>PROJECT STORIES</SectionTitle>
        <TitleUnderline />
        <SectionDescription>
          Deep dive into each project's journey
        </SectionDescription>
      </SectionHeader>

      <Inner>
        {projects.map((p, idx) => (
          <React.Fragment key={p.id}>
            <StoryRow
              $reverse={idx % 2 === 1}
              index={idx}
              activeIndex={active}
              setActive={setActive}
              id={p.id}
              title={p.title}
              description={p.story}
              image={p.image}
              color={p.color}
            />
            {idx < projects.length - 1 && (
              <Between>
                {idx % 2 === 0 ? (
                  <DottedCurveRL height={300} color="#000" dash="5 15" />
                ) : (
                  <DottedCurveLR height={300} color="#000" dash="5 15" />
                )}
              </Between>
            )}
          </React.Fragment>
        ))}
      </Inner>
    </Section>
  );
};

type StoryRowProps = {
  index: number;
  activeIndex: number;
  setActive: (i: number) => void;
  id: string;
  title: string;
  description: string;
  image?: string;
  color: string;
  $reverse: boolean;
};

const StoryRow: React.FC<StoryRowProps> = ({ 
  index, 
  activeIndex, 
  setActive, 
  id, 
  title, 
  description, 
  image, 
  color, 
  $reverse 
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.6, margin: "-20% 0px -20% 0px" });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) setActive(index);
  }, [inView, index, setActive]);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const isActive = activeIndex === index;

  return (
    <Row ref={ref} $reverse={$reverse}>
      <Media 
        $reverse={$reverse} 
        as={motion.div} 
        animate={{ opacity: 1, scale: isActive ? 1 : 0.97 }} 
        transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }} 
        $color={color}
      >
        {image ? (
          <Img src={image} alt={title} />
        ) : (
          <Placeholder>
            <svg viewBox="0 0 200 140" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
              <rect x="10" y="10" width="180" height="120" rx="0" fill="none" stroke="currentColor" strokeWidth="4" />
              <circle cx="60" cy="70" r="24" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M20 120 L90 70 L140 100 L190 40" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </Placeholder>
        )}
      </Media>

      <Content 
        as={motion.div}  
        transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
      >
        <ProjectBadge $color={color}>
          Project #{index + 1}
        </ProjectBadge>
        <Heading>{title}</Heading>
        <Desc>{description}</Desc>
        <RowActions>
          <Link to={`/projects/${id}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </RowActions>
      </Content>
    </Row>
  );
};

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing["5xl"]} 0;
  background: #FFE4E1;
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
  bottom: 15%;
  right: 8%;
  width: 90px;
  height: 90px;
  background: #FFFACD;
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
  right: 12%;
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
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: inline-block;
  background: #FFB5E8;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border: 5px solid #000;
  box-shadow: 8px 8px 0 #000;
  border-radius: 0;
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
  margin-top: ${({ theme }) => theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

const Row = styled.div<{ $reverse: boolean }>`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  align-items: center;
  position: relative;
  direction: ${({ $reverse }) => ($reverse ? "rtl" : "ltr")};
  padding: ${({ theme }) => theme.spacing.xl} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const Media = styled.div<{ $reverse: boolean; $color: string }>`
  background: ${({ $color }) => $color};
  border-radius: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #000;
  box-shadow: 10px 10px 0 #000;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 13px 13px 0 #000;
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

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #fff;
  border: 0;
  border-radius: 0;
  box-shadow: none;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  color: #000;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: #fff;
  border: 5px solid #000;
  border-radius: 0;
  box-shadow: 10px 10px 0 #000;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  transition: all 0.3s ease;
  position: relative;

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
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const ProjectBadge = styled.div<{ $color: string }>`
  display: inline-block;
  background: ${({ $color }) => $color};
  border: 3px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: 4px 4px 0 #000;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-width: 2px;
    box-shadow: 3px 3px 0 #000;
  }
`;

const Heading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -0.01em;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

const Desc = styled.p`
  color: #000;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const RowActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};

  a {
    text-decoration: none;
  }
`;

const Between = styled.div`
  position: relative;
  height: 280px;
  margin: -30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  svg {
    position: relative;
    z-index: 0;
    transform: scaleY(1.3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 200px;
    margin: -20px 0;
  }
`;