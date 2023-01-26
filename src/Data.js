import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaAngular,
  FaGit,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import portfolio from "./assets/portfolio.jpg";
import workImg_1 from "./assets/work1.png";
import workImg_2 from "./assets/work2.png";
import workImg_3 from "./assets/work3.png";
import workImg_4 from "./assets/work4.png";
import workImg_5 from "./assets/work5.png";
import workImg_6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [<FaLinkedin />, <FaGithub />];

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

// TODO: update this and include links
export const workImages = [
  {
    id: 1,
    img: workImg_1,
    name: "project 1",
    category: "angular",
  },
  {
    id: 2,
    img: workImg_2,
    name: "project 2",
    category: "angular",
  },
  {
    id: 3,
    img: workImg_3,
    name: "project 3",
    category: "angular",
  },
  {
    id: 4,
    img: workImg_4,
    name: "project 4",
    category: "react",
  },
  {
    id: 5,
    img: workImg_5,
    name: "project 5",
    category: "react",
  },
  {
    id: 6,
    img: workImg_6,
    name: "project 6",
    category: "react",
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
