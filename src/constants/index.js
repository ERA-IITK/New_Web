import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  noccarc_logo,
  noccarc_bg,
  ansys_bg,
  ansys_logo,
  snt_bg,
  snt_logo,
  github,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Mechanical Design & Electronics',
    icon: frontend,
  },
  {
    title: 'Localisation',
    icon: backend,
  },
  {
    title: 'Design & Path Planning',
    icon: ux,
  },
  {
    title: 'Tracking',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'EXCAVATOR',
    Sponsor_logo: github,
    description: 'Developing an autonomous excavator for remote operation and enhanced safety through integrated sensors. Funded at 11,13,500 Rs',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://surge.iitk.ac.in/AnnualReport/report2021.pdf',
    demo: 'https://github.com/ERA-IITK',
  },
  {
    id: 'project-2',
    name: 'Competitions',
    Sponsor_logo: github,
    description:
      'ERA excels in the renowned RoboMaster AI Challenge, emphasizing autonomous robot design and strategy. We are also dedicated to RoboCup, specializing in mechatronics, control systems, and autonomous soccer-playing robots.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/ERA-IITK/Robomaster-AI-Challenge-2020',
    demo: 'https://github.com/ERA-IITK',
  },
  // {
  //   id: 'project-3',
  //   name: 'ICRA 2022',
  //   Sponsor_logo: github,
  //   description:
  //       'Recognition: Our Technical Proposal Ranked in the Top 5 and Technical Poster Accepted',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/ERA-IITK/ICRA_ai_challenge',
  //   demo: 'https://github.com/ERA-IITK',
  // },
  {
    id: 'project-3',
    name: 'BIRAC WC',
    Sponsor_logo: github,
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://github.com/ERA-IITK',
  },
  {
    id: 'project-4',
    name: 'DEXTER',
    Sponsor_logo: github,
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/ERA-IITK/Dexter',
    demo: 'https://github.com/ERA-IITK',
  },
  {
    id: 'project-5',
    name: 'IITK',
    Sponsor_logo: snt_logo,
    description: 
      " Indian Institute of Technology, Kanpur",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: snt_bg,
    link: 'https://sntiitk.com/',
    link: 'https://sntiitk.com/',
  },
  {
    id: 'project-6',
    Sponsor_logo: github,
    name: 'Noccarc',
    Sponsor_logo: noccarc_logo,
    description: 'Innovating At Every Step To Drive Advanced Technologies',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: noccarc_bg,
    link: 'https://www.noccarc.com/',
    link: 'https://www.noccarc.com/',
  },
  {
    id: 'project-7',
    name: 'Ansys',
    Sponsor_logo: ansys_logo,
    description: 'Powering Innovation That Drives Human Advancement',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ansys_bg,
    link: 'https://www.ansys.com/en-in',
    link: 'https://www.ansys.com/en-in',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   Sponsor_logo: noccarc_logo,
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   link: 'https://github.com/shaqdeff/Movie-Metro',
  //   link: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   Sponsor_logo: noccarc_logo,
  //   description:
  //     'This is a link concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   link: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   link: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, projects , technologies, experiences,  };




