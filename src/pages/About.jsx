import React from 'react';

const SKILLS = [
  'Python', 'Java', 'SQL', 'C/C++', 'TypeScript', 'JavaScript',
  'Laravel', 'Node.js', 'React', 'Agile', 'Jira', 'ServiceNow',
  'Power BI', 'Google Cloud', 'Bash', 'Git',
];

function About() {
  return (
    <div className="container">
      <h1 className="page-title">About</h1>
      <p className="page-sub">
        I'm Casper Adamus — a Computer Engineering &amp; Applied Mathematics student at UConn.
        I've had the opportunity to be part of many influential projects and experiences.
      </p>

      <div className="section">
        <h2 className="section-title">work experience</h2>

        <div className="timeline-item">
          <span className="date">2025 – present</span>
          <h3>Software Developer · i3 (Internal Insights &amp; Innovation)</h3>
          <ul>
            <li>
              Engineered a high-throughput data ingestion pipeline using Google Cloud Vision API
              to perform OCR on complex nutrition labels.
            </li>
            <li>
              Managed backend systems for account requests and user authentication, ensuring
              secure and efficient processing for grant-sponsored initiatives.
            </li>
            <li>
              Collaborated directly with clients to gather requirements, provide technical
              guidance, and deliver solutions aligned with grant objectives.
            </li>
          </ul>
        </div>

        <div className="timeline-item">
          <span className="date">2025</span>
          <h3>IT Intern · East Hartford Public Schools</h3>
          <ul>
            <li>
              Provisioned and configured staff laptops using automated imaging tools, ensuring
              all devices met security standards and software requirements.
            </li>
            <li>
              Performed hardware and software repairs for ChromeOS and Windows devices,
              resolving complex technical issues to minimize downtime.
            </li>
            <li>
              Managed the large-scale rollout of classroom technology, including network
              connectivity testing and device integration into management consoles.
            </li>
          </ul>
        </div>

        <div className="timeline-item">
          <span className="date">2024</span>
          <h3>Data &amp; Client Support Intern · Pratt &amp; Whitney</h3>
          <ul>
            <li>
              Streamlined end-to-end onboarding workflows for aerospace stakeholders,
              optimizing operational efficiency and technical resource allocation.
            </li>
            <li>
              Leveraged SQL queries to extract and normalize fleet data, generating key
              performance metrics for client-facing BI dashboards.
            </li>
            <li>
              Conducted technical stakeholder interviews to audit legacy Power BI workflows,
              resulting in a restructured onboarding framework for incoming engineering talent.
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">education</h2>

        <div className="timeline-item">
          <span className="date">2025 – present</span>
          <h3>University of Connecticut</h3>
          <p>
            B.S. Computer Engineering &amp; B.A. Mathematics — Applied Mathematics Concentration
          </p>
          <p className="timeline-courses">
            Partial Differential Equations · Probability · Number Theory · Applied Linear Algebra · Data Structures
          </p>
        </div>

        <div className="timeline-item">
          <span className="date">2021 – 2025</span>
          <h3>CCSU, CT State &amp; UConn Dual Enrollment</h3>
          <p>
            Completed 51 college credits while in high school, focusing on physics and mathematics.
          </p>
        </div>

        <div className="timeline-item">
          <span className="date">2025</span>
          <h3>New Britain High School</h3>
          <p>Graduated Class of 2025.</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">skills</h2>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">awards &amp; certifications</h2>
        <div className="award-list">
          <div className="award-item">
            <span className="award-year">2023</span>
            <div>
              <h3>Samsung Solve for Tomorrow — State Finalist</h3>
              <p>Selected as a Connecticut State Finalist, awarded $2,500 in prizes.</p>
            </div>
          </div>
          <div className="award-item">
            <span className="award-year">2022</span>
            <div>
              <h3>Lt. Governor's Computing Challenge</h3>
              <p>Recognized for excellence in computing.</p>
            </div>
          </div>
          <div className="award-item">
            <span className="award-year">cert</span>
            <div>
              <h3>OSHA General Industry Safety &amp; Health</h3>
            </div>
          </div>
          <div className="award-item">
            <span className="award-year">cert</span>
            <div>
              <h3>Seal of Biliteracy — Polish</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">interests</h2>
        <div className="skills-grid">
          {['Hiking', 'Volleyball', 'Reading', 'Pure Mathematics', 'Fly Fishing'].map((i) => (
            <span key={i} className="tag gold">{i}</span>
          ))}
        </div>
      </div>

      <hr />
      <p className="muted">Last updated {new Date().toLocaleDateString()}</p>
    </div>
  );
}

export default About;
