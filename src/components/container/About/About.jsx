import { motion } from 'framer-motion';
import React from 'react';
import portfolio from '../../../assets/portfolio.jpg';
import resume from '../../../assets/resume_en.pdf';
import { bios } from '../../../data';
import './About.scss';

const About = () => {
  const moveVariants = {
    animation: {
      y: [0, -5],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
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
            I'm a <mark>Frontend Software Developer</mark> with over 4 years of
            professional experience, bringing unique analytical skills from my
            background as an <mark>Agronomic Engineer</mark> and{' '}
            <mark>Forensic Research</mark>.
          </p>

          <p>
            Most recently, I worked at <mark>ConformIT</mark>, following three
            successful years at <mark>VERMEG Banking & Insurance</mark> where I
            developed complex financial applications. My deep experience with
            the JavaScript ecosystem includes working with <mark>Vue.js</mark>,{' '}
            <mark>Angular</mark>, and <mark>React</mark>, backed by strong
            TypeScript foundations.
          </p>

          <p align="LEFT">
            I'm actively seeking Frontend Developer opportunities where I can
            contribute my experience while continuing to grow and explore new
            technologies. I'm passionate about building intuitive, performant
            web applications that deliver real value to users.
          </p>
          {bios.map(bio => (
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
