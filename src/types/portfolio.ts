export interface Station {
  id: number;
  number: string;
  name: string;
  badge: string;
  subtitle: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  pct: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  period?: string;
  description: string;
  impact?: string;
  technologies: string[];
  highlights: string[];
  codeSnippet?: string;
  tech?: string;
  points?: string[];
}
