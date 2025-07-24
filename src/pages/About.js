import React from 'react';

function About() {
  return (
    <div className="container">
      <header className="prose-header">
        <h1>Professional Journey</h1>
        
      </header>

      <main>
        {/* Origins Section */}
        <section className="prose-section">
          <h2>My Roots</h2>
          <div className="timeline">
            <div className="timeline-event">
              <div className="timeline-date"> 2007 </div>
              <div className="timeline-content">
                <h3>Born in New Britain, CT</h3>
                <p>
                  Grew up in a not-so tech savy household
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <h3>New Britain High School</h3>
                <p>
                  Graduated in the class of 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="prose-section">
          <h2>Work History</h2>
          <div className="timeline">
            <div className="timeline-event">
              <div className="timeline-date">2018-19</div>
              <div className="timeline-content">
                <h3>Tech Intern • Portland Web Solutions</h3>
                <p>
                  Assisted in developing WordPress sites for clients, gaining real-world 
                  experience with client communications and project management.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-date">2020-21</div>
              <div className="timeline-content">
                <h3>Freelance Developer</h3>
                <p>
                  Built custom Shopify stores and React applications while attending 
                  community college. Used earnings to fund university applications.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-date">2022-Present</div>
              <div className="timeline-content">
                <h3>Junior Developer • Northwest Tech Collective</h3>
                <p>
                  Currently working remotely while pursuing my CS degree, specializing in 
                  API integrations and performance optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="prose-section">
          <h2>Education</h2>
          <div className="metrics">
            <div className="metric">
              <div className="metric-value">3.8</div>
              <div className="metric-label">College GPA</div>
            </div>
            <div className="metric">
              <div className="metric-value">94%</div>
              <div className="metric-label">Degree Progress</div>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-event">
              <div className="timeline-date">2021-23</div>
              <div className="timeline-content">
                <h3>Portland Community College</h3>
                <p>
                  Associate's in Computer Science. Graduated with honors while maintaining 
                  freelance client work.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-date">2023-25</div>
              <div className="timeline-content">
                <h3>Oregon State University</h3>
                <p>
                  Bachelor's in Computer Science (in progress). Specializing in distributed 
                  systems and web architectures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="prose-section">
          <h2>Present Direction</h2>
          <p>
            Balancing professional development with academic growth, I allocate 20% of 
            all freelance income to educational expenses while continuously expanding 
            my technical capabilities through real-world projects.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>This professional journey is ongoing — last updated {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}

export default About;