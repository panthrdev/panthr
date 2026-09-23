export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  uxRationale: string;
  engineeringHighlights: string[];
  keyInteractions: string[];
  layoutVariant: "hero-viewport" | "editorial-split" | "spec-sheet" | "terminal-frame";
  featured: boolean;
  status: "Shipped" | "In Production" | "Internal System";
  liveUrl?: string;
  githubUrl?: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  date: string;
}
