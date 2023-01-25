import React, { useState } from "react";
import "./Navbar.scss";
import { navLinks } from "../../data";
import { socialIcons } from "../../data";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Variant, motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <div className="header">
      <div className="nav_container">
        <div className="logo">
          <h3>H</h3>
        </div>
        <ul className="nav_links">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a href={navLink}>{navLink}</a>
            </li>
          ))}
        </ul>
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => (
            <div key={index}>{socialIcon}</div>
          ))}
        </div>

        {/* Mobile Menu  */}
        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
        <motion.div
          className="closeMenu"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>
        <motion.div
          className="menuX"
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
        >
          <HiX
            onClick={() => {
              setToggle(false);
            }}
          />
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a href={navLink}>{navLink}</a>
            </li>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
