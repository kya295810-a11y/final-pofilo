export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  file?: string;
  featured?: boolean;
};

export const certifications: Certificate[] = [
  {
    id: 'google-digital',
    title: 'Google Digital Marketing & E-commerce',
    issuer: 'Google',
    date: '2023',
    image: '/certs/google-digital.png',
    file: '/certs/google-digital.pdf',
    featured: true,
  },
  {
    id: 'ga4',
    title: 'Google Analytics Individual Qualification',
    issuer: 'Google',
    date: '2022',
    image: '/certs/ga-qualification.png',
    file: '/certs/ga-qualification.pdf',
  },
  {
    id: 'awwards',
    title: 'Awwwards Honorable Mention',
    issuer: 'Awwwards',
    date: '2024',
    image: '/certs/awwards.png',
    file: '/certs/awwards.pdf',
  },
];
