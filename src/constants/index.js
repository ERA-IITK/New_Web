import {
  // Reseach
  frontend,
  backend,
  ux,
  prototyping,

  // Technologies
  // html,
  // css,
  // javascript,
  // typescript,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // rubyrails,
  // graphql,
  // postgresql,
  // git,
  // figma,
  // docker,

  // Projects
  phasr,
  dexter1,
  excavator,
  dexter2,
  birac_wheelchair,

  // Learning
  hardware,
  localisation,
  mlcv,
  decision,
  mathematics,

  // Experiences
  // coverhunt,
  // microverse,
  // kelhel,
  // dcc,

  // Sponsors
  iitk_logo,
  noccarc_logo,
  ansys_logo,
  ieee_logo,
  aws_logo,
  nvidia_logo,
  dji_logo,
  hyundai_logo,

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

const research = [
  {
    id: 'research-1',
    title: 'IEEE RO-MAN 2019',
    icon: frontend,
    year: '2019',
    type: 'Conference Paper',
    description:
      "Published at the 28th IEEE International Conference on Robot & Human Interactive Communication. This work highlights ERA's early research contributions in robotics and human-robot interaction.",
    link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8956383',
  },
  {
    id: 'research-2',
    title: 'ICRA Technical Poster',
    icon: backend,
    year: '2022',
    type: 'Top 5 Poster',
    description:
      "ERA's technical proposal was selected among the Top 5 technical posters accepted at the IEEE International Conference on Robotics and Automation (ICRA 2022).",
    link: 'https://drive.google.com/file/d/1X0Ad9LHDMSBFs8DCjO4SiEksCpd6uBbM/view',
  },
  {
    id: 'research-3',
    title: 'IEEE/SICE SII',
    icon: ux,
    year: '2024',
    type: 'Conference Paper',
    description:
      "Research paper published in the 16th IEEE/SICE International Symposium on System Integration (SII 2024), showcasing our work in autonomous robotics.",
    link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10417488',
  },
  {
    id: 'research-4',
    title: 'RoboCup Symposium',
    icon: prototyping,
    year: '2026',
    type: 'Paper',
    description:
      "Research paper submitted to the RoboCup Symposium 2026, presenting our latest work developed through the RoboCup project.",
    link: 'https://drive.google.com/file/d/1-Qtn6ZhFEgJ89u4zeriIqfu2VxVylVtQ/view?usp=sharing',
  },
];

// const technologies = [
//   {
//     name: 'HTML 5',
//     icon: html,
//   },
//   {
//     name: 'CSS 3',
//     icon: css,
//   },
//   {
//     name: 'JavaScript',
//     icon: javascript,
//   },
//   {
//     name: 'TypeScript',
//     icon: typescript,
//   },
//   {
//     name: 'React JS',
//     icon: reactjs,
//   },
//   {
//     name: 'Redux Toolkit',
//     icon: redux,
//   },
//   {
//     name: 'Tailwind CSS',
//     icon: tailwind,
//   },
//   {
//     name: 'Node JS',
//     icon: nodejs,
//   },
//   {
//     name: 'Rails',
//     icon: rubyrails,
//   },
//   {
//     name: 'graphql',
//     icon: graphql,
//   },
//   {
//     name: 'postgresql',
//     icon: postgresql,
//   },
//   {
//     name: 'git',
//     icon: git,
//   },
//   {
//     name: 'figma',
//     icon: figma,
//   },
//   {
//     name: 'docker',
//     icon: docker,
//   },
// ];

const projects = [
  {
    id: 'project-1',
    name: 'PHASR',
    image: phasr,
  },
  {
    id: 'project-2',
    name: 'Dexter 1.0',
    image: dexter1,
  },
  {
    id: 'project-3',
    name: 'Excavator',
    image: excavator,
  },
  {
    id: 'project-4',
    name: 'Dexter 2.0',
    image: dexter2,
  },
  {
    id: 'project-5',
    name: 'BIRAC Wheelchair',
    image: birac_wheelchair,
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

// const experiences = [
//   {
//     title: 'Front-End Developer',
//     company_name: 'Cover Hunt',
//     icon: coverhunt,
//     iconBg: '#333333',
//     date: 'Aug 2021 - Feb 2022',
//   },
//   {
//     title: 'Mentor (Volunteer)',
//     company_name: 'Microverse',
//     icon: microverse,
//     iconBg: '#333333',
//     date: 'Mar 2022 - May 2022',
//   },
//   {
//     title: 'Junior Software Engineer',
//     company_name: 'Kelhel',
//     icon: kelhel,
//     iconBg: '#333333',
//     date: 'May 2022 - Oct 2022',
//   },
//   {
//     title: 'Full Stack Developer',
//     company_name: 'Diversity Cyber Council',
//     icon: dcc,
//     iconBg: '#333333',
//     date: 'Sep 2022 - Present',
//   },
// ];

const sponsorData = [
  {
    id: 'sponsor-1',
    name: 'IITK',
    description: 'The Indian Institute of Technology Kanpur, supporting innovation, research, and technological excellence.',
    link: 'https://www.iitk.ac.in/',
    logo: iitk_logo,
  },

  {
    id: 'sponsor-2',
    name: 'Noccarc',
    description: 'Building advanced robotic and automation solutions to transform industrial processes.',
    link: 'https://noccarc.com/',
    logo: noccarc_logo,
  },

  {
    id: 'sponsor-3',
    name: 'Ansys',
    description: 'Engineering simulation software that enables teams to design, test, and build innovative products.',
    link: 'https://www.ansys.com/en-in',
    logo: ansys_logo,
  },

  {
    id: 'sponsor-4',
    name: 'IEEE',
    description: 'A global technical community advancing technology, engineering, and innovation through research and collaboration.',
    link: 'https://www.ieee.org/',
    logo: ieee_logo,
  },

  {
    id: 'sponsor-5',
    name: 'AWS',
    description: 'Cloud computing infrastructure and services enabling teams to build, deploy, and scale technology.',
    link: 'https://aws.amazon.com/',
    logo: aws_logo,
  },

  {
    id: 'sponsor-6',
    name: 'NVIDIA',
    description: 'Accelerating robotics and artificial intelligence through powerful computing platforms and technologies.',
    link: 'https://www.nvidia.com/',
    logo: nvidia_logo,
  },

  {
    id: 'sponsor-7',
    name: 'DJI',
    description: 'Developing advanced robotics, drones, and intelligent systems that push the boundaries of autonomous technology.',
    link: 'https://www.dji.com/',
    logo: dji_logo,
  },

  {
    id: 'sponsor-8',
    name: 'Hyundai',
    description: 'Driving the future of mobility through robotics, autonomous systems, and innovative engineering.',
    link: 'https://www.hyundai.com/',
    logo: hyundai_logo,
  },
];

const achievements = [
  { 
    year: "2018", 
    category: "Founding", 
    title: "Team ERA Founded", 
    location: "IIT Kanpur", 
    description: "Team ERA was founded under Prof. Laxmidhar Behera with a focus on research and development in autonomous robotics.", 
  },
  {
    year: "2019",
    category: "Competition",
    title: "DJI RoboMaster Challenge",
    location: "Shenzhen, China",
    description:
      "Secured Overall 3rd Position among international teams in the DJI RoboMaster Challenge.",
  },
  {
    year: "2019",
    category: "Research",
    title: "IEEE RO-MAN 2019",
    location: "New Delhi, India",
    description:
      "Published a research paper at the 28th IEEE International Conference on Robot & Human Interactive Communication (RO-MAN 2019).",
  },
  {
    year: "2020",
    category: "Competition",
    title: "DJI RoboMaster Challenge",
    location: "Online",
    description:
      "Recognized for Outstanding Performance in Perception and Navigation.",
  },
  {
    year: "2022",
    category: "Publication",
    title: "ICRA 2022",
    location: "Philadelphia, USA",
    description:
      "Technical proposal ranked in the Top 5 and research poster accepted at ICRA.",
  },
  {
    year: "2022",
    category: "Competition",
    title: "DJI RoboMaster AI Challenge",
    location: "International",
    description:
      "Finished Overall 3rd among 40+ international teams competing in autonomous robotics.",
  },
  {
    year: "2024",
    category: "Competition",
    title: "RoboCup MSL",
    location: "Eindhoven, Netherlands",
    description:
      "Qualified for the RoboCup MSL Ambition Challenge, becoming the first Indian team to do so.",
  },
  {
    year: "2024",
    category: "Research",
    title: "IEEE/SICE SII 2024",
    location: "Honolulu, USA",
    description:
      "Published a research paper at the 16th IEEE/SICE International Symposium on System Integration (SII 2024).",
  },
  {
    year: "2025",
    category: "Competition",
    title: "RoboCup MSL",
    location: "Salvador, Brazil",
    description:
      "Qualified for the RoboCup MSL Main Challenge as the first Indian team ever.",
  },
  {
    year: "2025",
    category: "Competition",
    title: "Inter IIT Tech Meet",
    location: "India",
    description:
      "Won Gold Medal for the Eternal Robotics Problem Statement at Inter IIT Tech Meet 14.0.",
  },
  {
    year: "2026",
    category: "Research",
    title: "RoboCup Symposium 2026",
    location: "Seoul, South Korea",
    description:
      "Submitted a research paper on our Localisation Algorithm to the RoboCup Symposium 2026.",
  },
];

// ```js
// const achievements = [
//   {
//     year: "2018",
//     category: "Founding",
//     title: "Team ERA Founded",
//     location: "IIT Kanpur",
//     description:
//       "Team ERA was founded under Prof. Laxmidhar Behera with a focus on research and development in autonomous robotics.",
//   },

//   {
//     year: "2019",
//     category: "Research",
//     title: "IEEE RO-MAN 2019",
//     location: "New Delhi, India",
//     description:
//       "Published a research paper at the 28th IEEE International Conference on Robot & Human Interactive Communication (RO-MAN 2019), marking one of ERA's early research contributions.",
//   },

//   {
//     year: "2019",
//     category: "Competition",
//     title: "DJI RoboMaster Challenge",
//     location: "Shenzhen, China",
//     description:
//       "Secured Overall 3rd Position among international teams in the DJI RoboMaster Challenge.",
//   },

//   {
//     year: "2020",
//     category: "Competition",
//     title: "DJI RoboMaster Challenge",
//     location: "Online",
//     description:
//       "Recognized for Outstanding Performance in Perception and Navigation in the DJI RoboMaster Challenge.",
//   },

//   {
//     year: "2022",
//     category: "Research",
//     title: "ICRA Technical Poster",
//     location: "Philadelphia, USA",
//     description:
//       "ERA's technical proposal was recognized among the Top 5 technical posters and the technical poster was accepted at the IEEE International Conference on Robotics and Automation (ICRA 2022).",
//   },

//   {
//     year: "2022",
//     category: "Competition",
//     title: "DJI RoboMaster AI Challenge",
//     location: "International",
//     description:
//       "Secured Overall 3rd Position among 40+ international teams in the DJI RoboMaster AI Challenge 2022.",
//   },

//   {
//     year: "2024",
//     category: "Competition",
//     title: "RoboCup MSL Ambition Challenge",
//     location: "Eindhoven, Netherlands",
//     description:
//       "Qualified for the RoboCup Middle Size League Ambition Challenge, becoming the first and only Indian team to achieve this.",
//   },

//   {
//     year: "2024",
//     category: "Research",
//     title: "IEEE/SICE SII 2024",
//     location: "Honolulu, USA",
//     description:
//       "Published a research paper at the 16th IEEE/SICE International Symposium on System Integration (SII 2024), showcasing ERA's work in autonomous robotics.",
//   },

//   {
//     year: "2025",
//     category: "Competition",
//     title: "Inter IIT Tech Meet 14.0",
//     location: "India",
//     description:
//       "Won the Gold Medal for the Eternal Robotics Problem Statement at Inter IIT Tech Meet 14.0.",
//   },

//   {
//     year: "2025",
//     category: "Competition",
//     title: "RoboCup MSL Main Challenge",
//     location: "Salvador, Brazil",
//     description:
//       "Qualified for the RoboCup MSL Main Challenge, becoming the first and only Indian team to achieve this.",
//   },

//   {
//     year: "2026",
//     category: "Competition",
//     title: "RoboCup MSL 2026",
//     location: "Seoul, South Korea",
//     description:
//       "Qualified for RoboCup MSL 2026 in Seoul, South Korea, continuing ERA's journey on the international RoboCup stage.",
//   },

//   {
//     year: "2026",
//     category: "Research",
//     title: "RoboCup Symposium 2026",
//     location: "Seoul, South Korea",
//     description:
//       "Submitted a research paper to the RoboCup Symposium 2026, presenting recent work developed through the RoboCup project.",
//   },
// ];
// ```


export { projects, learning, research, navLinks, sponsorData, achievements };