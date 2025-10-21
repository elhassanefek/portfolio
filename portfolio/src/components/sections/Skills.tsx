import React from "react";
import styled from "styled-components";
import { Container } from "../common/Container";
import { skillsData } from "../../data/skills";
import { fadeInUp } from "../../styles/animations";

export const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <DecorativeShapes>
        <Shape1 />
        <Shape2 />
        <Shape3 />
      </DecorativeShapes>

      <Container maxWidth="full">
        <SectionHeader>
          <SectionTitle>MY SKILLS</SectionTitle>
          <TitleUnderline />
        </SectionHeader>

        <Subheading>Tech Stack</Subheading>
        <AllSkillsGrid>
          {getFlatSkills(["Machine Learning / AI", "Project Management & Architecture"]).map(
            (skill: string) => (
              <SkillTile key={`tech-${skill}`} title={skill}>
                <TileBox>
                  {(/quart|gsap/i.test(skill)) ? (
                    getSkillIcon(skill)
                  ) : (
                    <img
                      src={getLogoUrl(skill) || FALLBACK_ICON}
                      alt={skill}
                      loading="lazy"
                      onError={(e) => {
                        if (e.currentTarget.src !== FALLBACK_ICON) {
                          e.currentTarget.src = FALLBACK_ICON;
                        }
                      }}
                    />
                  )}
                </TileBox>
                <TileLabel>{skill}</TileLabel>
              </SkillTile>
            )
          )}
        </AllSkillsGrid>

        <Subheading>Machine Learning & AI</Subheading>
        <AllSkillsGrid>
          {getCategorySkills("Machine Learning / AI").map((skill: string) => (
            <SkillTile key={`ml-${skill}`} title={skill}>
              <TileBox>
                {(/quart|gsap/i.test(skill)) ? (
                  getSkillIcon(skill)
                ) : (
                  <img
                    src={getLogoUrl(skill) || FALLBACK_ICON}
                    alt={skill}
                    loading="lazy"
                    onError={(e) => {
                      if (e.currentTarget.src !== FALLBACK_ICON) {
                        e.currentTarget.src = FALLBACK_ICON;
                      }
                    }}
                  />
                )}
              </TileBox>
              <TileLabel>{skill}</TileLabel>
            </SkillTile>
          ))}
        </AllSkillsGrid>

        <Subheading>Project Management & Architecture</Subheading>
        <PMGrid>
          {getCategorySkills("Project Management & Architecture").map((skill: string) => (
            <SkillTile key={`pm-${skill}`} title={skill}>
              <TileBox>
                {getSkillIcon(skill)}
              </TileBox>
              <TileLabel>{skill}</TileLabel>
            </SkillTile>
          ))}
        </PMGrid>
      </Container>
    </SkillsSection>
  );
};

// Resolve a public logo via Simple Icons CDN where possible
const FALLBACK_ICON = "https://cdn.simpleicons.org/code";
function getLogoUrl(name: string): string | undefined {
  const n = name.toLowerCase();
  const map: Record<string, string> = {
    // Frontend
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "javascript (es6+)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "react query": "https://cdn.simpleicons.org/reactquery",
    "tanstack query": "https://cdn.simpleicons.org/reactquery",
    vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
    "styled components": "https://cdn.simpleicons.org/styledcomponents",
    tailwind: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    "tailwind css": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    gsap: "https://www.vectorlogo.zone/logos/greensock/greensock-icon.svg",

    // Backend
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    quart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",

    // Databases/Infra
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    mongoose: "https://cdn.simpleicons.org/mongoose",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",

    // Python & ML
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    matplotlib: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    "scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    scikit: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    scikit_learn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    scikitlearn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    "hugging face": "https://cdn.simpleicons.org/huggingface",
    transformers: "https://cdn.simpleicons.org/huggingface",
    mlflow: "https://cdn.simpleicons.org/mlflow",

    // Tools
    postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    npm: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    swagger: "https://cdn.simpleicons.org/swagger",
    websocket: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "socket.io (real-time)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    websockets: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "json server": "https://cdn.simpleicons.org/json",
    "json server (mock apis)": "https://cdn.simpleicons.org/json",
    "restful apis": "https://cdn.simpleicons.org/openapiinitiative",
    jwt: "https://cdn.simpleicons.org/jsonwebtokens",
  };

  const slug = Object.keys(map).find((k) => n.includes(k));
  if (!slug) return undefined;
  const iconSlug = map[slug];
  if (!iconSlug) return undefined;
  if (/^https?:\/\//.test(iconSlug)) return iconSlug;
  return `https://cdn.simpleicons.org/${iconSlug}`;
}

// Grouping helpers
function getCategorySkills(categoryName: string): string[] {
  const cat = skillsData.find((c) => c.category === categoryName);
  return cat ? cat.skills : [];
}

function getFlatSkills(excludeCategories: string[]): string[] {
  const set = new Set<string>();
  for (const cat of skillsData) {
    if (excludeCategories.includes(cat.category)) continue;
    for (const s of cat.skills) set.add(s);
  }
  return Array.from(set);
}

const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing["5xl"]} 0;
  background-color: #B4E7CE;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  }
`;

const DecorativeShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const Shape1 = styled.div`
  position: absolute;
  top: 20%;
  right: 10%;
  width: 100px;
  height: 100px;
  background: #FFDEB4;
  border: 5px solid #000;
  transform: rotate(45deg);
  box-shadow: 8px 8px 0 #000;
  animation: float 7s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: rotate(45deg) translateY(0px); }
    50% { transform: rotate(45deg) translateY(-20px); }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60px;
    height: 60px;
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
  }
`;

const Shape2 = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 90px;
  height: 90px;
  background: #E7B4E7;
  border: 5px solid #000;
  border-radius: 50%;
  box-shadow: 7px 7px 0 #000;
  animation: float 6s ease-in-out infinite 1s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 55px;
    height: 55px;
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const Shape3 = styled.div`
  position: absolute;
  top: 70%;
  right: 15%;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 87px solid #B4D4FF;
  filter: drop-shadow(7px 7px 0 #000);
  animation: float 8s ease-in-out infinite 2s;
  
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: -50px;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 87px solid #000;
    z-index: -1;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 52px solid #B4D4FF;
    
    &::after {
      left: -30px;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 52px solid #000;
    }
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: inline-block;
  background: #FFFACD;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border: 5px solid #000;
  box-shadow: 8px 8px 0 #000;
  border-radius: 0;
  animation: ${fadeInUp} 0.8s ease-out;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 11px 11px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    border-width: 4px;
    box-shadow: 6px 6px 0 #000;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.lg}`};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    border-width: 3px;
    box-shadow: 4px 4px 0 #000;
  }
`;

const TitleUnderline = styled.div`
  width: 120px;
  height: 6px;
  background: #000;
  margin: ${({ theme }) => theme.spacing.md} auto 0;
  border-radius: 0;
`;

const Subheading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 800;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing["3xl"]};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-transform: uppercase;
  color: #000;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-top: ${({ theme }) => theme.spacing["2xl"]};
  }
`;

const AllSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const SkillTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  user-select: none;
`;

const TileBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 0;
  background: #FFF;
  border: 4px solid #000;
  display: grid;
  place-items: center;
  box-shadow: 6px 6px 0 #000;
  transition: all 0.3s ease;

  img, svg { 
    width: 70px; 
    height: 70px;
  }

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0 #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90px;
    height: 90px;
    border-width: 3px;
    box-shadow: 5px 5px 0 #000;
    
    img, svg { 
      width: 50px; 
      height: 50px;
    }
  }
`;

const TileLabel = styled.span.attrs({ className: "skill-label" })`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  color: #000;
  text-align: center;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.3px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const PMGrid = styled(AllSkillsGrid)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .skill-label {
      display: inline-block;
    }
  }
`;

/* Minimal inline SVG icon set */
const getSkillIcon = (name: string) => {
  const n = name.toLowerCase();

  if (n.includes("quart")) {
    return (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="qg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c6d6f0"/>
            <stop offset="100%" stopColor="#1d0f60"/>
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="4" fill="url(#qg)"/>
        <path d="M10 5h4v2l2.5 2.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="10" cy="12.5" r="3.8" fill="none" stroke="#fff" strokeWidth="1.6"/>
        <path d="M16 9.5l3 3" stroke="#0c0633" strokeOpacity=".5" strokeWidth="2"/>
      </svg>
    );
  }

  if (n.includes("gsap")) {
    return (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#0b0b0b"/>
        <path d="M8 16l3.5-7 1.2 2.8H16l-3.5 7-1.2-2.8H8z" fill="#78d64b"/>
        <circle cx="16.5" cy="7.5" r="1.4" fill="#78d64b"/>
      </svg>
    );
  }

  if (n.includes("jwt")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/>
      </svg>
    );
  }

  if (n.includes("clean architecture")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="7" y="3" width="10" height="6" rx="1"/>
        <rect x="4" y="10" width="16" height="5" rx="1"/>
        <rect x="2" y="17" width="20" height="4" rx="1"/>
      </svg>
    );
  }

  if (n.includes("async")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M7 7a7 7 0 0 1 10 0l2-2M17 17a7 7 0 0 1-10 0l-2 2"/>
        <path d="M12 5v4M12 15v4"/>
      </svg>
    );
  }

  if (n.includes("service–repository") || n.includes("service-repository") || n.includes("repository")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="3" y="4" width="18" height="4" rx="1"/>
        <rect x="5" y="10" width="14" height="4" rx="1"/>
        <rect x="7" y="16" width="10" height="4" rx="1"/>
      </svg>
    );
  }

  if (n.includes("validation") || n.includes("error handling") || n.includes("error")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    );
  }

  if (n.includes("project management")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="3" y="4" width="18" height="14" rx="2"/>
        <path d="M7 9h6M7 13h10"/>
        <circle cx="9" cy="7" r="1"/>
      </svg>
    );
  }

  if (n.includes("system design")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="12" cy="5" r="2"/>
        <circle cx="6" cy="19" r="2"/>
        <circle cx="18" cy="19" r="2"/>
        <path d="M12 7v6M12 13l-5 4M12 13l5 4"/>
      </svg>
    );
  }

  if (n.includes("restful")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="3" y="6" width="18" height="12" rx="2"/>
        <path d="M6 12h6M16 12h2"/>
        <path d="M9 9v6"/>
      </svg>
    );
  }

  if (n.includes("websocket") || n.includes("websockets") || n.includes("socket.io") || n.includes("socket")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 12h14"/>
        <path d="M9 8l-4 4 4 4M15 8l4 4-4 4"/>
      </svg>
    );
  }

  if (n.includes("json server")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <path d="M7 9h10M7 13h6"/>
        <path d="M9 17h2"/>
      </svg>
    );
  }

  if (n.includes("nlp") || n.includes("transformer") || n.includes("hugging face")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M4 8h16M6 8c0 6 4 10 6 10s6-4 6-10"/>
        <path d="M8 18h8"/>
      </svg>
    );
  }

  if (n.includes("deployment")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M12 3v12"/>
        <path d="M8 7l4-4 4 4"/>
        <rect x="4" y="15" width="16" height="6" rx="2"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="12" cy="12" r="9"/>
      <path d="M8 12h8M12 8v8"/>
    </svg>
  );
};