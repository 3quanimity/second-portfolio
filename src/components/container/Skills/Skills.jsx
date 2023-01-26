import React, { useState } from "react";
import "./Skills.scss";
import { coloredIcons } from "../../../data";
import { experiences } from "../../../data";
import { languages } from "../../../data";
import { motion } from "framer-motion";

const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="container" id="skills">
      <motion.div
        className="title"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
        <span>What I do</span>
        <h1>Skills And Experience</h1>
      </motion.div>

      <motion.div
        className="select"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          Experience
        </button>
      </motion.div>

      <motion.div
        className="skills"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
        {active === 1 &&
          coloredIcons.map((icon, idx) => (
            <div className="icon" key={idx}>
              {icon}
            </div>
          ))}
      </motion.div>

      <motion.div
        className="experiencs"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
        {active === 2 &&
          experiences.map((experience) => (
            <div className="experience" key={experience.id}>
              <span>{experience.year}</span>
              <div className="position">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
              </div>
            </div>
          ))}
      </motion.div>

      {/* TODO: Add links to certificates */}
      <motion.div
        className="languages-container"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
        {languages.map((language) => {
          return (
            <div className="language" key={language.id}>
              <div className="level">{language.level} </div>
              <h4 className="certificate">
                {language.language} {language.certificate}
              </h4>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
