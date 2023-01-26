import React, { useEffect } from "react";
import "./Portfolio.scss";
import { workNavs, workImages } from "../../../data";
import { FiGithub, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [tab, setTab] = React.useState({ name: "all" });
  const [projects, setProjects] = React.useState([]);
  const [active, setActive] = React.useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setProjects(workImages);
    } else {
      const filteredWork = workImages.filter(
        (workImage) => workImage.category === tab.name
      );
      setProjects(filteredWork);
    }
  }, [tab]);

  const activateTab = (e, index) => {
    setTab({ name: e.target.innerText.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="container" id="portfolio">
      {/* Section Title  */}
      <motion.div
        className="title"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>

      {/* Navigation Buttons  */}
      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
        {workNavs.map((workNav, index) => (
          <button
            onClick={(e) => activateTab(e, index)}
            key={index}
            className={`${
              active === index ? "active " + workNav.toLowerCase() : ""
            }`}
          >
            {workNav}
          </button>
        ))}
      </motion.div>

      {/* Catalog  cards*/}
      <motion.div
        className="projects"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
      >
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.img} alt={`project-${project.id}`} />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hover-layer"
            >
              {/* TODO: update links */}
              <motion.a
                href="#"
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 1.3] }}
                transition={{ duration: 0.3 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="#"
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 1.3] }}
                transition={{ duration: 0.3 }}
              >
                <FiEye />
              </motion.a>
            </motion.div>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="talk"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="talk-left">
          <h3>
            Opportunities, requests or questions, <br />
            <span>Don't hesitate to reach out</span>
          </h3>
        </div>
        <motion.div
          className="talk-right"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#contact">Contact Me</a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
