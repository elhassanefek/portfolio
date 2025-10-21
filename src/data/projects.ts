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
    gallery: [],
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
    gallery: [],
    tags: ["React", "TypeScript", "Flask", "RoBERTa", "Hugging Face", "NLP", "Streaming"],
    color: "#FFE5E5",
    image: "/illustrations/sentiment.png",
    github: "https://github.com/elhassane-fekairi/sentiment-dashboard",
  },
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
    gallery: ["/illustrations/calm1.png"],
    tags: ["React", "GSAP", "JavaScript", "Animation", "E-Learning"],
    image: "/illustrations/calm.png",
    color: "#E8E5FF",
    github: "https://github.com/ounnane-abdelhak/calm-15",
  },
   {
     id: "5",
     title: "Green Spaces Management Application",
     description:
       "A web platform that helps communities manage and monitor urban green spaces by tracking planting areas, trash cans, and other urban infrastructure through an interactive map.",
     story:
       "This project was inspired by the growing need to manage urban green spaces efficiently. I aimed to create a tool that empowers local authorities and communities to track and improve the condition of parks, planting zones, and public spaces. Using React and Leaflet.js, I built an intuitive mapping interface that allows users to view, categorize, and edit various urban locations in real time, supported by a secure authentication system.",
     challenges: [
       "Integrating Leaflet.js for interactive map management.",
       "Implementing location CRUD operations with React state management.",
       "Ensuring a smooth and responsive map interaction experience.",
       "Designing a simple but effective authentication system.",
     ],
     features: [
       "Interactive map with categorized markers for locations.",
       "Add, edit, and delete location points in real time.",
       "User authentication for protected routes and features.",
       "Responsive, accessible design for mobile and desktop.",
       "Geolocation support for finding and marking user positions.",
     ],
     gallery: [],
     tags: ["React", "Leaflet.js", "Context API", "Vite", "CSS Modules"],
     color: "#E9F7EF",
     image: "/illustrations/planting.png",
     github: "https://github.com/elhassane-fekairi/green-spaces-management",
   },
   {
     id: "6",
     title: "Fast Pizza",
     description:
       "A responsive pizza ordering web app that allows users to browse an online menu, add pizzas to a shopping cart, and place orders through an interactive checkout form.",
     story:
       "This project was built to explore building smooth, modern user experiences with React while practicing state management and form handling. I wanted to recreate a realistic food ordering flow — from viewing an online menu to adding pizzas to the cart and submitting an order. The result is a clean, fast, and responsive single-page app that mimics a real online pizzeria ordering experience.",
     challenges: [
       "Designing a dynamic shopping cart system with React state management.",
       "Building a form-based ordering flow with validation and responsive UI.",
       "Maintaining cart persistence between routes using Context API.",
       "Ensuring a seamless experience across all device sizes.",
     ],
     features: [
       "Online pizza menu with detailed product cards.",
       "Add-to-cart and remove-from-cart functionality with live total updates.",
       "Interactive checkout form for placing orders.",
       "Responsive design optimized for mobile and desktop users.",
       "Clean component structure using React Router and Context API.",
     ],
     gallery: [],
     tags: ["React", "Context API", "React Router", "Tailwind CSS", "Vite"],
     color: "#FFF4E0",
     image: "/illustrations/pizza.png",
     github: "https://github.com/elhassane-fekairi/fast-pizza",
   },
   {
     id: "7",
     title: "Personal Portfolio Website",
     description:
       "A modern, animated, and fully responsive portfolio website designed to showcase my projects, skills, and background as a developer passionate about backend systems, AI, and frontend design.",
     story:
       "This project was built to represent who I am as a developer — combining clean design, fluid animations, and technical depth. I focused on making it both visually appealing and functionally solid. Using React and styled-components, I created a modular architecture with reusable components, smooth scroll-based navigation, and subtle motion effects powered by Framer Motion. The portfolio also highlights my most meaningful projects and includes interactive links for visitors to explore my work.",
     challenges: [
       "Designing a portfolio that balances aesthetics and performance.",
       "Implementing smooth animations using Framer Motion without layout shifts.",
       "Building reusable and well-structured UI components.",
       "Ensuring accessibility and responsiveness across all devices.",
     ],
     features: [
       "Dynamic project showcase with detailed descriptions and external links.",
       "Framer Motion animations for smooth transitions and section reveals.",
       "Scroll-based navigation and interactive menu highlighting active sections.",
       "Responsive design optimized for all screen sizes.",
       "Styled-components for maintainable and theme-friendly design.",
     ],
     gallery: [],
     tags: ["React", "TypeScript", "Styled-Components", "Framer Motion", "Vite"],
     color: "#E3F2FD",
     image: "/illustrations/portfolio.png",
     github: "https://github.com/elhassane-fekairi/portfolio",
     link: "https://fekairielhassane.vercel.app",
  },
];
