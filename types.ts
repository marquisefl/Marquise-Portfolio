export interface ResearchStat {
  value: string;
  label: string;
}

export interface ProjectSection {
  type?: 'text' | 'image' | 'challenge' | 'principles' | 'reflection';
  number?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  src?: string;
  alt?: string;
  stats?: ResearchStat[];
  bullets?: string[];
  items?: { title: string; description: string }[] | string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  imageUrl: string;
  heroImage?: string;
  tags: string[];
  client?: string;
  services?: string;
  industries?: string;
  date?: string;
  role?: string;
  duration?: string;
  tools?: string[];
  sections?: ProjectSection[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
