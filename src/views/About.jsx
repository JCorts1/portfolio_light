import React from "react";
import "../styles/About.css";
import Navbar from "../components/Navbar";
import GreenAvatar from "../img/about-img/green_back.jpg";
import htmllogo from "../img/about-img/HTML.gif";
import csslogo from "../img/about-img/CSS.gif";
import tailwind from "../img/about-img/tailwind.png";
import bootstrap from "../img/about-img/bootstrap.png";
import figmalogo from "../img/about-img/figma.gif";
import javascriptlogo from "../img/about-img/jslogo.gif";
import reactlogo from "../img/about-img/react.gif";
import stimuluslogo from "../img/about-img/stimulus.png";
import rubylogo from "../img/about-img/ruby.png";
import railslogo from "../img/about-img/rails.png";
import githublogo from "../img/about-img/github.gif";
import postgreslogo from "../img/about-img/postgresql.png";

const About = () => {
  return (
    <div className="about-father">
      <div className="about-filter">
        <div className="about-nav">
          <Navbar />
        </div>
        <div className="about-card">
          <div className="avatar">
            <img src={GreenAvatar} alt="" />
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hey! You can call me Jay! I am a Web Developer with a strong
                foundation in full-stack development. Graduated from Le Wagon
                Bootcamp. With more than one year of experience.
              </p>
            </div>
            <div className="about-technologies">
              <img className="technologies-icon" src={htmllogo} alt="" />
              <img className="technologies-icon" src={csslogo} alt="" />
              <img className="technologies-icon" src={tailwind} alt="" />
              <img className="technologies-icon" src={bootstrap} alt="" />
              <img className="technologies-icon" src={figmalogo} alt="" />
              <img className="technologies-icon" src={javascriptlogo} alt="" />
              <img className="technologies-icon" src={reactlogo} alt="" />
              <img className="technologies-icon" src={stimuluslogo} alt="" />
              <img className="technologies-icon" src={rubylogo} alt="" />
              <img className="technologies-icon" src={railslogo} alt="" />
              <img className="technologies-icon" src={githublogo} alt="" />
              <img className="technologies-icon" src={postgreslogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
