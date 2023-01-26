import React from "react";
import "./Home.scss";
import portfolio from "../../../assets/portfolio.png";

const Home = () => {
  return (
    <div className="container" id="home">
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
        <a href="contact">Contact Me</a>

        {/* Disappearing Tags  */}
        <div className="exp">3 Years Exp in IT</div>
        <div className="self">Self-Taught</div>
        <div className="engineer">Agro Engineer</div>
        <div className="phd">5 yrs PhD Studies</div>
      </div>
    </div>
  );
};

export default Home;
