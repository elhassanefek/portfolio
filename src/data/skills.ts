// src/data/skills.ts
//
// Grouped exactly as on the resume. Rendered as tags, no levels or logos.

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Go", "TypeScript", "JavaScript", "SQL", "Python", "C", "C++"],
  },
  {
    title: "Backend",
    items: [
      "Go (chi, pgx, Bun ORM)", "Node.js", "Express", "FastAPI", "Flask",
      "REST APIs", "Concurrency control", "Idempotency", "Transactional outbox",
      "Job queues", "HMAC webhooks", "JWT & RBAC", "Multi-tenancy",
    ],
  },
  {
    title: "Data & Storage",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Supabase", "Firebase", "MinIO (S3)"],
  },
  {
    title: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "Expo", "TanStack Query", "i18next"],
  },
  {
    title: "Testing & DevOps",
    items: [
      "Testcontainers", "Go race detector", "pytest", "Jest", "Docker",
      "Docker Compose", "GitHub Actions", "Prometheus", "golangci-lint", "Git",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch", "Hugging Face Transformers (CamemBERT, RoBERTa)",
      "scikit-learn", "pandas", "TensorFlow",
    ],
  },
];
