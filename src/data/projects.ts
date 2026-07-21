export type Project = {
  id: string;
  title: string;
  role: string;
  tools: string[];
  summary: string;
  image?: string;
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Cinematic Landing — Product Launch',
    role: 'Design + Frontend',
    tools: ['React', 'Three.js', 'Framer Motion', 'GSAP'],
    summary: 'A cinematic product landing experience with textured hero, subtle 3D depth, and narrative scroll-driven interactions that increased engagement by 42%.',
    image: '/assets/project1.svg',
    live: '#',
    github: '#',
  }
];
