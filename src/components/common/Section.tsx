import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

interface SectionProps {
  id: string;
  /** Number shown in the mono label: 1 -> "01 / LABEL". */
  index: number;
  label: string;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}

/** Home page section: mono label, heading, optional intro, then content. */
export const Section: React.FC<SectionProps> = ({ id, index, label, title, intro, children }) => (
  <Wrapper id={id} aria-labelledby={`${id}-title`}>
    <Container>
      <Reveal>
        <Header>
          <SectionLabel index={index}>{label}</SectionLabel>
          <Title id={`${id}-title`}>{title}</Title>
          {intro && <Intro>{intro}</Intro>}
        </Header>
      </Reveal>
      {children}
    </Container>
  </Wrapper>
);

const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  border-top: ${({ theme }) => theme.borders.base};
  /* Keep anchor targets clear of the sticky header */
  scroll-margin-top: ${({ theme }) => theme.layout.headerHeight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 760px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Intro = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 0;
`;

export default Section;
