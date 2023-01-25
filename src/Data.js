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
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import portfolio from "./assets/portfolio.jpg";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

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
    value: "+216 50 666 009",
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
  <FaReact />,
  <FaNodeJs />,
  <FaSass />,
  <FaFigma />,
];

export const experiences = [
  {
    id: 1,
    year: "July 2020 - Present",
    position: "Software Developer",
    company: "VERMEG for Banking & Insurance Software",
  },
  {
    di: 2,
    year: "January 2020 - March 2020",
    position: "Course Creator",
    company: "GoMyCode",
  },
  {
    id: 3,
    year: "October 2019 - December 2019",
    position: "FullStack JavaScript Instructor",
    company: "GoMyCode",
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
    img: work1,
    name: "project 1",
    category: "web",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Tunisia, Tunis",
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
