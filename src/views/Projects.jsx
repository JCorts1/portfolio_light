import React from "react";
import "../styles/Projects.css"
import { CarouselOrientation } from "../components/CarouselOrientation";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <div className="father-projects">
      <div className="projects-filter">
        <div className="nav-projects">
          <Navbar />
        </div>
        <div className="carousel-container">
          <div className="carousel-text">
            <h1 className="">Local Loop</h1>
            <p>
              Final Project from Le Wagon Bootcamp. This phone application was
              made with Ruby on Rails using MVC. contains validations, Database
              created with Postgresql. In the front-end we can find pure HTML,
              pure CSS and Stimulus.
              <br />
              This is a social media where you can find and participate in
              events around your zipcode.
            </p>
          </div>

          <CarouselOrientation />
        </div>
      </div>
    </div>
  );
};

export default Projects;
