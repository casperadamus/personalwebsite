import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Pi Remote',
    description:
      'A lightweight remote control interface for Raspberry Pi. Lets you trigger scripts on your Pi from any browser over SSH — built for home automation and quick hardware prototyping. Features a minimal HTML frontend backed by a Node.js server that handles SSH tunneling, with deployment options for Vercel, Railway, and local setups.',
    technologies: ['Node.js', 'HTML', 'JavaScript', 'SSH', 'Raspberry Pi'],
    link: 'https://github.com/casperadamus/pi-remote',
  },
  {
    id: 2,
    title: 'Personal Website',
    description:
      'This site — a minimal personal website inspired by the digital garden aesthetic. Built with React and deployed to GitHub Pages.',
    technologies: ['React', 'CSS', 'GitHub Pages'],
    link: 'https://github.com/casperadamus/personalwebsite',
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
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
