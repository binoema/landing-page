import { Profile } from '../models/profile.model';

/** Public default profile — safe to commit. Personal details go in `profile.private.ts`. */
export const PROFILE_DATA: Profile = {
  name: 'Your Name',
  title: 'Full-Stack Software Developer',
  tagline: 'Angular specialist building fast, accessible web experiences.',
  bio: 'I craft modern frontends with Angular and ship reliable full-stack solutions. Explore the skill routes below to see focused write-ups—and room for live demos you can add over time.',
  location: 'Your City, Country',
  email: 'hello@example.com',
  avatarInitials: 'YN',
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/your-username', icon: 'fa-brands fa-github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', icon: 'fa-brands fa-linkedin' },
    { label: 'Email', url: 'mailto:hello@example.com', icon: 'fa-solid fa-envelope' },
  ],
  skills: [
    {
      slug: 'angular',
      name: 'Angular',
      tagline: 'Enterprise UI with signals, standalone components, and modern control flow.',
      description:
        'My primary stack for SPAs and internal tools. I lean on standalone APIs, signal-based state, lazy routes, and strict TypeScript to keep large codebases maintainable.',
      icon: 'fa-brands fa-angular',
      accentClass: 'bg-gradient-to-br from-red-500 to-rose-600 bg-clip-text !text-transparent',
      hoverClass: 'from-red-500 to-rose-600',
      highlights: [
        {
          title: 'Architecture',
          description: 'Feature folders, smart/dumb components, and route-level code splitting.',
        },
        {
          title: 'State',
          description: 'Signals, computed values, and RxJS where streams still fit best.',
        },
        {
          title: 'Quality',
          description: 'Vitest/Jest, accessibility checks, and performance budgets in CI.',
        },
      ],
      technologies: ['Angular 21', 'Signals', 'RxJS', 'NgRx (when needed)', 'Tailwind CSS'],
    },
    {
      slug: 'typescript',
      name: 'TypeScript',
      tagline: 'Type-safe APIs from browser to server.',
      description:
        'Strong typing across the stack reduces regressions and documents intent. I use generics, discriminated unions, and strict compiler options in every project.',
      icon: 'fa-brands fa-js',
      accentClass: 'bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text !text-transparent',
      hoverClass: 'from-blue-500 to-indigo-600',
      highlights: [
        {
          title: 'Domain modeling',
          description: 'Shared types between frontend and backend contracts.',
        },
        {
          title: 'Tooling',
          description: 'ESLint, Prettier, and path aliases for monorepos.',
        },
        {
          title: 'Libraries',
          description: 'Publishing typed packages with clear public APIs.',
        },
      ],
      technologies: ['TypeScript 5.x', 'Strict mode', 'Zod / class-validator', 'OpenAPI'],
    },
    {
      slug: 'nodejs',
      name: 'Node.js',
      tagline: 'APIs, tooling, and server-driven workflows.',
      description:
        'REST and GraphQL backends, CLI tools, and build pipelines. I pair Node services with Angular frontends and deploy with containers or serverless where it fits.',
      icon: 'fa-brands fa-node-js',
      accentClass: 'bg-gradient-to-br from-emerald-500 to-teal-600 bg-clip-text !text-transparent',
      hoverClass: 'from-emerald-500 to-teal-600',
      highlights: [
        {
          title: 'APIs',
          description: 'Express/Fastify/Nest patterns with validation and OpenAPI docs.',
        },
        {
          title: 'Data',
          description: 'PostgreSQL, Prisma/TypeORM, caching, and background jobs.',
        },
        {
          title: 'Ops',
          description: 'Docker, health checks, structured logging, and env-based config.',
        },
      ],
      technologies: ['Node 22+', 'NestJS', 'PostgreSQL', 'Docker', 'JWT / OAuth2'],
    },
    {
      slug: 'testing',
      name: 'Testing & DX',
      tagline: 'Confidence through automation and great developer experience.',
      description:
        'Tests and tooling that pay off on every PR. I set up unit, integration, and e2e layers so teams can ship without fear.',
      icon: 'fa-solid fa-clipboard-check',
      accentClass: 'bg-gradient-to-br from-amber-500 to-orange-600 bg-clip-text !text-transparent',
      hoverClass: 'from-amber-500 to-orange-600',
      highlights: [
        {
          title: 'Unit & component',
          description: 'Vitest/Jest with Testing Library and meaningful assertions.',
        },
        {
          title: 'E2E',
          description: 'Playwright/Cypress flows for critical user journeys.',
        },
        {
          title: 'CI/CD',
          description: 'GitHub Actions, preview deploys, and conventional releases.',
        },
      ],
      technologies: ['Vitest', 'Playwright', 'GitHub Actions', 'Husky', 'Conventional Commits'],
    },
  ],
};
