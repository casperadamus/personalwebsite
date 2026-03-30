import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <p style={{ marginTop: '1.5rem' }}>Welcome to my website :)</p>

      <p>
        On this site you can find a number of things:{' '}
        <Link to="/about">about</Link>,{' '}
        <Link to="/projects">projects</Link>,{' '}
        <Link to="/contact">contact</Link>
      </p>

      <hr />

      <div className="section">
        <h2 className="section-title">about me</h2>
        <p>
          I'm an IT Consultant and Computer Engineering student at the University
          of Connecticut. I provide targeted IT solutions for small businesses
          and startups, specializing in efficient system implementations that
          deliver measurable results.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">services</h2>
        <div className="post-item">
          <h3>System & Infrastructure Solutions</h3>
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
          100% of service revenue supports my Computer Engineering education at
          UConn.
        </p>
        <ul>
          <li>Cost of Attendance: $36,000</li>
          <li>Tuition Covered: $125 / $7,000</li>
          <li>Clients Served: 3</li>
          <li>Satisfaction: 100%</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
