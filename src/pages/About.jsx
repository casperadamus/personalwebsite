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
                <h3>Tech Volunteer • New Britain MIS</h3>
                <p>
                  Volunteered with my school district to get schools tech wise ready for the year. Set up Chromebook carts across buildings and helped improve the district website by working on a calendar that was easier for people to use.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h3>Data & Client Support Intern • Pratt & Whitneyx </h3>
                <p>
                  Helped improve how new aerospace clients were onboarded by using SQL to look through fleet data and build dashboard metrics. Also made things easier for new hires by talking with Power BI developers to understand their roles and figure out what info was really useful.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-date">2025-Present</div>
              <div className="timeline-content">
                <h3>IT Intern • East Hartford Public Schools</h3>
                <p>
                  Set up staff laptops by installing the right software and making sure the operating systems were ready to go. Fixed Chromebooks and other laptops by figuring out both hardware and software problems. Also helped set up classrooms by placing and organizing devices for the start of the school year.
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
              <div className="metric-value">37%</div>
              <div className="metric-label">Degree Progress</div>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-event">
              <div className="timeline-date">2021-25</div>
              <div className="timeline-content">
                <h3>CCSU, CT State, and UConn Dual Enrollment </h3>
                <p>
                  Completed 51 college credits while in high school, focusing on physics and mathematics courses. This experience helped me build a strong foundation for my future studies.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-date">2025-Present</div>
              <div className="timeline-content">
                <h3>University of Connecticut</h3>
                <p>
                  Bachelor's in Computer Engineering (in progress). Specializing in queing 
                  systems and mathematics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="prose-section">
          <h2>Present Direction</h2>
          <p>
            My current focus is on pursuing my education whilst still having an outlook towards career and research opportunities.
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