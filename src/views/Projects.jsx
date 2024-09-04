import React from "react";
import "../styles/projects.css";
import { CarouselOrientation } from "../components/carouselOrientation";

const Projects = () => {
  return (
    <div className="father-projects">
      <div className="projects-filter">
        <div className="carousel-container">
          <h1>This is a test</h1>
          <CarouselOrientation />
        </div>
      </div>
    </div>
  );
};

export default Projects;
