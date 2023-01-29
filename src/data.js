import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaAngular,
  FaGit,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import portfolio from "./assets/portfolio.jpg";
import workImg_1 from "./assets/projects-thumbnails/gpt3.png";
import workImg_2 from "./assets/projects-thumbnails/prev-portfolio.gif";
import workImg_3 from "./assets/projects-thumbnails/catalog.png";
import workImg_4 from "./assets/work4.png";
import workImg_5 from "./assets/work5.png";
import workImg_6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  {
    id: 1,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/haythem-ben-drissia/",
  },
  { id: 2, icon: <FaGithub />, link: "https://github.com/3quanimity" },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Haythem",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+21650666009",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "BenDrissiaHaythem@gmail.com",
  },
];

export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <SiTypescript />,
  <FaAngular />,
  <FaReact />,
  <FaSass />,
  <FaGit />,
];

export const coloredIcons = [
  <FaHtml5 color="#F06529" />,
  <FaCss3 color="#28A4D9" />,
  <DiJavascript color="#EFD81D" />,
  <SiTypescript color="#3178C6" />,
  <FaAngular color="#DD0031" />,
  <FaReact color="#5ED4F4" />,
  <FaSass color="#CF649A" />,
  <FaGit color="#EC4D28" />,
];

export const experiences = [
  {
    id: 1,
    year: "Jul 2020 - Present",
    position: "Software Developer",
    company: "VERMEG for Banking & Insurance Software",
  },
  {
    di: 2,
    year: "Jan 2020 - Mar 2020",
    position: "Course Creator",
    company: "GoMyCode",
  },
  {
    id: 3,
    year: "Oct 2019 - Dec 2019",
    position: "FullStack JavaScript Instructor",
    company: "GoMyCode",
  },
];

export const languages = [
  {
    id: 1,
    language: "English",
    level: "C1",
    certificate: "IELTS",
    certificateLink:
      "https://drive.google.com/file/d/1KHCmvTFZUL8ZefGfjbPY7umA-HKgjM9Y/view?usp=share_link",
  },
  {
    id: 2,
    language: "French",
    level: "C1",
    certificate: "TCF",
    certificateLink:
      "https://drive.google.com/file/d/1ggS1I7wtAX3tbqlwhX_PZbpJwpmtEKdp/view?usp=share_link",
  },
  {
    id: 3,
    language: "Arabic",
    level: "Native",
    certificate: null,
    certificateLink: null,
  },
];
export const finishes = [
  {
    id: 1,
    number: "3+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "0",
    itemName: "Satisfied Customers",
  },
  {
    id: 3,
    number: "0",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "0",
    itemName: "Clients Served",
  },
];

export const workImages = [
  {
    id: 1,
    img: workImg_1,
    name: "Showcase WebApp",
    category: "react",
    description: "A Responsive Fake Showcase WebApp for GPT-3",
    githubLink: "https://github.com/3quanimity/Modern-React-UI-UX-GPT-3",
    liveLink: "https://3quanimity.github.io/Modern-React-UI-UX-GPT-3/",
  },
  {
    id: 2,
    img: workImg_2,
    name: "My Previous Portfolio",
    category: "react",
    description: "Animated with a functional contact form & a map.",
    githubLink: "https://github.com/3quanimity/Portfolio-React",
    liveLink: "https://haythem-portfolio.netlify.app/",
  },
  {
    id: 3,
    img: workImg_3,
    name: "Catalog App",
    category: "angular",
    description:
      "A CRUD Angular App with Routing, Authentication & Authorization (use admin:admin to login).",
    githubLink: "https://github.com/3quanimity/catalog-angular-app",
    liveLink: "https://catalog-angular-app.vercel.app/catalog-angular-app/",
  },
];

export const workNavs = ["All", "Angular", "React"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Tunis, Tunisia",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "BenDrissiaHaythem@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+216 50 666 009",
  },
];
