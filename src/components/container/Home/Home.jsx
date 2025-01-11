import { motion } from 'framer-motion';
import React from 'react';
import portfolio from '../../../assets/portfolio.png';
import './Home.scss';

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -10],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.7,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      initial={{ y: +50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="container"
      id="home"
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio-img" />
      </div>
      <div className="profile-text">
        <h3>Hi👋,</h3>
        <h3>
          I'm<span className="name"> Haythem</span>
        </h3>
        <span className="job">A Web Developer</span>
        <span className="text">
          Lo-Fi Lover / Gamer / ...and Aspiring Astronaut
        </span>
        <motion.a
          href="#contact"
          variants={moveVariants}
          animate="animation"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Contact Me
        </motion.a>

        {/* Disappearing Tags  */}
        <div className="exp">4+ Years Exp in IT</div>
        <div className="self">Self-Taught</div>
        <div className="engineer">Engineer</div>
        <div className="phd">5 yrs PhD Studies</div>
      </div>
    </motion.div>
  );
};

export default Home;
