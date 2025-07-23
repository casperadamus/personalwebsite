// src/pages/Projects.js
import React from 'react';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1",
    technologies: ["React", "Node.js"],
    link: "#"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2",
    technologies: ["Python", "Django"],
    link: "#"
  }
];

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.join(', ')}
            </div>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;