import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Pi Remote',
    path: 'pi-remote',
    description:
      'A full-stack remote execution interface allowing users to trigger Python and Bash scripts on a Raspberry Pi via a web-based GUI. Built a Node.js backend that manages secure SSH connections to remote Linux environments. Implements asynchronous command execution for instant frontend responsiveness while tasks process in the background.',
    technologies: ['Node.js', 'JavaScript', 'SSH/SFTP', 'Bash', 'Raspberry Pi'],
    link: 'https://github.com/casperadamus/pi-remote',
    status: 'active',
  },
  {
    id: 2,
    title: 'Personal Website',
    path: 'personalwebsite',
    description:
      'This site — a personal portfolio built with React, deployed to GitHub Pages. Designed with a CS/math aesthetic, golden ratio (φ = 1.618…) proportions, animated background, and terminal-inspired UI components.',
    technologies: ['React', 'CSS', 'GitHub Pages'],
    link: 'https://github.com/casperadamus/personalwebsite',
    status: 'active',
  },
];

function Projects() {
  return (
    <div className="container">
      <h1 className="page-title">Projects</h1>
      <p className="muted">Things I've built or worked on.</p>

      <div className="section">
        {projects.map((p) => (
          <div key={p.id} className="terminal-card">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-path">~/projects/{p.path}</span>
              <span className="terminal-status">{p.status}</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-prompt">
                <span className="t-dollar">$</span>
                <span className="t-cmd"> cat README.md</span>
              </div>
              <h3 className="t-title">{p.title}</h3>
              <p className="t-desc">{p.description}</p>
              <div className="t-tags">
                {p.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <div className="t-footer">
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="t-link">
                  view on github →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
