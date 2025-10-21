export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS",
      "Styled Components",
      "TanStack Query",
      
      "Redux",
       "Tailwind",
      "GSAP",
     
      "Vite",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Flask",
      "Express.js",
      "FastAPI",
     
      "MongoDB",
      "Mongoose",
      "JWT",
      "Socket.IO" 
    ],
  },
  {
    category: "Machine Learning / AI",
    skills: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
 
      "NLP (RoBERTa, Hugging Face Transformers)",
    
      "Docker (Containerization)",
     
      "Model Deployment (FastAPI / Local / Cloud)",
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git & GitHub",
      "Docker",
      "Postman",
     
      "Figma",
      "npm",
      
    
      "JSON Server (Mock APIs)",
    ],
  },
  {
    category: "Project Management & Architecture",
    skills: [
      "Clean Architecture",
      "API Documentation (OpenAPI / Swagger)",
      "Async Programming",
      "WebSockets",
      "Task & Project Management Systems",
      "System Design Basics",
      "Service–Repository Pattern",
      "Error Handling & Validation",
      "RESTful APIs",
    ],
  },
];
