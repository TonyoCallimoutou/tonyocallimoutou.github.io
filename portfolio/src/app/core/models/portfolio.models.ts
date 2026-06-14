export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  current: boolean;
  description: string;
  tags: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
  status: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
