import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "../components/common/Button";
import { DottedPath } from "../components/ui/DottedPath";
import { DottedCurveLR } from "../components/ui/DottedCurveLR";
import { DottedCurveRL } from "../components/ui/DottedCurveRL";

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Wrapper>
        <Container>
          <NotFoundCard>
            <NotFoundIcon>❌</NotFoundIcon>
            <Heading>Project not found</Heading>
            <NotFoundText>We couldn't find a project with id: {id}</NotFoundText>
            <Actions>
              <Link to="/">
                <PrimaryButton as="span" size="md">Back to Home</PrimaryButton>
              </Link>
            </Actions>
          </NotFoundCard>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <DecorativeShapes>
        <Shape1 />
        <Shape2 />
        <Shape3 />
        <Shape4 />
        <Shape5 />
        <Shape6 />
      </DecorativeShapes>
      
      <Container>
        <HeaderCard $color={project.color}>
          <ProjectBadge>
            <BadgeIcon>🚀</BadgeIcon>
            <BadgeText>Featured Project</BadgeText>
          </ProjectBadge>
          
          <HeaderContent>
            <Heading>{project.title}</Heading>
            <Subheading>Project Overview</Subheading>
            <Desc>{project.description}</Desc>
            <Tags>
              {project.tags.map((t, idx) => (
                <Tag key={t} $index={idx}>{t}</Tag>
              ))}
            </Tags>
            <Actions>
              {project.github && (
                <OutlinedButton 
                  as="a" 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  size="md"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  View on GitHub
                </OutlinedButton>
              )}
              <Link to="/">
                <PrimaryButton as="span" size="md">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Back to Projects
                </PrimaryButton>
              </Link>
            </Actions>
          </HeaderContent>
        </HeaderCard>

        <Section>
          <SectionTitle>
         
            The Story
          </SectionTitle>
          <Body>{project.story}</Body>
        </Section>

        {project.challenges && project.challenges.length > 0 && (
          <Section>
            <SectionTitle>
              <TitleIcon>⚡</TitleIcon>
              Challenges
            </SectionTitle>
            <InfoGrid>
              {project.challenges.map((text, i) => {
                const [t, b] = splitTitleBody(text);
                return (
                  <React.Fragment key={i}>
                    <InfoCard $side={i % 2 === 0 ? 'left' : 'right'} $index={i}>
                      <InfoIcon aria-hidden $index={i}>
                        <svg viewBox="0 0 24 24" width="28" height="28">
                          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
                          <path d="M12 7v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <circle cx="12" cy="17" r="1.5" fill="currentColor" />
                        </svg>
                      </InfoIcon>
                      <CardHeading>{t}</CardHeading>
                      {b && <CardBody>{b}</CardBody>}
                    </InfoCard>
                    {i < project.challenges.length - 1 && (
                      <DottedConnector>
                        {i % 2 === 0 ? (
                          <DottedCurveLR height={150} color="#000" dash="5 10" />
                        ) : (
                          <DottedCurveRL height={150} color="#000" dash="5 10" />
                        )}
                      </DottedConnector>
                    )}
                  </React.Fragment>
                );
              })}
            </InfoGrid>
          </Section>
        )}

        {project.challenges && project.challenges.length > 0 && project.features && project.features.length > 0 && (
          <SectionConnector>
            <DottedPath height={140} dash="5 10" color="#000" />
          </SectionConnector>
        )}

        {project.features && project.features.length > 0 && (
          <Section>
            <SectionTitle>
              <TitleIcon>✨</TitleIcon>
              Features
            </SectionTitle>
            <InfoGrid>
              {project.features.map((text, i) => {
                const [t, b] = splitTitleBody(text);
                return (
                  <React.Fragment key={i}>
                    <InfoCard $side={i % 2 === 0 ? 'left' : 'right'} $index={i + (project.challenges?.length || 0)}>
                      <InfoIcon aria-hidden $index={i + (project.challenges?.length || 0)}>
                        <svg viewBox="0 0 24 24" width="28" height="28">
                          <path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1L12 2z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                        </svg>
                      </InfoIcon>
                      <CardHeading>{t}</CardHeading>
                      {b && <CardBody>{b}</CardBody>}
                    </InfoCard>
                    {i < project.features.length - 1 && (
                      <DottedConnector>
                        {i % 2 === 0 ? (
                          <DottedCurveLR height={140} color="#000" dash="5 10" />
                        ) : (
                          <DottedCurveRL height={140} color="#000" dash="5 10" />
                        )}
                      </DottedConnector>
                    )}
                  </React.Fragment>
                );
              })}
            </InfoGrid>
          </Section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <Section>
            <SectionTitle>
             
              Gallery
            </SectionTitle>
            <Gallery>
              {project.gallery.map((src, i) => (
                <GalleryItem key={i} $index={i}>
                  <img src={src} alt={`${project.title} ${i + 1}`} loading="lazy" />
                </GalleryItem>
              ))}
            </Gallery>
          </Section>
        )}
      </Container>
    </Wrapper>
  );
};

// Helper function
function splitTitleBody(text: string): [string, string] {
  const idx = text.indexOf(".");
  if (idx === -1 || idx > 120) return [text, ""];
  const title = text.slice(0, idx + 1).trim();
  const body = text.slice(idx + 1).trim();
  return [title, body];
}

// Colorful card backgrounds based on index
const getCardColor = (index: number) => {
  const colors = ['#FFB5E8', '#B4E7CE', '#AEC6FF', '#FFDEB4', '#E7B4E7', '#B4D4FF', '#FFD4B4'];
  return colors[index % colors.length];
};

const getIconColor = (index: number) => {
  const colors = ['#FF1493', '#00C896', '#4169E1', '#FF8C00', '#9B59B6', '#1E90FF', '#FF6347'];
  return colors[index % colors.length];
};

// Styled Components
const Wrapper = styled.main`
  padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  background: #F5F5F5;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

const DecorativeShapes = styled.div`
  position: fixed;
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
  background: #FFB5E8;
  border: 5px solid #000;
  border-radius: 50%;
  box-shadow: 8px 8px 0 #000;
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 60px;
    height: 60px;
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const Shape2 = styled.div`
  position: absolute;
  top: 35%;
  left: 3%;
  width: 120px;
  height: 120px;
  background: #AEC6FF;
  border: 5px solid #000;
  transform: rotate(15deg);
  box-shadow: 10px 10px 0 #000;
  animation: float 7s ease-in-out infinite 1s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 70px;
    height: 70px;
    border-width: 3px;
    box-shadow: 6px 6px 0 #000;
  }
`;

const Shape3 = styled.div`
  position: absolute;
  bottom: 20%;
  right: 8%;
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
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
  top: 55%;
  right: 12%;
  width: 90px;
  height: 90px;
  background: #FFDEB4;
  border: 5px solid #000;
  border-radius: 50%;
  box-shadow: 7px 7px 0 #000;
  animation: float 6.5s ease-in-out infinite 0.5s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 55px;
    height: 55px;
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const Shape5 = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  width: 80px;
  height: 80px;
  background: #E7B4E7;
  border: 5px solid #000;
  transform: rotate(-20deg);
  box-shadow: 8px 8px 0 #000;
  animation: float 7.5s ease-in-out infinite 1.5s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 50px;
    height: 50px;
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const Shape6 = styled.div`
  position: absolute;
  top: 70%;
  left: 5%;
  width: 70px;
  height: 70px;
  background: #B4D4FF;
  border: 5px solid #000;
  border-radius: 50%;
  box-shadow: 6px 6px 0 #000;
  animation: float 8.5s ease-in-out infinite 2.5s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 45px;
    height: 45px;
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const NotFoundCard = styled.div`
  background: #FFF;
  border: 5px solid #000;
  border-radius: 0;
  box-shadow: 12px 12px 0 #000;
  padding: ${({ theme }) => theme.spacing["3xl"]};
  text-align: center;
  max-width: 600px;
  margin: ${({ theme }) => theme.spacing["5xl"]} auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["2xl"]};
    border-width: 4px;
    box-shadow: 8px 8px 0 #000;
  }
`;

const NotFoundIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const HeaderCard = styled.section<{ $color: string }>`
  background: ${({ $color }) => $color};
  border: 5px solid #000;
  border-radius: 0;
  box-shadow: 12px 12px 0 #000;
  padding: ${({ theme }) => theme.spacing["3xl"]};
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 16px 16px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["2xl"]};
    box-shadow: 8px 8px 0 #000;
    border-width: 4px;
    
    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 10px 10px 0 #000;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    border-width: 3px;
    box-shadow: 6px 6px 0 #000;
  }
`;

const ProjectBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: #FFFACD;
  border: 4px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: 5px 5px 0 #000;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const BadgeIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const BadgeText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 800;
  text-transform: uppercase;
  color: #000;
  letter-spacing: 0.5px;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  font-weight: 900;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: #000;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
`;

const Subheading = styled.h2`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: #000;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Desc = styled.p`
  color: #000;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Tag = styled.span<{ $index: number }>`
  background-color: ${({ $index }) => getCardColor($index)};
  color: #000;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border: 3px solid #000;
  border-radius: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 800;
  box-shadow: 3px 3px 0 #000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 #000;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    
    a, button {
      width: 100%;
    }
  }
`;

const Section = styled.section`
  background: #fff;
  border: 5px solid #000;
  box-shadow: 10px 10px 0 #000;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  border-radius: 0;
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 13px 13px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
    box-shadow: 8px 8px 0 #000;
    border-width: 4px;
    
    &:hover {
      box-shadow: 10px 10px 0 #000;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: 6px 6px 0 #000;
    border-width: 3px;
  }
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  font-weight: 900;
  text-align: center;
  margin: ${({ theme }) => `0 0 ${theme.spacing["2xl"]} 0`};
  text-transform: uppercase;
  letter-spacing: -0.02em;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.md};
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 6px;
    background: #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    margin: ${({ theme }) => `0 0 ${theme.spacing.xl} 0`};
  }
`;

const TitleIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

const Body = styled.p`
  color: #000;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const NotFoundText = styled.p`
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  font-weight: 600;
`;

const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`;

const InfoCard = styled.article<{ $side: 'left' | 'right'; $index: number }>`
  background: ${({ $index }) => getCardColor($index)};
  border: 5px solid #000;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 8px 8px 0 #000;
  width: 48%;
  margin: 8px 0;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  ${({ $side }) => $side === 'left' ? 'margin-right: auto;' : 'margin-left: auto;'}
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 70%;
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: 6px 6px 0 #000;
    border-width: 4px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin: 8px 0 !important;
    box-shadow: 5px 5px 0 #000;
    border-width: 3px;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const InfoIcon = styled.div<{ $index: number }>`
  color: ${({ $index }) => getIconColor($index)};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CardHeading = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 900;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.3;
  color: #000;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const CardBody = styled.p`
  color: #000;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  font-weight: 500;
`;

const DottedConnector = styled.div`
  height: 20px;
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const SectionConnector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  margin: ${({ theme }) => theme.spacing["2xl"]} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const GalleryItem = styled.figure<{ $index: number }>`
  border: 5px solid #000;
  border-radius: 0;
  box-shadow: 6px 6px 0 #000;
  background: ${({ $index }) => getCardColor($index)};
  aspect-ratio: 16/9;
  overflow: hidden;
  margin: 0;
  transition: all 0.3s ease;
  padding: 10px;
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0 #000;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border: 3px solid #000;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
    padding: 6px;
    
    img {
      border-width: 2px;
    }
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #FF6B9D;
  color: #000;
  border: 4px solid #000;
  border-radius: 0;
  padding: 1rem 2rem;
  font-weight: 900;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 5px 5px 0 #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  min-width: 200px;
  height: auto;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

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
    min-width: 100%;
    padding: 0.875rem 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    border-width: 3px;
  }
`;

const OutlinedButton = styled(Button)`
  background-color: #B4E7CE;
  color: #000;
  border: 4px solid #000;
  border-radius: 0;
  padding: 1rem 2rem;
  font-weight: 900;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 5px 5px 0 #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  min-width: 200px;
  height: auto;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

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
    min-width: 100%;
    padding: 0.875rem 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    border-width: 3px;
  }
`;