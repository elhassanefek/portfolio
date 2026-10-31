import React from "react";
import styled from "styled-components";
import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import { BulletList } from "../common/BulletList";
import { monoLabel } from "../../styles/mixins";
import { experience } from "../../data/profile";

export const Experience: React.FC = () => (
  <Section id="experience" index={2} label="Experience" title="Where I've shipped">
    <List>
      {experience.map((job) => (
        <li key={`${job.company}-${job.period}`}>
          <Reveal>
            <Entry>
              <When>
                <span>{job.period}</span>
                <Duration>{job.duration}</Duration>
              </When>
              <div>
                <Role>{job.role}</Role>
                <Company>{job.company}</Company>
                <Points>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </Points>
                {job.links && (
                  <Links>
                    {job.links.map((link) => (
                      <ExternalLink
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} ↗
                      </ExternalLink>
                    ))}
                  </Links>
                )}
              </div>
            </Entry>
          </Reveal>
        </li>
      ))}
    </List>
  </Section>
);

const List = styled.ol`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Entry = styled.article`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.base};
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const When = styled.p`
  ${monoLabel}
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Duration = styled.span`
  color: ${({ theme }) => theme.colors.muted};
`;

const Role = styled.h3`
  margin-bottom: 4px;
`;

const Company = styled.p`
  ${monoLabel}
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.muted};
`;

const Points = styled(BulletList)`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Links = styled.p`
  margin-bottom: 0;
`;

const ExternalLink = styled.a`
  ${monoLabel}
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export default Experience;
