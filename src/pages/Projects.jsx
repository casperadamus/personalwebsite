import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of project 1',
    technologies: ['React', 'Node.js'],
    link: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of project 2',
    technologies: ['Python', 'Django'],
    link: '#',
  },
];

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <p className="muted">Things I've built or worked on.</p>

      <div className="section">
        {projects.map((project) => (
          <div key={project.id} className="post-item">
            <h3>
              <a href={project.link}>{project.title}</a>
            </h3>
            <p>{project.description}</p>
            <div>
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
