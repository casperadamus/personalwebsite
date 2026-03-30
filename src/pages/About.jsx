import React from 'react';

function About() {
  return (
    <div className="container">
      <h1>About</h1>

      <p>
        I'm Casper Adamus — an IT Consultant and Computer Engineering student.
        I've had the opportunity to be a part of many influential projects and
        experiences.
      </p>

      <div className="section">
        <h2 className="section-title">roots</h2>
        <div className="timeline-item">
          <span className="date">2007</span>
          <h3>Born in New Britain, CT</h3>
          <p>
            Grew up in a small town, where I met a lot of my friends and great
            role models that aided throughout my K-12 education, allowing me to
            find passion in the things I do today.
          </p>
        </div>
        <div className="timeline-item">
          <span className="date">2025</span>
          <h3>New Britain High School</h3>
          <p>
            Graduated in the class of 2025. This was a place where I discovered
            both my strengths and my weaknesses which were key to my growth as a
            person.
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">work history</h2>
        <div className="timeline-item">
          <span className="date">2023</span>
          <h3>Tech Volunteer · New Britain MIS</h3>
          <p>
            Volunteered with my school district to get schools tech-wise ready
            for the year. Set up Chromebook carts across buildings and helped
            improve the district website.
          </p>
        </div>
        <div className="timeline-item">
          <span className="date">2024</span>
          <h3>Data & Client Support Intern · Pratt & Whitney</h3>
          <p>
            Helped improve how new aerospace clients were onboarded by using SQL
            to look through fleet data and build dashboard metrics. Made things
            easier for new hires by working with Power BI developers.
          </p>
        </div>
        <div className="timeline-item">
          <span className="date">2025 – present</span>
          <h3>IT Intern · East Hartford Public Schools</h3>
          <p>
            Set up staff laptops, fixed Chromebooks and other laptops by figuring
            out both hardware and software problems, and helped set up classrooms
            for the start of the school year.
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">education</h2>
        <div className="timeline-item">
          <span className="date">2021 – 2025</span>
          <h3>CCSU, CT State, and UConn Dual Enrollment</h3>
          <p>
            Completed 51 college credits while in high school, focusing on
            physics and mathematics courses.
          </p>
        </div>
        <div className="timeline-item">
          <span className="date">2025 – present</span>
          <h3>University of Connecticut</h3>
          <p>
            Bachelor's in Computer Engineering (in progress). Specializing in
            queuing systems and mathematics.
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">present direction</h2>
        <p>
          My current focus is on pursuing my education whilst still having an
          outlook towards career and research opportunities.
        </p>
      </div>

      <hr />
      <p className="muted">
        This journey is ongoing — last updated{' '}
        {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

export default About;
