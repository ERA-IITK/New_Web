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
  decision,
  hardware,
  localisation,
  mathematics,
  mlcv
} from '../assets';

const navLinks = [
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

const research = [
  {
    id: 'research-1',
    title: 'IEEE RO-MAN 2019',
    icon: frontend,
    year: '2019',
    type: 'Conference Paper',
    description:
      "Published at the 28th IEEE International Conference on Robot & Human Interactive Communication. This work highlights ERA's early research contributions in robotics and human-robot interaction.",
    link: 'https://paper-link-here',
  },
  {
    id: 'research-2',
    title: 'ICRA Technical Poster',
    icon: backend,
    year: '2022',
    type: 'Top 5 Poster',
    description:
      "ERA's technical proposal was selected among the Top 5 technical posters accepted at the IEEE International Conference on Robotics and Automation (ICRA 2022).",
    link: 'https://www.youtube.com/watch?v=U3kv0PN-7x0',
  },
  {
    id: 'research-3',
    title: 'IEEE/SICE SII',
    icon: ux,
    year: '2024',
    type: 'Conference Paper',
    description:
      "Research paper published in the 16th IEEE/SICE International Symposium on System Integration (SII 2024), showcasing our work in autonomous robotics.",
    link: 'https://paper-link-here',
  },
  {
    id: 'research-4',
    title: 'RoboCup Symposium',
    icon: prototyping,
    year: '2026',
    type: 'Submitted',
    description:
      "Research paper submitted to the RoboCup Symposium 2026, presenting our latest work developed through the RoboCup project.",
    link: 'https://drive.google.com/file/d/1-Qtn6ZhFEgJ89u4zeriIqfu2VxVylVtQ/view?usp=sharing',
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

const learning = [
  {
    name: 'Hardware & Electronics',
    icon: hardware,
    link: 'https://docs.google.com/document/d/18IWWnURLR_sW0XcY8_GPWlnXACgq0mKCAgx6hmIvkBQ/edit?usp=sharing',
    description: 'Build a strong foundation in embedded systems by learning STM32 programming, sensors, communication protocols, actuators, PCBs, and electronics that power ERA robots.',
  },
  {
    name: 'Localization & Motion Planning',
    icon: localisation,
    link: 'https://docs.google.com/document/d/1EH8QUN1ddCoz0diaKg9H5Z6Bax_UXN5kfkR5HD4YG3Y/edit?usp=sharing',
    description: 'Learn how autonomous robots estimate their position, build maps, and plan safe paths using concepts like localization, SLAM, path planning, and navigation algorithms.',
  },
  {
    name: 'ML & Computer Vision',
    icon: mlcv,
    link: 'https://docs.google.com/document/d/1E2JWMJuzsFVnEZLeMDWta_-wL1eV4_nDc-8LNKyT_tE/edit?usp=sharing',
    description: 'Explore machine learning fundamentals before diving into computer vision techniques such as image processing, object detection, tracking, and perception for robotics.',
  },
  {
    name: 'Decision Algorithms',
    icon: decision,
    link: 'https://docs.google.com/document/d/1vNwIKt7IBDYOjbJTHaHT-OwFkkETGlpc-YvV3FQ5whs/edit?usp=sharing',
    description: 'Understand how robots make intelligent decisions using finite state machines, behavior trees, game strategies, and high-level planning for dynamic environments.',
  },
  {
    name: 'Mathematics (Optional)',
    icon: mathematics,
    link: 'https://docs.google.com/document/d/1YV0j_b2G_cEQSRHOahz6DnNlkSyAEACSsvjxmUXs4Sw/edit?usp=sharing',
    description: 'Strengthen the mathematical foundations behind robotics with linear algebra, calculus, probability, optimization, and geometry. Helpful but not required to begin learning.',
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
    name: 'PHASR',
    image: leaderboard,
  },
  {
    id: 'project-2',
    name: 'PHASR',
    image: math,
  },
  {
    id: 'project-3',
    name: 'PHASR',
    image: leaderboard,
  },
  {
    id: 'project-4',
    name: 'PHASR',
    image: math,
  },
  {
    id: 'project-5',
    name: 'PHASR',
    image: leaderboard,
  },
];

const sponsorData = [
  {
    id: 'sponsor-1',
    name: 'IITK',
    Sponsor_logo: snt_logo,
    description:
      " Indian Institute of Technology, Kanpur",
    image: snt_bg,
    link: 'https://sntiitk.com/',
  },
  {
    id: 'sponsor-2',
    name: 'Noccarc',
    Sponsor_logo: noccarc_logo,
    description: 'Innovating At Every Step To Drive Advanced Technologies',
    image: noccarc_bg,
    link: 'https://sntiitk.com/',
  },
  {
    id: 'sponsor-3',
    name: 'Ansys',
    Sponsor_logo: ansys_logo,
    description: 'Powering Innovation That Drives Human Advancement',
    image: ansys_bg,
    link: 'https://www.ansys.com/en-in',
  },
];

export { services, projects, technologies, experiences, learning, research, navLinks, sponsorData };




