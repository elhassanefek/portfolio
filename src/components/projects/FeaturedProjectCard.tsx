import React from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { projectPath, type Project } from "../../data/projects";
import { accentColor } from "../../styles/theme";
import { monoLabel, pressable } from "../../styles/mixins";
import { Tag, TagList } from "../common/Tag";
import { VisuallyHidden } from "../common/VisuallyHidden";
import { ProjectCover } from "./ProjectCover";

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

/** Large home-page card for a featured project; the whole card links to its case study. */
export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, index }) => {
  const theme = useTheme();
  const accent = accentColor(theme, project.accent);

  return (
    <Card>
      <Band $fill={accent}>
        <span>{String(index + 1).padStart(2, "0")} / Featured</span>
        <span>{project.slug}</span>
      </Band>
      <CoverSlot>
        <ProjectCover project={project} />
      </CoverSlot>
      <Body>
        <Title>{project.title}</Title>
        <Tagline>{project.tagline}</Tagline>
        <TagList>
          {project.stack.slice(0, 3).map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </TagList>
        <CaseStudyLink to={projectPath(project.slug)} $fill={accent}>
          Read case study<VisuallyHidden>: {project.title}</VisuallyHidden> →
        </CaseStudyLink>
      </Body>
    </Card>
  );
};

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.base};
  ${pressable("md")}
`;

const Band = styled.div<{ $fill: string }>`
  ${monoLabel}
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background-color: ${({ $fill }) => $fill};
  color: ${({ theme }) => theme.colors.ink};
  border-bottom: ${({ theme }) => theme.borders.base};
`;

const CoverSlot = styled.div`
  border-bottom: ${({ theme }) => theme.borders.base};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h3`
  margin: 0;
`;

const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 0;
`;

const CaseStudyLink = styled(Link)<{ $fill: string }>`
  ${monoLabel}
  align-self: flex-start;
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background-color: ${({ $fill }) => $fill};
  color: ${({ theme }) => theme.colors.ink};
  border: ${({ theme }) => theme.borders.base};

  /* Stretch the click target over the whole card */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
`;

export default FeaturedProjectCard;
