import React from "react";
import styled from "styled-components";
import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import { WindowFrame } from "../common/WindowFrame";
import { monoLabel } from "../../styles/mixins";
import { education, profile } from "../../data/profile";

const details = [
  { label: "School", value: education.school },
  { label: "Program", value: education.program },
  { label: "Track", value: education.track },
  { label: "Period", value: education.period },
];

export const About: React.FC = () => (
  <Section id="about" index={1} label="About" title="Engineer first, Go by choice">
    <Grid>
      <Reveal>
        <Portrait title="me.png">
          <img
            src="/illustrations/me.png"
            alt={`Portrait of ${profile.name}`}
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
          />
        </Portrait>
      </Reveal>

      <Reveal delay={0.1}>
        <Text>
          I'm a fourth-year computer science engineering student at {education.school}, in
          the {education.track} track. I'm backend-focused and Go first: I like services that
          stay correct when requests race, clients retry and processes crash.
        </Text>
        <Text>
          I also ship the frontends, in React and React Native, and I've fine-tuned
          Transformer models for French NLP.
        </Text>

        <Details>
          {details.map((d) => (
            <Detail key={d.label}>
              <DetailLabel>{d.label}</DetailLabel>
              <dd>{d.value}</dd>
            </Detail>
          ))}
        </Details>
      </Reveal>
    </Grid>
  </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const Portrait = styled(WindowFrame)`
  max-width: 340px;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 640px;
`;

const Details = styled.dl`
  margin-top: ${({ theme }) => theme.spacing.lg};
  border-top: ${({ theme }) => theme.borders.base};
`;

const Detail = styled.div`
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  border-bottom: ${({ theme }) => theme.borders.thin};
`;

const DetailLabel = styled.dt`
  ${monoLabel}
  color: ${({ theme }) => theme.colors.muted};
  padding-top: 3px;
`;

export default About;
