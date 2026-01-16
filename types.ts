
export interface ProjectSection {
  title: string;
  content: string;
}

export interface ResearchStat {
  value: string;
  label: string;
}

export interface ResearchData {
  title: string;
  subtitle: string;
  description: string;
  stats: ResearchStat[];
  conclusion: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  // Detailed fields
  role?: string;
  duration?: string;
  tools?: string[];
  longDescription?: string;
  sections?: ProjectSection[];
  research?: ResearchData;
  gallery?: string[];
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
