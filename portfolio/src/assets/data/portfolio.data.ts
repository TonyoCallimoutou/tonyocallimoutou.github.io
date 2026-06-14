import { Experience, Project, SkillGroup } from '../../app/core/models/portfolio.models';

export const ROLES: string[] = [
  'Tech Lead Full-Stack',
  'Développeur Java / Angular',
  'Disponible en Freelance',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Backend',
    skills: ['Java', 'Spring Boot', 'Microservices', 'REST API', 'PostgreSQL', 'Clean Code', 'TDD', 'Archi. Hexagonale'],
  },
  {
    category: 'Frontend',
    skills: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'HTML', 'SCSS'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'Oracle Cloud', 'OpenShift', 'Jenkins', 'GitLab CI'],
  },
  {
    category: 'Méthodes',
    skills: ['Scrum', 'Kanban', 'Code Review', 'Mentorat', 'Gestion de projet'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    period: 'Avr. 2025 — présent',
    role: 'Tech Lead',
    company: 'Sopra Steria · Ministère de la Justice',
    current: true,
    description:
      "Pilotage technique d'une équipe de 8 développeurs sur une application nationale pour la Protection Judiciaire de la Jeunesse. Conception de l'architecture, standards qualité, CI/CD et mentorat des développeurs juniors.",
    tags: ['Java 17', 'Spring Boot 3', 'Angular 17', 'Kubernetes', 'OpenShift', 'Docker', 'GitLab CI'],
  },
  {
    period: 'Sep. 2022 — Avr. 2025',
    role: 'Développeur Full-Stack',
    company: 'Sopra Steria · Ministère de la Justice',
    current: false,
    description:
      'Développement de fonctionnalités Angular et Java Spring Boot, optimisation des requêtes PostgreSQL, mise en œuvre des principes SOLID et Clean Code, tests unitaires et revues de code.',
    tags: ['Java 11', 'Spring Boot 2', 'Angular 15', 'PostgreSQL', 'Docker', 'Jenkins'],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'ShopHex',
    description:
      'E-commerce microservices complet. Architecture hexagonale, Spring Boot 3, Angular 17, déployé sur Oracle Cloud OKE avec Helm et GitHub Actions CI/CD.',
    tags: ['Spring Boot', 'Angular', 'Kubernetes', 'Helm', 'Oracle Cloud', 'GitHub Actions'],
    github: 'https://github.com/TonyoCallimoutou/ShopHex',
    live: null,
    status: 'En cours',
  },
  {
    name: 'Portfolio',
    description:
      'Ce portfolio — application Angular one-page déployée sur GitHub Pages avec CI/CD automatisé via GitHub Actions.',
    tags: ['Angular', 'GitHub Pages', 'GitHub Actions', 'SCSS'],
    github: 'https://github.com/TonyoCallimoutou/tonyocallimoutou.github.io',
    live: null,
    status: 'En cours',
  },
];
