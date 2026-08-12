import { education, experience } from '../data';

const Experience = () => {
  return (
    <section className="experience-section section" id="experience">
      <div className="section-center">
        <div className="section-heading">
          <p className="section-label">Experience</p>
          <h2>Where the work happened</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={job.company}>
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{job.company}</h3>
                  {job.current && <span className="badge">Current</span>}
                </div>
                <p className="position">{job.role}</p>
                <p className="date">{job.period}</p>
                <ul className="highlight-list">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="education-block">
          <p className="section-label">Education</p>
          <h3>{education.degree}</h3>
          <p className="position">{education.school}</p>
          <p className="date">
            {education.period} · {education.detail}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
