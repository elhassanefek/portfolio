import React from "react";
import styled from "styled-components";
import type { Project } from "../../data/projects";
import { getScreenshots } from "../../lib/screenshots";
import { WindowFrame } from "../common/WindowFrame";

interface ProjectGalleryProps {
  project: Project;
  /** Optional heading rendered above the gallery (hidden along with it when empty). */
  heading?: React.ReactNode;
}

/** Gallery screenshots in terminal frames. Renders nothing when there are none. */
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, heading }) => {
  const { gallery } = getScreenshots(project.slug);
  if (gallery.length === 0) return null;

  return (
    <>
      {heading}
      <Grid>
        {gallery.map((shot) => (
          <li key={shot.src}>
            <WindowFrame title={`${project.slug}/${shot.name || "screenshot"}`}>
              <img
                src={shot.src}
                alt={`${project.title} screenshot: ${shot.name || "screen"}`}
                width={shot.width}
                height={shot.height}
                loading="lazy"
                decoding="async"
              />
            </WindowFrame>
          </li>
        ))}
      </Grid>
    </>
  );
};

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export default ProjectGallery;
