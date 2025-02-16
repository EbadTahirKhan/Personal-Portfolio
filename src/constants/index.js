import {
  problemsolver,
  self2,
  herobg,
  l3,
  l2,
  l4,
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  careerhub,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'project',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'Experience',
    title: 'Experience',
  },
];

const selfpro = {
  image1: self2,
  imagebg: herobg,
};

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Pixel Perfectionist',
    icon: mobile,
  },
  {
    title: 'Problem Solver',
    icon: problemsolver,
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
    name: 'git',
    icon: git,
  },

];

const experiences = [

  {
    title: 'Responsive web design',
    company_name: 'FreeCode Camp',
    icon: l3,
    iconBg: '#E6DEDD',
    date: 'Dec 2022',
    points: [
      'Learned a lot of basics to advance responsive  designing ',
      'created four projects at the end of the course',
      'Course taught me a lot of thigs like flex-box, grid ',
    ],
  },
  {
    title: 'Javascript Algorithms and Data Structures',
    company_name: 'Geeks for Geeks',
    icon: l2,
    iconBg: '#383E56',
    date: 'Feb 2023 ',
    points: [
      'This cousre taught me basic to advance level of javascript',
      'It ncludes asynchronous javascript to and other cool stuff with javascript',
      'Javascripts is a great language to work with ',
      'made four project by the end of the project ',
    ],
  },
  {
    title: 'React Develpment ',
    company_name: 'React.dev',
    icon: l4,
    iconBg: '#E6DEDD',
    date: 'Sep 2023 - Present',
    points: [
      'React is a a great Library to work an provides fast and modular design',
      'JSX paints the canvas bright, components bloom in modular light.',
      "From simple form to grandest screen, React's magic, a developer's dream.",
      ' React empowers developers to architect performant UIs with modular ease.',
    ],
  },
];

const projects = [
  {
    name: 'CareerHub',
    description:
      'CareerHub is a web application that provides job listings and job seekers with a platform to search and apply for jobs. It is built using React, mySQL, and Node.js.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mySQL',
        color: 'yellow-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'blue-text-gradient',
      },
    ],
    image: careerhub,
    source_code_link: '– https://careerhub-portal.vercel.app/',
  },
];

export { services, technologies, experiences, projects, selfpro };
