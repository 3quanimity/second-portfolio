import React, { useState } from "react";
import "./Skills.scss";
import { coloredIcons } from "../../../data";
import { experiences } from "../../../data";
import { languages } from "../../../data";

const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="container" id="skills">
      <div className="title">
        <span>What I do</span>
        <h1>Skills And Experience</h1>
      </div>

      <div className="select">
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
      </div>

      <div className="skills">
        {active === 1 &&
          coloredIcons.map((icon, idx) => (
            <div className="icon" key={idx}>
              {icon}
            </div>
          ))}
      </div>

      <div className="experiencs">
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
      </div>

      {/* TODO: Add links to certificates */}
      <div className="languages-container">
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
      </div>
    </div>
  );
};

export default Skills;
