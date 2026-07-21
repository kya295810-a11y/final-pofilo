export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  tools?: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Independent — Creative Developer',
    role: 'Creative Developer & Growth Engineer',
    period: '2021 — Present',
    location: 'Remote',
    bullets: [
      'Craft high-impact product experiences using modern web stack.',
      'Blend design systems, motion, and performance to raise conversions.',
      'Lead cross-functional teams and mentor front-end engineers.'
    ],
    tools: ['React', 'TypeScript', 'Framer Motion', 'Three.js', 'GSAP']
  },
  {
    id: 'exp-2',
    company: 'Acme Labs',
    role: 'Senior Frontend Engineer',
    period: '2019 — 2021',
    location: 'San Francisco, CA',
    bullets: [
      'Built modular, accessible components and design systems.',
      'Improved Lighthouse performance across core pages.',
      'Introduced motion-driven micro-interactions to improve UX.'
    ],
    tools: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: 'exp-3',
    company: 'Marketing Co.',
    role: 'Growth Marketer & Frontend',
    period: '2017 — 2019',
    location: 'Yangon, Myanmar',
    bullets: [
      'Designed and shipped A/B tested landing pages and funnels.',
      'Implemented analytics, tracking, and growth automation.'
    ],
    tools: ['Google Analytics', 'SEO', 'Content Marketing']
  }
];
