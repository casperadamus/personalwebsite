import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ROLES = [
  'computer engineer',
  'applied mathematician',
  'software developer',
  'builder of things',
];

function Home() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    let t;
    if (!deleting) {
      if (displayed.length < full.length) {
        t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 90);
      } else {
        t = setTimeout(() => setDeleting(true), 2400);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <div className="container">
      <div className="hero">
        <div className="hero-prompt">
          <span className="p-path">~/casper</span>
          <span className="p-dollar"> $ </span>
          <span className="p-cmd">whoami</span>
        </div>

        <h1 className="hero-name">Casper Adamus</h1>

        <div className="hero-role">
          <span>{displayed}</span>
          <span className="cursor-block">█</span>
        </div>

        <div className="hero-meta">
          <span>@</span>
          <span className="hm-val">uconn</span>
          <span className="hm-sep"> · </span>
          <span className="hm-val">CE + Applied Math</span>
          <span className="hm-sep"> · </span>
          <span className="hm-val">Hartford, CT</span>
        </div>

        <div className="hero-links">
          <Link to="/about" className="hero-btn">./about</Link>
          <Link to="/projects" className="hero-btn">./projects</Link>
          <Link to="/contact" className="hero-btn">./contact</Link>
        </div>
      </div>

      <div className="phi-bar">
        <span className="phi-sym">φ</span>
        <span className="phi-eq"> = 1.618033988749895…</span>
        <div className="phi-rule"></div>
      </div>

      <div className="section">
        <h2 className="section-title">currently</h2>
        <p>
          Software Developer at <span className="hl">i3</span>, building data pipelines
          and backend systems. Studying Computer Engineering &amp; Applied Mathematics at{' '}
          <span className="hl">University of Connecticut</span>.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">services</h2>
        <div className="post-item">
          <h3>System &amp; Infrastructure Solutions</h3>
          <p>
            Cost-effective technology repairs and upgrades, ensuring minimal
            downtime and maximum productivity.
          </p>
        </div>
        <div className="post-item">
          <h3>Custom Web Development</h3>
          <p>
            Responsive, performance-optimized websites built with modern
            frameworks (React, Next.js). Focus on clean code and maintainable
            architecture.
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">education funding</h2>
        <p className="muted">
          100% of service revenue supports my Computer Engineering education at UConn.
        </p>
        <div className="stats-grid">
          <div className="stat">
            <span className="stat-n">$36k</span>
            <span className="stat-l">Cost of Attendance</span>
          </div>
          <div className="stat">
            <span className="stat-n">$125</span>
            <span className="stat-l">Tuition Covered</span>
          </div>
          <div className="stat">
            <span className="stat-n">3</span>
            <span className="stat-l">Clients Served</span>
          </div>
          <div className="stat">
            <span className="stat-n">100%</span>
            <span className="stat-l">Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
