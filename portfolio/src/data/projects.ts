// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "#FFE5E5",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Socket.io"],
    color: "#E5F4F3",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tags: ["React", "API Integration", "Charts.js", "Tailwind"],
    color: "#FFE8DB",
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    id: "4",
    title: "Portfolio Generator",
    description:
      "A tool to help developers create stunning portfolio websites with customizable themes and templates.",
    tags: ["Vue.js", "Firebase", "SCSS", "Markdown"],
    color: "#E8E5FF",
    link: "https://example.com",
    github: "https://github.com",
  },
];
