import React from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { projectPath, type Project } from "../../data/projects";
import { accentColor } from "../../styles/theme";
import { monoLabel, pressable } from "../../styles/mixins";
import { Tag, TagList } from "../common/Tag";
import { VisuallyHidden } from "../common/VisuallyHidden";

interface ArchiveProjectCardProps {
  project: Project;
}

/** Compact card for an archive project; the whole card links to its page. */
export const ArchiveProjectCard: React.FC<ArchiveProjectCardProps> = ({ project }) => {
  const theme = useTheme();

  return (
    <Card>
      <Band $fill={accentColor(theme, project.accent)}>{project.slug}</Band>
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
        <ProjectLink to={projectPath(project.slug)}>
          View project<VisuallyHidden>: {project.title}</VisuallyHidden> →
        </ProjectLink>
      </Body>
    </Card>
  );
};

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.base};
  ${pressable("sm")}
`;

const Band = styled.div<{ $fill: string }>`
  ${monoLabel}
  padding: 6px ${({ theme }) => theme.spacing.sm};
  background-color: ${({ $fill }) => $fill};
  color: ${({ theme }) => theme.colors.ink};
  border-bottom: ${({ theme }) => theme.borders.base};
  overflow-wrap: anywhere;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: 0;
`;

const Tagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ProjectLink = styled(Link)`
  ${monoLabel}
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.xs};
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
`;

export default ArchiveProjectCard;
