import React from "react";
import "../styles/projects.css";
import { CarouselOrientation } from "../components/carouselOrientation";


const Projects = () => {
  return (
    <div className="father-projects">
      <div className="projects-filter">
        <div className="carousel-container">
          <div className="carousel-text">
          <h1 className="">Local Loop</h1>
          <p></p>
          </div>

          < CarouselOrientation />
        </div>
      </div>
    </div>
  );
};

export default Projects;
