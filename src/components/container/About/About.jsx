import React from "react";
import "./About.scss";
import portfolio from "../../../assets/portfolio.png";
import { bios } from "../../../data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="title">
        <span>Who Am I?</span>
        <h1>About me</h1>
      </div>
      <div className="about-container">
        <div className="about-left">
          <img src={portfolio} alt="about-img" />
        </div>
        <div className="about-right">
          <p>
            I'm a <mark>Self-Taught Developer</mark>, originally a
            graduated&nbsp;
            <mark>Agronomic Engineer</mark> with{" "}
            <mark>5 years Forensic Entomology PhD studies</mark>.
          </p>
          <p>
            I've been professionally occupying the post of{" "}
            <mark>Frontend Software Developer</mark> with{" "}
            <mark>VERMEG for Banking & Insurance</mark> for the past{" "}
            <mark>~3 yrs</mark>. Fell in love with the JavaScript ecosystem,
            which only amplified my geekiness & passion for learning.
          </p>
          <p align="LEFT">
            I'm looking for a Frontend position, and I'm open to learning and
            trying new technologies, even though I'm experienced in{" "}
            <mark>Angular</mark> and still love <mark>React</mark>.
          </p>
          {bios.map((bio) => (
            <div className="bio" key={bio.id}>
              <span className="bio-key">
                {bio.icon}
                {bio.key}
              </span>
              <span className="bio-value">{bio.value}</span>
            </div>
          ))}
          {/* TODO: Fix download Button */}
          <motion.a
            href="../../../assets/resume_en.pdf"
            download
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
