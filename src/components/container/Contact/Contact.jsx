import React from "react";
import "./Contact.scss";
import { contacts, socialIcons } from "../../../data";
import { motion } from "framer-motion";

// TODO: implement emailjs to send emails
const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="title">
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </div>

      <div className="contact-form">
        <div className="contact-left-container">
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
            {socialIcons.map((socialIcon, index) => (
              <div key={index}>{socialIcon}</div>
            ))}
          </div>
        </div>
        <div className="contact-right-container">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
