// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  story: string;
  challenges: string[];
  features: string[];
  gallery?: string[];
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Project Management API",
    description:
      "A scalable backend for managing workspaces, projects, and tasks with real-time collaboration powered by Socket.IO. Features include JWT authentication, clean repository–service architecture, and event-driven updates.",
    story:
      "This project started from my curiosity about how tools like Notion or Jira handle collaboration behind the scenes. I wanted to build my own scalable system where teams could manage workspaces and tasks with real-time updates. What began as a simple CRUD API grew into a structured, event-driven backend powered by Socket.IO and a clean service–repository architecture. It taught me how to design APIs that are both maintainable and scalable, while supporting live user interactions.",
    challenges: [
      "Designing a scalable data model for nested workspaces, projects, and tasks.",
      "Implementing real-time task updates using Socket.IO.",
      "Maintaining clean architecture with repository and service layers.",
      "Ensuring secure authentication and authorization with JWT.",
    ],
    features: [
      "Workspace and project management system.",
      "Real-time task collaboration using Socket.IO.",
      "JWT authentication with role-based access control.",
      "Modular service–repository architecture for maintainability.",
      "Event-driven updates and efficient database queries.",
    ],
    gallery: [
      
    ],
    tags: ["Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    color: "#E5F4F3",
    image: "/illustrations/projectify.png",
    github: "https://github.com/elhassane-fekairi/project-management-api",
  },
  {
  id: "2",
  title: "Real-time Sentiment Analysis System",
  description:
    "An interactive sentiment analysis dashboard for social and manual text input, powered by RoBERTa and Hugging Face models. Built with Flask and React (TypeScript), featuring live analytics and streaming-ready architecture.",
  story:
    "This project came from my fascination with Natural Language Processing and real-time emotion tracking. I wanted to build something that could interpret and visualize emotions as they happen — not afterward. With Flask powering the backend and both RoBERTa and Hugging Face models handling sentiment inference, I developed a streaming-ready dashboard capable of analyzing live and manual text input in real time. React and TypeScript brought it all together with an interactive, data-driven interface. It became the perfect intersection of NLP, visualization, and full-stack engineering.",
  challenges: [
    "Integrating multiple NLP models (RoBERTa and Hugging Face transformers) for consistent predictions.",
    "Handling real-time data streams efficiently with Flask and async endpoints.",
    "Optimizing inference latency while maintaining model accuracy.",
    "Designing dynamic frontend charts that update seamlessly as new data arrives.",
  ],
  features: [
    "Dual-model sentiment analysis using RoBERTa and Hugging Face pipelines.",
    "Flask-based backend with asynchronous endpoints for live updates.",
    "Interactive dashboard visualizing positive, negative, and neutral sentiment trends.",
    "Real-time text analysis for both manual input and social media data streams.",
    "TypeScript-based React frontend with reusable data visualization components.",
  ],
  gallery: [
   
  ],
  tags: ["React", "TypeScript", "Flask", "RoBERTa", "Hugging Face", "NLP", "Streaming"],
  color: "#FFE5E5",
  image: "/illustrations/sentiment.png",
  github: "https://github.com/elhassane-fekairi/sentiment-dashboard",
}
,
  {
    id: "3",
    title: "E-Commerce Platform",
    description:
      "A full-stack multi-store e-commerce application with product management, role-based dashboards, order tracking, and cart functionality. Built using React, Node.js, and MongoDB.",
    story:
      "This project was one of my most challenging and rewarding experiences. I wanted to understand what it takes to build a real-world e-commerce platform from the ground up — with stores, dashboards, and complete order management. Through this, I learned to manage global state with Context API, integrate React Query for data synchronization, and design clean, modular APIs in Node.js. It taught me how complex systems come together to deliver a simple shopping experience.",
    challenges: [
      "Designing a multi-store architecture with shared components.",
      "Implementing dynamic dashboards for both sellers and customers.",
      "Handling authentication, cart persistence, and order states.",
      "Synchronizing data efficiently with React Query.",
    ],
    features: [
      "Role-based dashboards (admin, seller, customer).",
      "Product management and inventory tracking.",
      "Order tracking and payment handling (COD + future online).",
      "Context API and React Query for state and data management.",
      "Scalable Node.js + MongoDB backend with modular routes.",
    ],
    gallery: [
      "/illustrations/ecommerce1.png",
      "/illustrations/ecommerce2.png",
      "/illustrations/ecommerce3.png",

    ],
    tags: ["React", "Node.js", "MongoDB", "Context API", "React Query"],
    image: "/illustrations/ecommerce.png",

    color: "#FFE8DB",
    github: "https://github.com/elhassanefek/multi-role-ecommerce-platform",
  },
  {
    id: "4",
    title: "CPU Architecture Visualization",
    description:
      "An interactive e-learning project that visually demonstrates CPU operations and architecture concepts using GSAP animations. Designed to simplify how computer architecture works through animated storytelling.",
    story:
      "This project began as an attempt to make computer architecture less abstract and more visual. I wanted to show how a CPU actually works — how instructions move, how registers interact, how data flows. Using React and GSAP, I turned complex processes into smooth animations that students can follow visually. Beyond visualization, I also worked on the e-learning side — adding interactive quizzes for students to test their understanding and a documentation section to guide them through each concept. It became a creative blend of engineering, animation, and education.",
    challenges: [
      "Creating complex animations that accurately represent CPU operations.",
      "Synchronizing animations with educational explanations.",
      "Designing quizzes that adapt to user understanding.",
      "Building documentation and structured learning flow.",
    ],
    features: [
      "GSAP-powered animations for instruction cycles and data flow.",
      "Interactive quizzes to reinforce learning.",
      "Documentation and guided explanations for each module.",
      "Custom UI for step-by-step CPU operation visualization.",
      "Optimized performance for smooth playback and transitions.",
    ],
    gallery: [
      "/illustrations/calm1.png",
     
    ],
    tags: ["React", "GSAP", "JavaScript", "Animation", "E-Learning"],
    image: "/illustrations/calm.png",
    color: "#E8E5FF",
    github: "https://github.com/ounnane-abdelhak/calm-15",
  },
];
