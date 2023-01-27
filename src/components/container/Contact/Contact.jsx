import React from "react";
import "./Contact.scss";
import { contacts, socialIcons } from "../../../data";
import { motion } from "framer-motion";

// TODO: implement emailjs to send emails
const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        className="title"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>

      <div className="contact-form">
        <motion.div
          className="contact-left-container"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Just Say Hi!</h3>
          <p className="contact_text">
            Opportunities, requests or questions, don't hesitate to contact me
            using the following form. (Yes, It works! 🧙🏼‍♂️)
          </p>
          {contacts.map((contact) => (
            <div className="contact-left" key={contact.id}>
              <div className="icon">{contact.icon}</div>
              <p>{contact.infoText}</p>
            </div>
          ))}
          <div className="social-icons">
            {socialIcons.map((socialIcon) => (
              <a href={socialIcon.link} target="_blank" rel="noreferrer">
                <div key={socialIcon.id}>{socialIcon.icon}</div>
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="contact-right-container"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="row">
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <textarea placeholder="message"></textarea>
          </div>
          <motion.div
            className="btn"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#">Send</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
