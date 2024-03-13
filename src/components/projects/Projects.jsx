import React from "react";
import "./Projects.css";
import Project from "./ProjectsAni";
import projectData from "./ProjectsData";

function Projects() {
  return(
    <div className="Projects" id="projects">
      <h1 className="title">Projects</h1>
      <div className="projects">
        {projectData.map((project) => (
          <Project key={project.id} image={project.image} title={project.title} info={project.info} period={project.period} used={project.used} team={project.team} work={project.work} link={project.link} source={project.source} />
        ))}
      </div>
    </div>
  );
};

export default Projects;