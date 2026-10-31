import React from "react";
import { Link, useParams } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { getProject, projectPath, projects, type Project } from "../data/projects";
import { getScreenshots } from "../lib/screenshots";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import { accentColor } from "../styles/theme";
import { monoLabel, pressable } from "../styles/mixins";
import { Container } from "../components/common/Container";
import { Button } from "../components/common/Button";
import { Reveal } from "../components/common/Reveal";
import { SectionLabel } from "../components/common/SectionLabel";
import { BulletList } from "../components/common/BulletList";
import { Tag, TagList } from "../components/common/Tag";
import { ProjectGallery } from "../components/projects/ProjectGallery";
import { diagrams } from "../components/diagrams";

interface PageSection {
  id: string;
  label: string;
  content: React.ReactNode;
}

/** Builds the page's sections in template order, skipping anything without content. */
function buildSections(project: Project, hasGallery: boolean): PageSection[] {
  const sections: PageSection[] = [];
  const list = (items?: string[]) =>
    items?.length ? (
      <BulletList>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </BulletList>
    ) : null;
  const gallery: PageSection = {
    id: "screenshots",
    label: "Screenshots",
    content: <ProjectGallery project={project} />,
  };

  if (project.problem) {
    // Full case study
    sections.push({ id: "problem", label: "Problem", content: <Lead>{project.problem}</Lead> });

    if (project.architecture) {
      const Diagram = diagrams[project.architecture];
      sections.push({ id: "architecture", label: "Architecture", content: <Diagram /> });
    }

    if (project.decisions?.length) {
      sections.push({
        id: "decisions",
        label: "Key decisions",
        content: (
          <Decisions>
            {project.decisions.map((d, i) => (
              <li key={d.title}>
                <Decision>
                  <DecisionNumber>{String(i + 1).padStart(2, "0")}</DecisionNumber>
                  <DecisionTitle>{d.title}</DecisionTitle>
                  <DecisionPart>
                    <PartLabel>Why</PartLabel>
                    <p>{d.why}</p>
                  </DecisionPart>
                  {d.tradeoff && (
                    <DecisionPart $tradeoff>
                      <PartLabel>Trade-off</PartLabel>
                      <p>{d.tradeoff}</p>
                    </DecisionPart>
                  )}
                </Decision>
              </li>
            ))}
          </Decisions>
        ),
      });
    }

    if (project.testing?.length)
      sections.push({ id: "testing", label: "How it's tested", content: list(project.testing) });
    if (project.results?.length)
      sections.push({ id: "results", label: "Results", content: list(project.results) });
    if (project.engineering?.length)
      sections.push({ id: "engineering", label: "Engineering", content: list(project.engineering) });
    if (project.next?.length)
      sections.push({ id: "next", label: "What I'd improve next", content: list(project.next) });
    if (hasGallery) sections.push(gallery);
  } else {
    // Lighter page: overview + features; featured ones are screenshot-led.
    if (project.summary)
      sections.push({ id: "overview", label: "Overview", content: <Lead>{project.summary}</Lead> });
    if (project.featured && hasGallery) sections.push(gallery);
    if (project.features?.length)
      sections.push({
        id: "features",
        label: project.featured ? "What I built" : "Features",
        content: list(project.features),
      });
    if (!project.featured && hasGallery) sections.push(gallery);
  }

  return sections;
}

export const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const theme = useTheme();
  const project = getProject(slug);
  useDocumentTitle(project ? `${project.title}: ${project.tagline}` : "Project not found");

  if (!project) {
    return (
      <Container>
        <NotFound>
          <SectionLabel index={404}>Not found</SectionLabel>
          <h1>Project not found</h1>
          <p>There's no project at this address.</p>
          <Button to="/#projects">Back to projects</Button>
        </NotFound>
      </Container>
    );
  }

  const accent = accentColor(theme, project.accent);
  const hasGallery = getScreenshots(project.slug).gallery.length > 0;
  const sections = buildSections(project, hasGallery);

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  const meta = [
    { label: "Status", value: project.status },
    { label: "Role", value: project.role },
  ].filter((m): m is { label: string; value: string } => Boolean(m.value));

  return (
    <article aria-labelledby="project-title">
      <Hero $fill={accent}>
        <Container>
          <BackLink to={project.featured ? "/#projects" : "/#archive"}>← All projects</BackLink>
          <Kicker>{project.featured ? "Case study" : "Archive"}</Kicker>
          <Title id="project-title">{project.title}</Title>
          <Tagline>{project.tagline}</Tagline>
        </Container>
      </Hero>

      <MetaBand>
        <Container>
          <MetaGrid>
            <MetaList>
              {meta.map((m) => (
                <MetaItem key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </MetaItem>
              ))}
              <MetaItem>
                <dt>Stack</dt>
                <dd>
                  <TagList>
                    {project.stack.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </TagList>
                </dd>
              </MetaItem>
            </MetaList>

            {(project.links.github || project.links.live) && (
              <LinkRow>
                {project.links.live && (
                  <Button href={project.links.live} target="_blank">
                    Live site ↗
                  </Button>
                )}
                {project.links.github && (
                  <Button href={project.links.github} target="_blank" variant="secondary">
                    GitHub ↗
                  </Button>
                )}
              </LinkRow>
            )}
          </MetaGrid>

          {project.credits && (
            <Credits>
              <CreditsLabel>Credits</CreditsLabel> {project.credits}
            </Credits>
          )}
        </Container>
      </MetaBand>

      <Container>
        {sections.map((section, i) => (
          <Body key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
            <Reveal>
              <SectionLabel index={i + 1}>{project.slug}</SectionLabel>
              <SectionTitle id={`${section.id}-title`}>{section.label}</SectionTitle>
            </Reveal>
            <Reveal delay={0.05}>{section.content}</Reveal>
          </Body>
        ))}
      </Container>

      <PrevNextBand aria-label="More projects">
        <Container>
          <PrevNext>
            {prev ? (
              <PrevNextLink to={projectPath(prev.slug)} rel="prev">
                <PrevNextLabel>← Previous</PrevNextLabel>
                <PrevNextTitle>{prev.title}</PrevNextTitle>
              </PrevNextLink>
            ) : (
              <span />
            )}
            {next && (
              <PrevNextLink to={projectPath(next.slug)} rel="next" $alignEnd>
                <PrevNextLabel>Next →</PrevNextLabel>
                <PrevNextTitle>{next.title}</PrevNextTitle>
              </PrevNextLink>
            )}
          </PrevNext>
        </Container>
      </PrevNextBand>
    </article>
  );
};

/* ───────────── Header ───────────── */

const Hero = styled.header<{ $fill: string }>`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ $fill }) => $fill};
  color: ${({ theme }) => theme.colors.ink};
  border-bottom: ${({ theme }) => theme.borders.base};
  background-image:
    linear-gradient(${({ theme }) => theme.colors.grid} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.grid} 1px, transparent 1px);
  background-size: 24px 24px;
`;

const BackLink = styled(Link)`
  ${monoLabel}
  display: block;
  width: fit-content;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
`;

const Kicker = styled.p`
  ${monoLabel}
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding: 4px ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.thin};
`;

const Title = styled.h1`
  font-size: clamp(2.25rem, 7vw, ${({ theme }) => theme.fontSizes["6xl"]});
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Tagline = styled.p`
  font-size: clamp(${({ theme }) => theme.fontSizes.lg}, 2.4vw, ${({ theme }) => theme.fontSizes["2xl"]});
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 0;
  max-width: 760px;
`;

const MetaBand = styled.section`
  padding: ${({ theme }) => theme.spacing.lg} 0;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: ${({ theme }) => theme.borders.base};
`;

const MetaGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const MetaList = styled.dl`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  flex: 1 1 480px;
  min-width: 0;
`;

const MetaItem = styled.div`
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: baseline;

  dt {
    ${monoLabel}
    color: ${({ theme }) => theme.colors.muted};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 4px;
  }
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Credits = styled.p`
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.paper};
  border: ${({ theme }) => theme.borders.base};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const CreditsLabel = styled.strong`
  ${monoLabel}
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

/* ───────────── Body ───────────── */

const Body = styled.section`
  padding: ${({ theme }) => theme.spacing["2xl"]} 0 0;
  scroll-margin-top: ${({ theme }) => theme.layout.headerHeight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: ${({ theme }) => theme.spacing.xl};
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Lead = styled.p`
  max-width: 760px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin-bottom: 0;
`;

const Decisions = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Decision = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.base};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const DecisionNumber = styled.span`
  ${monoLabel}
  align-self: flex-start;
  padding: 2px 6px;
  background-color: ${({ theme }) => theme.colors.accent};
  border: ${({ theme }) => theme.borders.thin};
`;

const DecisionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: 0;
`;

const DecisionPart = styled.div<{ $tradeoff?: boolean }>`
  padding-top: ${({ theme }) => theme.spacing.xs};
  border-top: ${({ theme, $tradeoff }) => ($tradeoff ? theme.borders.base : theme.borders.thin)};

  p {
    margin: 0;
  }
`;

const PartLabel = styled.span`
  ${monoLabel}
  display: block;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 4px;
`;

/* ───────────── Prev / next ───────────── */

const PrevNextBand = styled.nav`
  margin-top: ${({ theme }) => theme.spacing["3xl"]};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  border-top: ${({ theme }) => theme.borders.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`;

const PrevNext = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const PrevNextLink = styled(Link)<{ $alignEnd?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: ${({ theme }) => theme.spacing.md};
  text-align: ${({ $alignEnd }) => ($alignEnd ? "right" : "left")};
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.base};
  ${pressable("sm")}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: left;
  }
`;

const PrevNextLabel = styled.span`
  ${monoLabel}
  color: ${({ theme }) => theme.colors.muted};
`;

const PrevNextTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const NotFound = styled.div`
  padding: ${({ theme }) => theme.spacing["3xl"]} 0;

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export default ProjectPage;
