// src/data/projects.ts
//
// Single source of truth for every project. Routes are /projects/:slug, and
// each slug is also the screenshots folder name (src/assets/screenshots/<slug>/).

import type { AccentKey } from "../styles/theme";

/** Keys of the architecture diagram components (src/components/diagrams/). */
export type DiagramKey = "transacta" | "nounoudz" | "camembert";

export interface Decision {
  title: string;
  why: string;
  tradeoff?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  featured: boolean;
  status?: string;
  role?: string;
  stack: string[];
  accent: AccentKey;
  /**
   * How the cover image fills its 16:10 frame. "cover" (default) crops to fill;
   * "contain" shows the whole image, centered on the surface with padding.
   */
  coverFit?: "cover" | "contain";
  links: { github?: string; live?: string };
  credits?: string;

  /** Archive pages (and screenshot-led featured pages): short description + features. */
  summary?: string;
  features?: string[];

  /** Case studies (featured projects). */
  problem?: string;
  architecture?: DiagramKey;
  decisions?: Decision[];
  testing?: string[];
  results?: string[];
  /** Engineering practices worth calling out separately from tests. */
  engineering?: string[];
  next?: string[];
}

export const projects: Project[] = [
  // ───────────────────────── Featured ─────────────────────────
  {
    slug: "transacta",
    title: "Transacta",
    tagline: "Multi-tenant double-entry ledger API",
    featured: true,
    status: "Backend API; runs locally with Docker Compose. Not deployed.",
    role: "Solo project",
    stack: [
      "Go",
      "PostgreSQL",
      "chi",
      "pgx",
      "JWT",
      "Prometheus",
      "Docker",
      "Testcontainers",
      "GitHub Actions",
    ],
    accent: "transacta",
    links: { github: "https://github.com/elhassanefek/transacta" },
    problem:
      "Products that move value (payments, credits, inventory) need atomic, auditable transfers that stay correct under concurrent requests, client retries and crashes.",
    architecture: "transacta",
    decisions: [
      {
        title: "Pessimistic sorted row locks at READ COMMITTED",
        why: "Chosen over SERIALIZABLE: no retry loops, and a fixed lock order removes deadlocks.",
        tradeoff: "Hot accounts serialize.",
      },
      {
        title: "Balances derived from entries, not stored",
        why: "One source of truth.",
        tradeoff: "The SUM grows with history.",
      },
      {
        title: "Idempotency with a 30s processing lease and a fencing token",
        why: "A stale server finishing late can't overwrite a newer result. This came from a real bug found and fixed. Responses are stored as TEXT for byte-exact replay.",
      },
      {
        title: "Transactional outbox + Postgres job queue",
        why: "No dual-write problem and no extra infrastructure.",
        tradeoff: "At-least-once delivery, up to 5s polling latency.",
      },
      {
        title: "tenant_id in every query instead of Postgres RLS",
        why: "Every query filters by tenant_id, and a cross-tenant ID returns the same not-found as a missing one, so there's no existence oracle.",
        tradeoff:
          "Enforced by convention: no row-level security backstop if a query forgets the filter.",
      },
    ],
    testing: [
      "About 95 test functions, including 29 integration tests on real PostgreSQL via Testcontainers.",
      '"Exactly one winner" race tests: concurrent idempotency claims, refresh-token rotation, webhook claims, pending-transaction posting.',
      "A concurrent transfer test asserting money is conserved.",
      "CI: lint, race-detector tests, Docker build.",
    ],
    results: [
      "Atomic N-leg transfers and two-phase pending → posted/failed transactions.",
      "Refresh-token rotation with reuse detection that revokes the whole session family.",
      "Per-tenant RBAC; audit log; Prometheus metrics; 4 Architecture Decision Records.",
    ],
    next: [
      'A reaper for webhook events stuck in "processing" after a crash.',
      "Reserve funds for pending transactions.",
      "Don't cache 5xx responses in idempotency.",
      "Rate limiting; a public demo deployment.",
    ],
  },
  {
    slug: "nounoudz",
    title: "NounouDZ",
    tagline: "Childcare marketplace for Algeria",
    featured: true,
    status:
      "MVP in development; runs end to end locally (Docker Compose + Android emulator). Not deployed.",
    role: "Solo project (backend and mobile app)",
    stack: [
      "Go",
      "chi",
      "Bun ORM",
      "PostgreSQL",
      "MinIO (S3)",
      "React Native",
      "Expo",
      "TypeScript",
      "TanStack Query",
      "i18next",
      "Docker",
      "Testcontainers",
      "GitHub Actions",
    ],
    accent: "nounoudz",
    // The cover is the logo with its tagline at the bottom; don't crop it.
    coverFit: "contain",
    // TODO(elhassane): repo is not public yet; add the GitHub link when it is.
    links: {},
    problem:
      "Parents need a trustworthy babysitter and clear agreed terms; babysitters need protection from conflicting commitments.",
    architecture: "nounoudz",
    decisions: [
      {
        title: "Double-booking prevented by a GiST exclusion constraint",
        why: "PostgreSQL rejects overlapping time ranges itself, rather than relying on application checks.",
        tradeoff:
          "Tied to PostgreSQL (btree_gist), and conflicts only surface at confirmation time as a 409.",
      },
      {
        title: "Sessions exist only after dual confirmation",
        why: "Open negotiations reserve nothing.",
        tradeoff: "Conflicts surface at confirm time.",
      },
      {
        title: "Immutable, versioned agreements",
        why: "Confirmation uses the version's own stored terms.",
        tradeoff: "More rows and a more complex read model.",
      },
      {
        title: "Transactional outbox in Postgres instead of a broker",
        why: "Retries, dead-letter state and stale-lock recovery. The stale-lock recovery was added after a real incident.",
        tradeoff:
          "At-least-once delivery, up to 2s polling latency, and the database doubles as the queue.",
      },
      {
        title: "Idempotency-key middleware",
        why: "Stores the response inside the business transaction.",
        tradeoff:
          "Fail-open: if the claim insert itself errors, the request still runs.",
      },
      {
        title: "Polling instead of WebSockets for the MVP",
        why: "Real-time transport was out of MVP scope in the spec; polling only runs while a screen is open (messages 4s, engagement 8s, lists 15s).",
        tradeoff: "Higher latency and more requests than push.",
      },
    ],
    testing: [
      "263 backend test functions running against containerized PostgreSQL.",
      "Concurrent goroutine race tests released by a WaitGroup barrier: exactly one of two overlapping confirmations wins.",
      "13 Jest suites on mobile.",
      "5-job GitHub Actions CI.",
    ],
    results: [
      "Trilingual app (French, English, Arabic).",
      "Phone/OTP auth with rotating refresh tokens.",
      "Staged privacy of children's medical information: aggregate during negotiation, full detail only after confirmation.",
    ],
    next: [
      "Deploy.",
      "Match the constraint error by SQLSTATE instead of the message string.",
      "De-duplicate notifications.",
      "Admin and verification UI.",
    ],
  },
  {
    slug: "camembert-feedback",
    title: "CamemBERT Feedback Classifier",
    tagline: "Student feedback classification (LMCS Lab, ESI)",
    featured: true,
    status: "Completed research project (2026)",
    role: "Co-developer",
    credits:
      "Co-developed with Samer Kamouche in an internship at the LMCS lab (EIAH team), ESI.",
    stack: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "scikit-learn",
      "pandas",
      "pydantic",
      "pytest",
      "Kaggle (T4 GPU)",
    ],
    accent: "camembert",
    // TODO(elhassane): GitHub link, if the repo can be public.
    links: {},
    problem:
      'Earlier ESI work used TF-IDF + SVM/KNN/MLP, which fails on rare classes: "accomplishment" is 2.8% of comments and neutral opinion 2.4%.',
    architecture: "camembert",
    decisions: [
      {
        title: "Leak-free splits",
        why: "Duplicate groups always stay in one partition. Before this, near-identical comments were leaking from train into test.",
      },
      {
        title: "Loss weights computed on the training split only",
        why: "Validation and test data never influence training.",
      },
      {
        title: "Decision threshold tuned on validation",
        why: "A grid of 17 values on the validation set (0.65 picked); the test set is used once.",
      },
      {
        title: "Comparisons kept in three separate groups",
        why: "Retrained baselines, replayed old models and historical published results are never merged.",
      },
    ],
    results: [
      "Motivation (multi-label: intrinsic, utility, accomplishment, cost): Macro-F1 0.620 → 0.764, vs 0.700 for the best classical baseline (TF-IDF + SVC).",
      "Accomplishment F1 went 0.154 → 0.786.",
      "Opinion (3-class): Macro-F1 0.807 with weighted cross-entropy; it found 7 of the 11 neutral test comments.",
    ],
    testing: ["110 pytest tests in 27 files."],
    engineering: [
      "Installable Python package with YAML configs.",
      "Every run logged: config, history, metrics, predictions, environment.",
    ],
    next: [
      "Multiple seeds/splits to measure variance.",
      "Per-label thresholds.",
      "Compare against FlauBERT.",
    ],
  },
  {
    slug: "gdg-events",
    title: "GDG Events Platform",
    tagline: "Admin & organizer dashboards",
    featured: true,
    // TODO(elhassane): status, and whether the platform is live.
    role: "Frontend: admin dashboard, organizer dashboard, meal-management module",
    stack: ["React", "TypeScript", "shadcn/ui"],
    accent: "gdgEvents",
    // TODO(elhassane): GitHub and/or live links.
    links: {},
    summary:
      "An all-in-one event management platform used to run GDG events end to end.",
    features: [
      "The admin dashboard: event oversight and logistics.",
      "The organizer dashboard: assigned tasks, sessions, announcements.",
      "The meal-management module: configure meals per event, track participant check-ins and attendance in real time.",
    ],
  },

  // ───────────────────────── Archive ─────────────────────────
  {
    slug: "project-management-api",
    title: "Project Management API",
    tagline: "Workspaces, projects and tasks with real-time updates",
    featured: false,
    // TODO(elhassane): status and role.
    stack: ["Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Jest"],
    accent: "mint",
    links: { github: "https://github.com/elhassanefek/projectify" },
    summary:
      "A backend for managing workspaces, projects and tasks, with real-time collaboration over Socket.IO. It uses JWT authentication and a repository–service architecture.",
    features: [
      "Workspace and project management system.",
      "Real-time task collaboration using Socket.IO.",
      "JWT authentication with role-based access control.",
      "Modular service–repository architecture for maintainability.",
      "Event-driven updates and efficient database queries.",
    ],
  },
  {
    slug: "sentiment-analysis",
    title: "Real-time Sentiment Analysis System",
    tagline: "Live sentiment dashboard powered by RoBERTa",
    featured: false,
    // TODO(elhassane): status and role.
    stack: ["React", "TypeScript", "Flask", "RoBERTa", "Hugging Face"],
    accent: "coral",
    // TODO(elhassane): GitHub link (the old link pointed to a GitHub account that does not exist).
    links: {},
    summary:
      "A sentiment analysis dashboard for live and manually entered text, using RoBERTa through Hugging Face. A Flask backend serves the models and a React + TypeScript frontend charts sentiment trends as results arrive.",
    features: [
      "Dual-model sentiment analysis using RoBERTa and Hugging Face pipelines.",
      "Flask-based backend with asynchronous endpoints for live updates.",
      "Interactive dashboard visualizing positive, negative, and neutral sentiment trends.",
      "Real-time text analysis for both manual input and social media data streams.",
      "TypeScript-based React frontend with reusable data visualization components.",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    tagline: "Multi-role React frontend for a multi-store shop",
    featured: false,
    // TODO(elhassane): status.
    role: "Frontend",
    stack: ["React", "React Query", "Context API"],
    accent: "blue",
    links: {
      github: "https://github.com/elhassanefek/multi-role-ecommerce-platform",
    },
    summary:
      "A multi-role e-commerce frontend built with React and React Query, with separate dashboards for admins, sellers and customers. It covers product management, the cart and order tracking.",
    features: [
      "Role-based dashboards (admin, seller, customer).",
      "Product management and inventory tracking.",
      "Order tracking and payment handling (COD + future online).",
      "Context API and React Query for state and data management.",
    ],
  },
  {
    slug: "calm-15",
    title: "Calm 15",
    tagline: "CPU architecture visualization for e-learning",
    featured: false,
    status: "Live",
    // TODO(elhassane): your role on the team.
    stack: ["React", "GSAP", "JavaScript"],
    accent: "lilac",
    links: {
      live: "https://calm-15.vercel.app/",
      github: "https://github.com/ounnane-abdelhak/calm-15",
    },
    // TODO(elhassane): teammates' names.
    credits: "Team project.",
    summary:
      "An interactive e-learning project that shows how a CPU executes instructions through GSAP animations. Each module comes with guided documentation and quizzes.",
    features: [
      "GSAP-powered animations for instruction cycles and data flow.",
      "Interactive quizzes to reinforce learning.",
      "Documentation and guided explanations for each module.",
      "Custom UI for step-by-step CPU operation visualization.",
      "Optimized performance for smooth playback and transitions.",
    ],
  },
  {
    slug: "green-spaces",
    title: "Green Spaces Management Application",
    tagline: "Map-based tracking of urban green spaces",
    featured: false,
    // TODO(elhassane): status and role.
    stack: ["React", "Leaflet.js", "Context API", "Vite", "CSS Modules"],
    accent: "green",
    // TODO(elhassane): GitHub link (the old link pointed to a GitHub account that does not exist).
    links: {},
    summary:
      "A web platform for managing urban green spaces: planting areas, trash cans and other infrastructure are tracked on an interactive Leaflet map. Authenticated users can add, edit and delete locations.",
    features: [
      "Interactive map with categorized markers for locations.",
      "Add, edit, and delete location points in real time.",
      "User authentication for protected routes and features.",
      "Responsive, accessible design for mobile and desktop.",
      "Geolocation support for finding and marking user positions.",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);

export const getProject = (slug: string | undefined) =>
  projects.find((p) => p.slug === slug);

export const projectPath = (slug: string) => `/projects/${slug}`;
