type Slug = 'home' | 'about' | 'projects' | 'publications' | 'contact' | 'ai-evaluation' | 'clawbotcito';

export type Route = {
  path: string;
  name: string;
};

type Routes = Record<Slug, Route>;

export const routes: Routes = {
  home: {
    path: '/',
    name: 'Home',
  },
  about: {
    path: '/about',
    name: 'About',
  },
  projects: {
    path: '/projects',
    name: 'Projects',
  },
  publications: {
    path: '/publications',
    name: 'Publications',
  },
  contact: {
    path: '/contact',
    name: 'Contact',
  },
  'ai-evaluation': {
    path: 'https://saviaga.github.io/ai-safety-blog',
    name: 'AI Evaluation',
  },
  clawbotcito: {
    path: 'https://saviaga.com/Clawbotcito',
    name: '🦞',
  },
};

export const TOP_NAV: Route[] = [
  routes.about,
  routes.publications,
  routes.contact,
  routes.clawbotcito,
];

export const FOOTER_NAV: Route[] = [];
