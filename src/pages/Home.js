import React from 'react';
import ProfileImage from '../images/profile.jpg';

function Home() {
  return (
    <div className="container">
      {/* Professional Header with Image */}
      <header className="prose-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Casper Adamus</h1>
            <p>IT Consultant & Computer Engineering Student</p>
          </div>
          <div className="profile-image-container">
            <img 
              src={ProfileImage} 
              alt="Casper Adamus" 
              className="profile-image"
              loading = "eager"
              decoding = "sync"
            />
          </div>
        </div>
      </header>

      <main>
        {/* Services Section */}
        <section className="prose-section">
          <h2>Professional Services</h2>
          <p>
            I provide targeted IT solutions for small businesses and startups, 
            specializing in efficient system implementations that deliver 
            measurable results.
          </p>
          
          <div className="timeline">
              <div className="timeline-event">
              <div className="timeline-date">IT</div>
              <div className="timeline-content">
                <h3>System & Infrastructure Solutions</h3>
                <p>
                  Cost-effective technology repairs and upgrades,
                  ensuring minimal downtime and maximum productivity.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-date">Web</div>
              <div className="timeline-content">
                <h3>Custom Web Development</h3>
                <p>
                  Responsive, performance-optimized websites built with modern 
                  frameworks (React, Next.js). Focus on clean code and 
                  maintainable architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Transparency */}
        <section className="prose-section">
          <h2>Education Funding Model</h2>
          <p>
            100% of all service revenue directly supports my Computer Engineering 
            education at the University of Connecticut. These are the numbers for reference:
          </p>
          
          <div className="metrics">
            <div className="metric">
              <div className="metric-value">$36,000</div>
              <div className="metric-label">Cost of Attendance</div>
            </div>
            <div className="metric">
              <div className="metric-value">$20 / $7000</div>
              <div className="metric-label">Tuition Covered</div>
            </div>
            <div className="metric">
              <div className="metric-value">2</div>
              <div className="metric-label">Clients Served</div>
            </div>
            <div className="metric">
              <div className="metric-value">100%</div>
              <div className="metric-label">Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Technical Articles 
        <section className="prose-section">
          <h2>Recent Technical Writings</h2>
          <div className="timeline">
            <div className="timeline-event">
              <div className="timeline-date">Jul</div>
              <div className="timeline-content">
                <h3>Troubleshooting: Mac Not Discovering Boot Drive</h3>
                <p>
                  When your Mac fails to detect the boot drive during startup, you may encounter various error screens or unexpected behavior. 
                </p>
              </div>
            </div>
          </div>
        </section>
*/}
      </main>
    </div>
    
  );
}

export default Home;