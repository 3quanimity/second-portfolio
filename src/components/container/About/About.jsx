import React from "react";
import "./About.scss";
import portfolio from "../../../assets/portfolio.png";
import resume from "../../../assets/resume_en.pdf";
import { bios } from "../../../data";
import { motion } from "framer-motion";

const About = () => {
  const moveVariants = {
    animation: {
      y: [0, -5],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.7,
        delay: 1,
      },
    },
  };

  return (
    <div className="container" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        // transition={{ duration: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About me</h1>
      </motion.div>
      <div className="about-container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about-left"
        >
          <motion.img
            src={portfolio}
            whileHover={{ y: -28, x: -35 }}
            transition={{ duration: 0.3 }}
            alt="about-img"
          />
        </motion.div>
        <motion.div
          className="about-right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
          <motion.a
            href={resume}
            download
            variants={moveVariants}
            animate="animation"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
