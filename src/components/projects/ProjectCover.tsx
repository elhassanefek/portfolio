import React from "react";
import styled, { useTheme } from "styled-components";
import type { Project } from "../../data/projects";
import { getScreenshots } from "../../lib/screenshots";
import { accentColor } from "../../styles/theme";

interface ProjectCoverProps {
  project: Project;
  /** Number of stack items in the typographic fallback's mono line. */
  stackItems?: number;
  className?: string;
}

/**
 * The project's cover screenshot, or — when none exists — a typographic cover
 * (name on the accent color plus a mono stack line), never a broken image.
 */
export const ProjectCover: React.FC<ProjectCoverProps> = ({
  project,
  stackItems = 4,
  className,
}) => {
  const theme = useTheme();
  const { cover } = getScreenshots(project.slug);
  const fit = project.coverFit ?? "cover";

  if (cover) {
    return (
      <Frame className={className} $fit={fit}>
        <Image
          $fit={fit}
          src={cover.src}
          alt={`${project.title}: ${project.tagline}`}
          width={cover.width}
          height={cover.height}
          loading="lazy"
          decoding="async"
        />
      </Frame>
    );
  }

  return (
    <Typographic
      className={className}
      $fill={accentColor(theme, project.accent)}
      role="img"
      aria-label={`${project.title}: ${project.tagline}`}
    >
      <Name aria-hidden="true">{project.title}</Name>
      <Stack aria-hidden="true">{project.stack.slice(0, stackItems).join(" · ")}</Stack>
    </Typographic>
  );
};

type CoverFit = NonNullable<Project["coverFit"]>;

const Frame = styled.div<{ $fit: CoverFit }>`
  aspect-ratio: 16 / 10;
  overflow: hidden;
  /* "contain": the whole image, centered on the white surface with padding */
  padding: ${({ $fit, theme }) => ($fit === "contain" ? theme.spacing.md : 0)};
  background-color: ${({ $fit, theme }) =>
    $fit === "contain" ? theme.colors.surface : theme.colors.paper};
`;

const Image = styled.img<{ $fit: CoverFit }>`
  width: 100%;
  height: 100%;
  object-fit: ${({ $fit }) => $fit};
  object-position: ${({ $fit }) => ($fit === "contain" ? "center" : "top center")};
`;

const Typographic = styled.div<{ $fill: string }>`
  aspect-ratio: 16 / 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ $fill }) => $fill};
  color: ${({ theme }) => theme.colors.ink};
  /* Same grid paper motif as the page, on the accent */
  background-image:
    linear-gradient(${({ theme }) => theme.colors.grid} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.grid} 1px, transparent 1px);
  background-size: 24px 24px;
  overflow: hidden;
`;

const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: clamp(${({ theme }) => theme.fontSizes["2xl"]}, 6vw, ${({ theme }) => theme.fontSizes["5xl"]});
  line-height: ${({ theme }) => theme.lineHeights.tight};
  overflow-wrap: anywhere;
`;

const Stack = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding-top: ${({ theme }) => theme.spacing.xs};
  border-top: ${({ theme }) => theme.borders.base};
`;

export default ProjectCover;
