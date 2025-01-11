import { DiJavascript } from 'react-icons/di';
import {
  FaAngular,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaReact,
  FaSass,
  FaUser,
  FaVuejs,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import workImg_1 from './assets/projects-thumbnails/gpt3.png';
import workImg_4 from './assets/projects-thumbnails/pokedex-app.png';
import workImg_5 from './assets/projects-thumbnails/vue-collection.png';

export const navLinks = ['home', 'about', 'skills', 'portfolio', 'contact'];

export const socialIcons = [
  {
    id: 1,
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/haythem-ben-drissia/',
  },
  { id: 2, icon: <FaGithub />, link: 'https://github.com/3quanimity' },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: 'Name',
    value: 'Haythem',
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: 'Phone',
    value: '+33 7 59 69 08 80',
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: 'Email',
    value: 'BenDrissiaHaythem@gmail.com',
  },
];

export const icons = [
  <FaVuejs />,
  <FaAngular />,
  <FaReact />,
  <FaSass />,
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <SiTypescript />,
];

export const coloredIcons = [
  <FaVuejs color="#4FC08D" />,
  <FaAngular color="#DD0031" />,
  <FaReact color="#5ED4F4" />,
  <FaSass color="#CF649A" />,
  <FaHtml5 color="#F06529" />,
  <FaCss3 color="#28A4D9" />,
  <DiJavascript color="#EFD81D" />,
  <SiTypescript color="#3178C6" />,
];

export const experiences = [
  {
    id: 1,
    year: 'Aug 2023 - Oct 2024',
    position: 'Frontend Developer',
    company: 'ConformIT',
  },
  {
    id: 2,
    year: 'Jul 2020 - Jul 2023',
    position: 'Frontend Developer',
    company: 'VERMEG Banking and Insurance Software',
  },
  {
    id: 3,
    year: 'Oct 2019 - Mar 2020',
    position: 'Full Stack Developer',
    company: 'GoMyCode',
  },
];

export const languages = [
  {
    id: 1,
    language: 'English',
    level: 'C1',
    certificate: 'IELTS',
    certificateLink:
      'https://drive.google.com/file/d/1KHCmvTFZUL8ZefGfjbPY7umA-HKgjM9Y/view?usp=share_link',
  },
  {
    id: 2,
    language: 'French',
    level: 'C1',
    certificate: 'TCF',
    certificateLink:
      'https://drive.google.com/file/d/1ggS1I7wtAX3tbqlwhX_PZbpJwpmtEKdp/view?usp=share_link',
  },
  {
    id: 3,
    language: 'Arabic',
    level: 'Native',
    certificate: null,
    certificateLink: null,
  },
];
export const finishes = [
  {
    id: 1,
    number: '3+',
    itemName: 'Years Of Experience',
  },
  {
    id: 2,
    number: '0',
    itemName: 'Satisfied Customers',
  },
  {
    id: 3,
    number: '0',
    itemName: 'Designed Items',
  },
  {
    id: 4,
    number: '0',
    itemName: 'Clients Served',
  },
];

export const workImages = [
  {
    id: 1,
    img: workImg_1,
    name: 'Showcase WebApp',
    category: 'react',
    description: 'A Responsive Fake Showcase WebApp for GPT-3',
    githubLink: 'https://github.com/3quanimity/Modern-React-UI-UX-GPT-3',
    liveLink: 'https://3quanimity.github.io/Modern-React-UI-UX-GPT-3/',
  },
  // {
  //   id: 2,
  //   img: workImg_2,
  //   name: 'My Previous Portfolio',
  //   category: 'react',
  //   description: 'Animated with a functional contact form & a map.',
  //   githubLink: 'https://github.com/3quanimity/Portfolio-React',
  //   liveLink: 'https://haythem-portfolio.netlify.app/',
  // },
  // {
  //   id: 3,
  //   img: workImg_3,
  //   name: 'Catalog App',
  //   category: 'angular',
  //   description:
  //     'A CRUD Angular App with Routing, Authentication & Authorization (use admin:admin to login).',
  //   githubLink: 'https://github.com/3quanimity/catalog-angular-app',
  //   liveLink: 'https://catalog-angular-app.vercel.app/catalog-angular-app/',
  // },
  {
    id: 4,
    img: workImg_4,
    name: 'Pokedex App',
    category: 'angular',
    description:
      'A CRUD Angular App with Routing & Authentication (use pika:pika to login).',
    githubLink: 'https://github.com/3quanimity/pokemon-app-angular',
    liveLink: 'https://pokemon-app-angular.vercel.app/pokemons',
  },
  {
    id: 5,
    img: workImg_5,
    name: 'Vue Mini Projects Collection',
    category: 'vue',
    description: 'A collection of mini projects built with Vue for practice.',
    githubLink: 'https://github.com/3quanimity/tuto-portfolio/tree/main',
    liveLink: 'https://hillstone-formation-vue3.vercel.app/#/',
  },
];

export const workNavs = ['All', , 'Vue', 'Angular', 'React'];
export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: 'Courbevoie, France',
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: 'BenDrissiaHaythem@gmail.com',
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: '+33 7 59 69 08 80',
  },
];
