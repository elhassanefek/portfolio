import React from "react";
import styled from "styled-components";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { Reveal } from "../common/Reveal";
import { monoLabel } from "../../styles/mixins";
import { education, profile } from "../../data/profile";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Studying", value: `${education.school} · 2CS` },
  { label: "Focus", value: "Go · PostgreSQL · React" },
];

export const Hero: React.FC = () => (
  <Wrapper aria-labelledby="hero-title">
    <Container>
      <Reveal>
        <Kicker>{profile.title}</Kicker>
        <Name id="hero-title">{profile.name}</Name>
        <Pitch>{profile.pitch}</Pitch>

        <Actions>
          <Button size="lg" to="/#projects">
            View projects
          </Button>
          <Button size="lg" variant="secondary" href={profile.resume} download>
            Download resume
          </Button>
          <Button
            size="lg"
            variant="secondary"
            href={profile.github}
            target="_blank"
          >
            GitHub
          </Button>
        </Actions>

        <Facts>
          {facts.map((fact) => (
            <Fact key={fact.label}>
              <FactLabel>{fact.label}</FactLabel>
              <FactValue>{fact.value}</FactValue>
            </Fact>
          ))}
        </Facts>
      </Reveal>
    </Container>
  </Wrapper>
);

const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing["3xl"]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
`;

const Kicker = styled.p`
  ${monoLabel}
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background-color: ${({ theme }) => theme.colors.accent};
  border: ${({ theme }) => theme.borders.base};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 9vw, ${({ theme }) => theme.fontSizes["7xl"]});
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Pitch = styled.p`
  max-width: 720px;
  font-size: clamp(${({ theme }) => theme.fontSizes.lg}, 2.4vw, ${({ theme }) => theme.fontSizes["2xl"]});
  line-height: ${({ theme }) => theme.lineHeights.normal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  border: ${({ theme }) => theme.borders.base};
  background-color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
`;

const Fact = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  border-right: ${({ theme }) => theme.borders.base};
  margin-right: -${({ theme }) => theme.borders.width};
  border-bottom: ${({ theme }) => theme.borders.base};
  margin-bottom: -${({ theme }) => theme.borders.width};
`;

const FactLabel = styled.dt`
  ${monoLabel}
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 4px;
`;

const FactValue = styled.dd`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export default Hero;
