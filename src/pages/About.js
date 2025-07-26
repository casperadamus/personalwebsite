import React from 'react';

function About() {
  return (
    <div className="container">
      <header className="prose-header">
        <h1>Journey</h1>
        <p>I've had the opprotunity to be apart of many influential projects and experiences. </p>
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
                  Grew up in a small town, where I met a lot of my friends and great role models that aided throughout my K-12 education, allowing me to find passion in the things I do today! 
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <h3>New Britain High School</h3>
                <p>
                  Graduated in the class of 2025. This was a place where I discovered both my strenths and my weaknesses which were key to my growth as a person. 
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
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h3>Tech Intern Volunteer • New Britain MIS</h3>
                <p>
                  Assisted in developing WordPress sites for clients, gaining real-world 
                  experience with client communications and project management.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h3>Data & Client Support Intern • Pratt & Whitneyx </h3>
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
              <div className="metric-value">N/A</div>
              <div className="metric-label">College GPA</div>
            </div>
            <div className="metric">
              <div className="metric-value">35%</div>
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