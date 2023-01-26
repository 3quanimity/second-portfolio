import React from "react";
import "./Footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
    >
      <div className="copyright">
        <p>
          {/* Copyright&copy;2022 All rights reserved. |  */}
          Made with 🧡 and ☕.
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
